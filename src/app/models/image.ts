export interface Image {
  id: string;
  url: string;
  title?: string;
  description?: string;
  liked?: boolean;
  disliked?: boolean;
}

export interface RateResponse {
  status: 'OK' | 'ERROR';
  message?: string;
}

export interface RateRequest {
  id: string;
  rate: 'LIKE' | 'DISLIKE';
}
