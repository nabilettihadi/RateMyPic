import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-theme-switcher',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      (click)="toggleTheme()"
      class="relative inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 -ml-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
      [attr.aria-label]="(themeService.isDarkMode$ | async) ? 'Passer au mode clair' : 'Passer au mode sombre'"
    >
      <div class="relative">
        <!-- Icône Lune (Mode Sombre) -->
        <svg
          *ngIf="!(themeService.isDarkMode$ | async)"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 sm:h-7 sm:w-7 text-gray-800 dark:text-gray-200 transition-transform duration-300 hover:rotate-12"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
          <path d="M12.75 3.75a.75.75 0 00-1.5 0v.75a.75.75 0 001.5 0v-.75zM13.5 12a.75.75 0 01-.75.75h-.75a.75.75 0 010-1.5h.75a.75.75 0 01.75.75z" />
          <path d="M9.75 8.25a.75.75 0 00-1.5 0v.75a.75.75 0 001.5 0v-.75zM16.5 8.25a.75.75 0 00-1.5 0v.75a.75.75 0 001.5 0v-.75z" />
        </svg>
        
        <!-- Icône Soleil (Mode Clair) -->
        <svg
          *ngIf="themeService.isDarkMode$ | async"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 sm:h-7 sm:w-7 text-yellow-400 transition-transform duration-300 hover:rotate-90"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
        </svg>
      </div>
    </button>
  `,
  styles: [`
    :host {
      display: block;
    }

    button {
      position: relative;
      overflow: hidden;
    }

    button::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 5px;
      height: 5px;
      background: rgba(255, 255, 255, 0.5);
      opacity: 0;
      border-radius: 100%;
      transform: scale(1, 1) translate(-50%, -50%);
      transform-origin: 50% 50%;
    }

    button:focus::after {
      animation: ripple 1s ease-out;
    }

    @keyframes ripple {
      0% {
        transform: scale(0, 0);
        opacity: 0.5;
      }
      100% {
        transform: scale(20, 20);
        opacity: 0;
      }
    }
  `]
})
export class ThemeSwitcherComponent {
  constructor(public themeService: ThemeService) {}

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
} 