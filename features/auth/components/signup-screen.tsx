import React from "react";
import AuthForm from "./auth-form";

export default function SignupScreen() {
  return (
    <section className=" flex items-center justify-center h-dvh">
      <AuthForm type="register" />
    </section>
  );
}
