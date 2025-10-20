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
  title: string;
  description: string;
  type: "forgot" | "reset";
  onSubmit?: () => void;
};

export default function PasswordForm({
  type,
  onSubmit,
  title,
  description,
}: AuthFormProps) {
  const form = useForm();
  return (
    <Card className=" w-[95%] md:w-[50%] lg:w-[30%] mx-auto">
      <CardHeader>
        <div className=" mb-4">
          <Logo />
        </div>
        <CardTitle className=" text-2xl">{title}</CardTitle>
        <CardDescription className=" text-md">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form>
            <div className="flex flex-col gap-2">
              {type === "forgot" && (
                <FormField
                  control={form.control}
                  name="email"
                  render={(field) => (
                    <FormItem>
                      <FormLabel>Email *</FormLabel>
                      <FormControl>
                        <Input
                          id="email"
                          type="email"
                          {...field}
                          placeholder="Enter email"
                          required
                        />
                      </FormControl>
                      <FormDescription />
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}

              {type === "reset" && (
                <>
                  <FormField
                    control={form.control}
                    name="newPassword"
                    render={(field) => (
                      <FormItem>
                        <FormLabel>New Password *</FormLabel>
                        <FormControl>
                          <Input
                            id="newPassword"
                            type="password"
                            {...field}
                            placeholder="Enter New Password"
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
                    name="confirmPassword"
                    render={(field) => (
                      <FormItem>
                        <FormLabel>Confirm Password *</FormLabel>
                        <FormControl>
                          <Input
                            id="confirmPassword"
                            type="password"
                            {...field}
                            placeholder="Confirm Password"
                            required
                          />
                        </FormControl>
                        <FormDescription />
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </>
              )}

              {/* <FormField
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
              /> */}

              {/* <FormField
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
              /> */}
            </div>
            <div className=" flex mt-4">
              <Button type="submit" className="w-full">
                {type === "forgot" ? "Send reset link" : "Reset password"}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex-col">
        <Link
          href="/auth/sign-in"
          className=" font-medium text-secondary cursor-pointer"
        >
          Back to log in
        </Link>
      </CardFooter>
    </Card>
  );
}
