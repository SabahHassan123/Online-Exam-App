"use server";
import { getServerSession } from "next-auth";
import { JSON_HEADER } from "../constants/api.contants";
import { authOptions } from "@/auth";

export async function SignUp(userData: SignupRequest) {
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

export async function ForgotPassword(email: string) {
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

export async function VerifyCode(resetCode: string) {
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
export async function ResetPassword(resetPasswordData: ResetPasswordRequest) {
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

export async function Logout() {
  const session = await getServerSession(authOptions);
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
