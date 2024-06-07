import { LoginCredentials, SignUpCredentials } from '@/models/types.auth';
import { createQueryKeyStore } from '@lukemorales/query-key-factory'
import { authApi } from './api.auth';

export const authKeys = createQueryKeyStore({
    auth: {
      login: (credentials: LoginCredentials) => ({
        queryKey: ['login'],
        queryFn: () => authApi.login(credentials),
      }),
      signUp: (userData: SignUpCredentials) => ({
        queryKey: ['signUp'],
        queryFn: () => authApi.signUp(userData),
      }),
    },
  });