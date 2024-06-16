"use client";

import * as z from "zod";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { SigninSchema } from "@/schemas";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { CardWrapper } from "@/components/auth/card-wrapper";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { signin } from "@/actions/signin";

const ACTIVE_INPUT = "border-[2px] focus-visible:border-blue-500";

export const SigninForm = () => {
  const [error, setError] = useState<any>("");
  const [success, setSuccess] = useState<any>("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof SigninSchema>>({
    resolver: zodResolver(SigninSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof SigninSchema>) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      signin(values).then((data) => {
        setError(error);
        setSuccess(success);
      });
    });
  };

  return (
    <CardWrapper
      headerLabel="Sign in to NLD"
      backButtonLabel="Don't have an account?"
      backButtonHref="/auth/register"
      showSocial
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-normal text-foreground">
                    Email address
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      type="email"
                      className={ACTIVE_INPUT}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-normal text-foreground">
                    Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      type="password"
                      className={ACTIVE_INPUT}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormError message={error} />
          <FormSuccess message={success} />
          <Button
            disabled={isPending}
            type="submit"
            className="w-full text-white bg-emerald-600 hover:bg-emerald-800"
          >
            Sign in
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};

export default SigninForm;
