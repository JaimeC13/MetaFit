export interface RegisterRequest {
  username: string; 
  lastName: string;
  email: string;
  password: string;
  birthDate: string;
}

export interface AuthResponse {
 userId?: number;    
  firstName?: string; 
  email?: string;     
  token?: string;     
}