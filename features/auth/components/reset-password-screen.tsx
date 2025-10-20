import React from "react";

import PasswordForm from "./password-form";

export default function ResetPasswordScreen() {
  return (
    <section className=" flex items-center justify-center h-dvh">
      <PasswordForm
        type="reset"
        title="Reset Your Password"
        description="Enter your new password below. Make sure it's strong and secure"
      />
    </section>
  );
}
