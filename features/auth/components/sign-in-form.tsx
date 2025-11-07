"use client";

import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInSchema, SignInType } from "../validation";
import { useSignin } from "../hooks/use-sign-in";

// type AuthFormProps = {
//   title: string;
//   description: string;
//   type: "register" | "login";
//   onSubmit?: () => void;
// };

export default function SignInForm() {
  const { mutate, isPending } = useSignin();
  console.log({ isPending });
  const form = useForm<SignInType>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: SignInType) => {
    console.log(data);
    mutate(data);
  };
  return (
    <Card className=" w-[95%] md:w-[50%] lg:w-[30%] mx-auto">
      <CardHeader>
        <div className=" mb-4">
          <Logo />
        </div>
        <CardTitle className=" text-2xl">Log in to your account</CardTitle>
        <CardDescription className=" text-md">
          Welcome back! please enter your details
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-2">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        id="email"
                        type="email"
                        {...field}
                        placeholder="m@example.com"
                        required
                      />
                    </FormControl>
                    <FormDescription />
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        id="password"
                        type="password"
                        {...field}
                        placeholder="Enter Password"
                        required
                      />
                    </FormControl>
                    <FormDescription />
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className=" flex mt-4">
              <Button type="submit" className="w-full text-secondary">
                {isPending ? "Logging in..." : "Log in"}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <p className=" text-sm text-muted">
          Forgot password?
          <Link
            href="/auth/reset-password"
            className=" font-medium text-secondary cursor-pointer"
          >
            Reset it
          </Link>
        </p>

        <p className=" text-sm text-muted">
          Don&apos;t have an account?
          <Link
            href="/auth/sign-up"
            className=" font-medium text-secondary cursor-pointer"
          >
            Sign up
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
}
