export type UserId = string | number;

export interface User {
  id: UserId;
  name: string;
  email: string;
}

export interface ApiResponse<T> {
  data: T;
  status: 'success' | 'error';
  message?: string;
}
