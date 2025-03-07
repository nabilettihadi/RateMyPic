import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { ImageGalleryComponent } from './components/image-gallery/image-gallery.component';
import { ThemeSwitcherComponent } from './components/theme-switcher/theme-switcher.component';
import { imageReducer } from './store/reducers/image.reducer';
import { ImageEffects } from './store/effects/image.effects';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot({ images: imageReducer }),
    EffectsModule.forRoot([ImageEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: !environment.production,
      autoPause: true,
    }),
    AppComponent,
    ImageGalleryComponent,
    ThemeSwitcherComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } 