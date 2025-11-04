import React from "react";
import AuthForm from "./auth-form";
import SignUpForm from "./signup-form";

export default function SignupScreen() {
  return (
    <section className=" flex items-center justify-center h-dvh">
      {/* <AuthForm
        type="register"
        title="Create your account"
        description="Join us and start saving your favorite links-organized, searchable and
          always within reach"
      /> */}
      <SignUpForm />
    </section>
  );
}
