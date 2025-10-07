export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
}

export interface LoginResponse {
  data: {
    user: any;
    token: string;
  };
}

export const login = async (data: LoginRequest): Promise<LoginResponse> => {
  // Mock implementation
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: {
          user: { id: 1, email: data.email },
          token: 'mock-token'
        }
      });
    }, 1000);
  });
};

export const register = async (_data: RegisterRequest): Promise<void> => {
  // Mock implementation
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
};