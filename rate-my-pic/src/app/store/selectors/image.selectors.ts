import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ImageState } from '../reducers/image.reducer';

export const selectImageState = createFeatureSelector<ImageState>('images');

export const selectAllImages = createSelector(
  selectImageState,
  (state: ImageState) => state.images
);

export const selectImagesLoading = createSelector(
  selectImageState,
  (state: ImageState) => state.loading
);

export const selectImagesError = createSelector(
  selectImageState,
  (state: ImageState) => state.error
); 