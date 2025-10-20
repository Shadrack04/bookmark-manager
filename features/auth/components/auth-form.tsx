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

type AuthFormProps = {
  type: "register" | "login";
  onSubmit?: () => void;
};

export default function AuthForm({ type, onSubmit }: AuthFormProps) {
  const form = useForm();
  return (
    <Card className=" w-[95%] md:w-[50%] lg:w-[30%] mx-auto">
      <CardHeader>
        <div className=" mb-4">
          <Logo />
        </div>
        <CardTitle className=" text-2xl">Create your account</CardTitle>
        <CardDescription className=" text-md">
          Join us and start saving your favorite links-organized, searchable and
          always within reach
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form>
            <div className="flex flex-col gap-2">
              {type === "register" && (
                <FormField
                  control={form.control}
                  name="fullName"
                  render={(field) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input
                          id="fullName"
                          type="text"
                          {...field}
                          placeholder="Enter full name"
                          required
                        />
                      </FormControl>
                      <FormDescription />
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}

              <FormField
                control={form.control}
                name="email"
                render={(field) => (
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
                render={(field) => (
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
            <div className=" flex my-4">
              <Button type="submit" className="w-full">
                Create account
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        {type === "login" && (
          <p>
            Forgot password?
            <Link
              href="/auth/reset-password"
              className=" font-medium text-secondary cursor-pointer"
            >
              Reset it
            </Link>
          </p>
        )}

        <p>
          {type === "register"
            ? "Already have an account?"
            : "Don't have an account?"}

          <Link
            href={type === "login" ? "/auth/sign-in" : "/auth/sign-in"}
            className=" font-medium text-secondary cursor-pointer"
          >
            {type === "register" ? "Log in" : "Register"}
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
}
