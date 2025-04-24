
declare type AppUser = {
    _id: string,
    username: string,
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    role: string,
    isVerified: boolean,
}

declare type AuthResponse = {
    token: string,
    user: AppUser,
}

declare type SignupRequest = {
    username: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    rePassword: string,
    phone: string
}

declare type ForgotPasswordResponse = {
    info: string
}

declare type ResetPasswordRequest = {
    email: string,
    newPassword: string
}

declare type ResetPasswordResponse = {
    token: string
}