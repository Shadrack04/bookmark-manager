import React from "react";

import PasswordForm from "./password-form";

export default function ForgotPasswordScreen() {
  return (
    <section className=" flex items-center justify-center h-dvh">
      <PasswordForm
        type="forgot"
        title="Forgot your password?"
        description="Enter your email address below and we'll send you a link to reset your password"
      />
    </section>
  );
}
