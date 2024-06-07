import { URLS } from "@/utils";
import apiClient from "./api.client";
import { LoginCredentials, LoginResponse, SignUpCredentials, SignupResponse } from "@/models/types.auth";


export const authApi = {
  login: async (credentials: LoginCredentials): Promise<LoginResponse> => {
    const response = await apiClient.post(`${URLS.login}`, credentials);
    return response.data;
  },
  signUp: async (userData: SignUpCredentials): Promise<SignupResponse> => {
    const response = await apiClient.post(`${URLS.signup}`, userData);
    return response.data;
  },
};