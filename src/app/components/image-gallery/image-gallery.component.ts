import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
import { Image } from '../../models/image';
import * as ImageActions from '../../store/actions/image.actions';
import * as ImageSelectors from '../../store/selectors/image.selectors';

@Component({
  selector: 'app-image-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('0.3s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('staggerFade', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger('100ms', [
            animate('0.3s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class ImageGalleryComponent implements OnInit {
  images$: Observable<Image[]>;
  loading$: Observable<boolean>;
  error$: Observable<any>;

  constructor(private readonly store: Store) {
    this.images$ = this.store.select(ImageSelectors.selectAllImages);
    this.loading$ = this.store.select(ImageSelectors.selectImagesLoading);
    this.error$ = this.store.select(ImageSelectors.selectImagesError);
  }

  ngOnInit(): void {
    this.store.dispatch(ImageActions.loadImages());
  }

  rateImage(id: number, rate: 'LIKE' | 'DISLIKE'): void {
    this.store.dispatch(ImageActions.rateImage({ rateRequest: { id, rate } }));
  }
}
