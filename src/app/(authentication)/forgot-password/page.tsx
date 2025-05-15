import ForgotPasswordForm from "./_components/forgot-password-form";

export default function Page() {
  return (
    <section>
      {/* Forgot Password header */}
      <p className="text-2xl">Forgot Your Password?</p>

      {/* Form */}
      <ForgotPasswordForm />
    </section>
  );
}
