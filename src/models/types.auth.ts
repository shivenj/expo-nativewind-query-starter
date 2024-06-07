// Define the response and request types
export interface LoginResponse {
    token: string;
    user: {
      id: string;
      name: string;
      email: string;
    };
  }
  
export interface SignupResponse {
    token: string;
    user: {
      id: string;
      name: string;
      email: string;
    };
  }
  
export interface LoginCredentials {
    email: string;
    password: string;
  }
  
export interface SignUpCredentials {
      email: string;
      password: string;
}