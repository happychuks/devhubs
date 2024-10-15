// payload-types.ts

// Types for the User object
export interface User {
    id: string; // UUID for the user
    username: string;
    email: string;
    first_name: string;
    last_name: string;
    role: 'developer' | 'consumer'; 
    profile_picture?: string; // optional
    bio?: string; // optional
    date_joined: string;
    is_active: boolean;
  }
  
  // Payload type for user registration
  export interface RegisterPayload {
    username: string;
    email: string;
    password: string;
    first_name?: string;
    last_name?: string;
    role?: 'developer' | 'consumer'; // optional role selection during registration
  }
  
  // Payload type for user login
  export interface LoginPayload {
    username: string;
    password: string;
  }
  
  // Payload type for user profile update
  export interface UpdateUserProfilePayload {
    first_name?: string;
    last_name?: string;
    email?: string;
    profile_picture?: File | null;
    bio?: string;
  }
  
  // Payload type for password change
  export interface ChangePasswordPayload {
    old_password: string;
    new_password: string;
    new_password_confirm: string;
  }
  
  // Payload type for password reset request
  export interface PasswordResetRequestPayload {
    email: string;
  }
  
  // Payload type for password reset confirm
  export interface PasswordResetConfirmPayload {
    uid: string;
    token: string;
    new_password: string;
    new_password_confirm: string;
  }
  
  // Payload type for authentication responses (JWT)
  export interface AuthResponse {
    access: string;
    refresh: string;
    user: User;
  }
  
  // Error response type
  export interface ErrorResponse {
    detail: string;
  }
  