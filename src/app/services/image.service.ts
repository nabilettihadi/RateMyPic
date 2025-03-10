import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Image, RateRequest, RateResponse } from '../models/image';

interface ApiRateResponse {
  STATUS: string;
}

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private readonly GET_IMAGES_URL = 'https://api.mademyday.ai/Mock/getimages.php';
  private readonly RATE_IMAGES_URL = 'https://api.mademyday.ai/Mock/rateimages.php';

  constructor(private http: HttpClient) {}

  getImages(): Observable<Image[]> {
    console.log('Fetching images from API:', this.GET_IMAGES_URL);
    return this.http.get<Image[]>(this.GET_IMAGES_URL).pipe(
      tap(images => console.log('Received images from API:', images)),
      catchError((error: HttpErrorResponse) => {
        console.error('Error fetching images:', error);
        // Retourner des images de test en cas d'erreur
        const fallbackImages: Image[] = [
          {
            id: 78202,
            url: "https://srv4.imgcdnhost.com/large/2020/42/9630016794762239985748613-193397.png",
            description: "Verschneite Landschaft",
            likes: 276
          },
          {
            id: 369466,
            url: "https://srv4.imgcdnhost.com/medium/2019/02/4811679646798525787541187-859004.png",
            description: "Leuchtturm am Meer",
            likes: 298
          },
          {
            id: 134034,
            url: "https://srv4.imgcdnhost.com/medium/2014/50/6241660302118869421189671-155134.png",
            description: "Regenbogen über Wiese",
            likes: 267
          }
        ];
        console.log('Returning fallback images:', fallbackImages);
        return of(fallbackImages);
      })
    );
  }

  rateImage(rateRequest: RateRequest): Observable<RateResponse> {
    console.log('Rating image with request:', rateRequest);
    return this.http.post<ApiRateResponse>(this.RATE_IMAGES_URL, rateRequest).pipe(
      tap(response => console.log('Rate image response:', response)),
      map(response => {
        // L'API renvoie {"STATUS":"OK"}, nous devons le convertir en notre format
        if (response && response.STATUS === 'OK') {
          return { status: 'OK' as const };
        } else {
          return { status: 'ERROR' as const, message: 'Unknown error' };
        }
      }),
      catchError((error: HttpErrorResponse) => {
        console.error('Error rating image:', error);
        // Retourner une réponse de test en cas d'erreur
        const fallbackResponse: RateResponse = {
          status: 'ERROR' as const,
          message: 'Failed to rate image due to network error'
        };
        console.log('Returning fallback response:', fallbackResponse);
        return of(fallbackResponse);
      })
    );
  }
}
