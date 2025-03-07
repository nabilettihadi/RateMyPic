# Rate My Pic

A modern web application for discovering and rating photos, built with Angular and TailwindCSS.

## 📸 Screenshots

### Light Mode
![Light Mode](@Claire.png)

### Dark Mode
![Dark Mode](@Sombre.png)

## ✨ Features

- 🌓 Light/Dark theme
- 📱 Responsive design
- ❤️ Image rating system
- 🎯 Intuitive user interface
- 🚀 Optimized performance
- 🎨 Smooth animations

## 🛠️ Prerequisites

- Node.js (version 16 or higher)
- npm (version 8 or higher)
- Angular CLI (version 17 or higher)

## 🚀 Installation

1. Clone the repository:
```bash
git clone https://github.com/nabilettihadi/RateMyPic.git
cd RateMyPic
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
ng serve
```

4. Open your browser and navigate to `http://localhost:4200`

## ⚙️ Configuration

### API Configuration

1. Create an `environment.ts` file in `src/environments/`:
```typescript
export const environment = {
  production: false,
  apiUrl: 'YOUR_API_URL'
};
```

2. Create an `environment.prod.ts` file for production:
```typescript
export const environment = {
  production: true,
  apiUrl: 'YOUR_PRODUCTION_API_URL'
};
```

## 🏗️ Project Structure

```
src/
├── app/
│   ├── components/        # Reusable components
│   ├── services/         # Services
│   ├── store/           # Application state (NgRx)
│   └── models/          # Interfaces and types
├── assets/             # Static assets and images
└── environments/       # Environment configurations
```

## 🔧 Available Scripts

- `ng serve`: Start development server
- `ng build`: Build the application
- `ng test`: Run unit tests
- `ng lint`: Check code with ESLint

## 📦 Production

To build the application for production:

```bash
ng build --configuration production
```

Build files will be generated in the `dist/` folder.

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License. See the `LICENSE` file for details.
