export interface Image {
  id: number;
  url: string;
  description: string;
  likes: number;
}

export interface RateRequest {
  id: number;
  rate: 'LIKE' | 'DISLIKE';
}

export interface RateResponse {
  status: 'OK' | 'ERROR';
  message?: string;
}
