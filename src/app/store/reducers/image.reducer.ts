import { createReducer, on } from '@ngrx/store';
import { Image } from '../../models/image';
import * as ImageActions from '../actions/image.actions';

export interface ImageState {
  images: Image[];
  loading: boolean;
  error: any;
}

export const initialState: ImageState = {
  images: [],
  loading: false,
  error: null
};

export const imageReducer = createReducer(
  initialState,
  on(ImageActions.loadImages, state => ({
    ...state,
    loading: true,
    error: null
  })),
  on(ImageActions.loadImagesSuccess, (state, { images }) => ({
    ...state,
    images,
    loading: false
  })),
  on(ImageActions.loadImagesFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false
  })),
  on(ImageActions.rateImage, state => ({
    ...state,
    loading: true,
    error: null
  })),
  on(ImageActions.rateImageSuccess, (state, { id, rate }) => ({
    ...state,
    images: state.images.map(image => 
      image.id === id 
        ? { 
            ...image, 
            liked: rate === 'LIKE' ? true : image.liked,
            disliked: rate === 'DISLIKE' ? true : image.disliked
          } 
        : image
    ),
    loading: false
  })),
  on(ImageActions.rateImageFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false
  }))
); 