import React from "react";
import AuthForm from "./auth-form";

export default function SigninScreen() {
  return (
    <section className=" flex items-center justify-center h-dvh">
      <AuthForm
        type="login"
        title="Log in to your account"
        description="Welcome back! please enter your details"
      />
    </section>
  );
}
