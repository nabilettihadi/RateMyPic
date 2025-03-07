import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageGalleryComponent } from './components/image-gallery/image-gallery.component';
import { ThemeSwitcherComponent } from './components/theme-switcher/theme-switcher.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ImageGalleryComponent, ThemeSwitcherComponent],
  template: `
    <div class="flex flex-col min-h-screen overflow-x-hidden bg-fixed bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <header class="bg-transparent backdrop-blur-sm transition-colors duration-300 fixed top-0 left-0 right-0 z-10">
        <nav class="container mx-auto px-6 py-3 sm:py-4">
          <div class="flex items-center justify-between max-w-7xl mx-auto">
            <div class="flex items-center space-x-2 sm:space-x-4">
              <!-- Logo SVG -->
              <svg class="w-8 h-8 sm:w-10 sm:h-10 text-purple-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.5 10C9.32843 10 10 9.32843 10 8.5C10 7.67157 9.32843 7 8.5 7C7.67157 7 7 7.67157 7 8.5C7 9.32843 7.67157 10 8.5 10Z" fill="currentColor"/>
                <path d="M21 15L16 10L5 21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <h1 class="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Rate My Pic</h1>
            </div>
            <div class="flex items-center">
              <app-theme-switcher></app-theme-switcher>
            </div>
          </div>
        </nav>
      </header>
      <main class="flex-grow pt-16 sm:pt-20 px-4">
        <div class="max-w-7xl mx-auto w-full">
          <app-image-gallery></app-image-gallery>
        </div>
      </main>
    </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'Rate My Pic';
}
