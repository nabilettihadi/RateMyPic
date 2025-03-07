import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Image, RateRequest, RateResponse } from '../models/image';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private readonly GET_IMAGES_URL = 'https://api.mademyday.ai/Mock/getimages.php';
  private readonly RATE_IMAGES_URL = 'https://api.mademyday.ai/Mock/rateimages.php';

  constructor(private http: HttpClient) { }

  getImages(): Observable<Image[]> {
    return this.http.get<Image[]>(this.GET_IMAGES_URL);
  }

  rateImage(rateRequest: RateRequest): Observable<RateResponse> {
    return this.http.post<RateResponse>(this.RATE_IMAGES_URL, rateRequest);
  }
}
