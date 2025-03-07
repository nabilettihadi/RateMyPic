import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Image } from '../../models/image';
import * as ImageActions from '../../store/actions/image.actions';
import * as ImageSelectors from '../../store/selectors/image.selectors';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class ImageGalleryComponent implements OnInit {
  images$: Observable<Image[]>;
  loading$: Observable<boolean>;
  error$: Observable<any>;

  constructor(private store: Store) {
    this.images$ = this.store.select(ImageSelectors.selectAllImages);
    this.loading$ = this.store.select(ImageSelectors.selectImagesLoading);
    this.error$ = this.store.select(ImageSelectors.selectImagesError);
  }

  ngOnInit(): void {
    this.store.dispatch(ImageActions.loadImages());
  }

  rateImage(id: string, rate: 'LIKE' | 'DISLIKE'): void {
    this.store.dispatch(ImageActions.rateImage({ rateRequest: { id, rate } }));
  }
}
