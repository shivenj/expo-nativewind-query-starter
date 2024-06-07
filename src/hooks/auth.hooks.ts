import { authApi } from '@/api/api.auth';
import { LoginCredentials, LoginResponse, SignUpCredentials, SignupResponse } from '@/models/types.auth';
import { useMutation, UseMutationResult } from '@tanstack/react-query';

export const useLogin = (): UseMutationResult<LoginResponse, Error, LoginCredentials> => {
  return useMutation({
    mutationFn: authApi.login,
    mutationKey: ['login']
  });
};

export const useSignUp = (): UseMutationResult<SignupResponse, Error, SignUpCredentials> => {
  return useMutation({
    mutationFn: authApi.signUp,
    mutationKey: ['signUp']
  });
};