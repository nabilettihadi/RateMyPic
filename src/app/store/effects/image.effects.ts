import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { ImageService } from '../../services/image.service';
import * as ImageActions from '../actions/image.actions';

@Injectable()
export class ImageEffects {
  private actions$ = inject(Actions);
  private imageService = inject(ImageService);

  constructor() {
    console.log('ImageEffects initialized with actions$:', !!this.actions$);
  }

  loadImages$ = createEffect(() => {
    console.log('Creating loadImages$ effect with actions$:', !!this.actions$);
    return this.actions$.pipe(
      ofType(ImageActions.loadImages),
      tap(() => console.log('Processing loadImages action')),
      mergeMap(() => 
        this.imageService.getImages().pipe(
          tap(images => console.log('Received images:', images)),
          map(images => ImageActions.loadImagesSuccess({ images })),
          catchError(error => {
            console.error('Error loading images:', error);
            return of(ImageActions.loadImagesFailure({ error: error.message || 'Failed to load images' }));
          })
        )
      )
    );
  });

  rateImage$ = createEffect(() => {
    console.log('Creating rateImage$ effect with actions$:', !!this.actions$);
    return this.actions$.pipe(
      ofType(ImageActions.rateImage),
      tap(action => console.log('Processing rateImage action:', action.rateRequest)),
      mergeMap(action => 
        this.imageService.rateImage(action.rateRequest).pipe(
          tap(response => console.log('Rate image response:', response)),
          map(response => ImageActions.rateImageSuccess({ 
            id: action.rateRequest.id, 
            rate: action.rateRequest.rate,
            response 
          })),
          catchError(error => {
            console.error('Error rating image:', error);
            return of(ImageActions.rateImageFailure({ 
              error: error.message || 'Failed to rate image' 
            }));
          })
        )
      )
    );
  });
} 