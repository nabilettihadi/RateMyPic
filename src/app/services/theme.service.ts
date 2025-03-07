import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private isDarkMode = new BehaviorSubject<boolean>(false);
  isDarkMode$ = this.isDarkMode.asObservable();

  constructor() {
    // Vérifier si l'utilisateur préfère le thème sombre au niveau du système
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Vérifier si un thème est déjà enregistré dans le localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.setDarkMode(savedTheme === 'dark');
    } else {
      this.setDarkMode(prefersDark);
    }

    // Écouter les changements de préférence système
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      if (!localStorage.getItem('theme')) {
        this.setDarkMode(e.matches);
      }
    });
  }

  toggleTheme(): void {
    this.isDarkMode.next(!this.isDarkMode.value);
    this.updateThemeClass();
  }

  private setDarkMode(isDark: boolean): void {
    this.isDarkMode.next(isDark);
    this.updateThemeClass();
  }

  private updateThemeClass(): void {
    if (this.isDarkMode.value) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }
} 