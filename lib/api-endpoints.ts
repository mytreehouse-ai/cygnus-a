import apiClient from "./api-client";

export async function login(username: string, password: string) {
  return apiClient.post("/token", {
    username,
    password,
  });
}

export async function me(token: string) {
  return apiClient.get("/management/users/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export function forgotPassword() {}

export function changePassword() {}

export function checkResetPasswordTokenValidity() {}
