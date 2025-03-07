# Rate My Pic

A modern web application built with Angular, NgRx, and Tailwind CSS that allows users to rate images with like/dislike functionality.

## Features

- Load and display images in a responsive grid layout
- Like/Dislike functionality for each image
- State management with NgRx
- Modern UI with Tailwind CSS
- Responsive design for all screen sizes
- Loading and error states handling

## Tech Stack

- Angular 17
- NgRx for state management
- Tailwind CSS for styling
- RxJS for reactive programming

## Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd rate-my-pic
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

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   └── image-gallery/
│   ├── models/
│   │   └── image.ts
│   ├── services/
│   │   └── image.service.ts
│   └── store/
│       ├── actions/
│       ├── effects/
│       ├── reducers/
│       └── selectors/
```

## API Endpoints

The application uses the following API endpoints:

- GET `https://api.mademyday.ai/Mock/getimages.php` - Fetch images
- POST `https://api.mademyday.ai/Mock/rateimages.php` - Rate images

## Screenshots

[Screenshots will be added once the application is running]

## Development

- The application uses NgRx for state management
- Tailwind CSS is used for styling
- The application is fully responsive and works on all screen sizes
- Error handling is implemented for API calls
- Loading states are handled and displayed to users

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.
