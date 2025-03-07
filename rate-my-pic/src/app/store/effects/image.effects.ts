import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ImageService } from '../../services/image.service';
import * as ImageActions from '../actions/image.actions';

@Injectable()
export class ImageEffects {
  loadImages$ = createEffect(() => this.actions$.pipe(
    ofType(ImageActions.loadImages),
    mergeMap(() => this.imageService.getImages()
      .pipe(
        map(images => ImageActions.loadImagesSuccess({ images })),
        catchError(error => of(ImageActions.loadImagesFailure({ error })))
      ))
  ));

  rateImage$ = createEffect(() => this.actions$.pipe(
    ofType(ImageActions.rateImage),
    mergeMap(({ rateRequest }) => this.imageService.rateImage(rateRequest)
      .pipe(
        map(response => ImageActions.rateImageSuccess({ 
          id: rateRequest.id, 
          rate: rateRequest.rate, 
          response 
        })),
        catchError(error => of(ImageActions.rateImageFailure({ error })))
      ))
  ));

  constructor(
    private actions$: Actions,
    private imageService: ImageService
  ) {}
} 