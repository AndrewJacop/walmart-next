"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  isSignInWithEmailLink,
  sendSignInLinkToEmail,
  signInWithEmailLink,
} from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { auth } from "@/lib/firebase/config";
import { useEffect } from "react";
import { signMeIn } from "@/lib/firebase/auth";

export const revalidate = 0;
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

const FormSchema = z.object({
  type: z.enum(["code", "pass"], {
    required_error: "You need to select a varification method first.",
  }),
  password: z.string(),
});

export default function SignInPage() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  const router = useRouter();

  const [user] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      // user already signed in
      router.push("/");
    } else {
      // user not signed in
      if (isSignInWithEmailLink(auth, window.location.href)) {
        signInWithEmailLink(
          auth,
          localStorage.getItem("email")!,
          window.location.href
        )
          .then(async (userCred) => {
            localStorage.removeItem("email");
            const idToken = await userCred.user.getIdToken();

            const response = await fetch(
              "http://localhost:3000/api/auth/sign-in",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ idToken }),
              }
            );
            const resBody = await response.json();
            if (response.ok && resBody.success) {
              localStorage.setItem("userId", idToken);

              window.location.assign("/");
            }
          })
          .catch((error) => {
            // console.log("##signinpage->use effect##", error);
          });
      }
    }
  }, [user, router]);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      password: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    if (form.getValues("type") == "code") {
      const actionCodeSettings = {
        url: "http://localhost:3000/auth/sign-in",
        handleCodeInApp: true,
      };
      sendSignInLinkToEmail(auth, email!, actionCodeSettings)
        .then(() => {
          localStorage.setItem("email", email!);
          toast({
            title: "Please check your email for the sign-in link.",
          });
        })
        .catch((error) => {
          // console.log("##signinpage->onSubmit##", error);
        });
    } else if (form.getValues("type") == "pass") {
      const password = form.getValues("password");
      // console.log("##signinpage->onSubmit##", email, password);
      const user = await signMeIn(email!, password);
      if (user) window.location.assign("/");
    }
  }

  return (
    <section className="flex flex-col justify-center">
      <section className="w-1/4 mx-auto">
        <p className="text-lg font-bold mb-4 text-center">Welcome back!</p>
        <p className="font-light text-sm">Email Address</p>
        <div className="flex gap-6">
          <p className="font-light text-sm mb-4">{email}</p>{" "}
          <Link
            href="/auth"
            className=" text-sm underline hover:no-underline hover:text-blue-800">
            Change
          </Link>
        </div>
      </section>

      <section className="w-1/4 mx-auto my-3">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>
                    You can request a verification code to sign in without your
                    password, or enter your password.
                  </FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1">
                      <FormItem className="flex items-center space-x-3 space-y-0 my-4">
                        <FormControl>
                          <RadioGroupItem value="code" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          Verification link will be sent to {email}
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0 my-4">
                        <FormControl>
                          <RadioGroupItem value="pass" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          Enter your password
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {form.watch("type") == "pass" && (
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="mt-8">
                    <FormLabel>Enter your password</FormLabel>
                    <FormControl>
                      <Input className="border-gray-600 h-16" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
            <Button
              type="submit"
              className="w-full px-4 py-2 my-10 text-white bg-blue-600 rounded-full font-bold">
              {form.watch("type") == "pass"
                ? "Sign In"
                : "Request verification link"}
            </Button>
          </form>
        </Form>
      </section>
    </section>
  );
}
