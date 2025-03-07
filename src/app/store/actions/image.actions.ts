import { createAction, props } from '@ngrx/store';
import { Image, RateRequest, RateResponse } from '../../models/image';

export const loadImages = createAction('[Image] Load Images');
export const loadImagesSuccess = createAction(
  '[Image] Load Images Success',
  props<{ images: Image[] }>()
);
export const loadImagesFailure = createAction(
  '[Image] Load Images Failure',
  props<{ error: any }>()
);

export const rateImage = createAction(
  '[Image] Rate Image',
  props<{ rateRequest: RateRequest }>()
);
export const rateImageSuccess = createAction(
  '[Image] Rate Image Success',
  props<{ id: number, rate: 'LIKE' | 'DISLIKE', response: RateResponse }>()
);
export const rateImageFailure = createAction(
  '[Image] Rate Image Failure',
  props<{ error: any }>()
); 