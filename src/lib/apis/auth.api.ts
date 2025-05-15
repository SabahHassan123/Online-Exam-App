"use server";

import { JSON_HEADER } from "../constants/api.contants";
import decodeToken from "../utils/get-token";

export async function signUpAction(userData: SignupRequest) {
  const response = await fetch(`${process.env.API}/auth/signup`, {
    method: "POST",
    headers: { ...JSON_HEADER },
    body: JSON.stringify({
      username: userData.username,
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
      password: userData.password,
      rePassword: userData.rePassword,
      phone: userData.phone,
    }),
  });

  const result: APIResponse<AuthResponse> = await response.json();

  if ("code" in result) {
    return {
      success: false,
      message: result.message,
    };
  } else {
    return {
      success: true,
      id: result.user._id,
      token: result.token,
      user: result.user,
    };
  }
}

export async function forgotPasswordAction(email: string) {
  const response = await fetch(`${process.env.API}/auth/forgotPassword`, {
    method: "POST",
    headers: { ...JSON_HEADER },
    body: JSON.stringify({
      email: email,
    }),
  });

  const result: APIResponse<ForgotPasswordResponse> = await response.json();

  if ("code" in result) {
    return {
      success: false,
      message: result.message,
    };
  } else {
    return {
      success: true,
      info: result.info,
    };
  }
}

export async function verifyCodeAction(resetCode: string) {
  const response = await fetch(`${process.env.API}/auth/verifyResetCode`, {
    method: "POST",
    headers: { ...JSON_HEADER },
    body: JSON.stringify({
      resetCode: resetCode,
    }),
  });

  const result: VerificationAPIResponse = await response.json();

  if ("code" in result) {
    return {
      success: false,
      message: result.message,
    };
  } else {
    return {
      success: true,
    };
  }
}
export async function resetPasswordAction(resetPasswordData: ResetPasswordRequest) {
  const response = await fetch(`${process.env.API}/auth/resetPassword`, {
    method: "PUT",
    headers: { ...JSON_HEADER },
    body: JSON.stringify({
      email: resetPasswordData.email,
      newPassword: resetPasswordData.newPassword,
    }),
  });

  const result: APIResponse<ResetPasswordResponse> = await response.json();

  if ("code" in result) {
    return {
      success: false,
      message: result.message,
    };
  } else {
    return {
      success: true,
      token: result.token,
    };
  }
}

export async function logoutAction() {
  const session = await decodeToken();
  const response = await fetch(`${process.env.API}/auth/logout`, {
    method: "GET",
    headers: {
      ...JSON_HEADER,
      Authorization: `Bearer ${session!.token}`,
    },
  });

  const result: APIResponse<ResetPasswordResponse> = await response.json();

  if ("code" in result) {
    return {
      success: false,
      message: result.message,
    };
  } else {
    return {
      success: true,
      // token: result.token,
    };
  }
}
