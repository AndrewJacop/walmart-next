"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import validator from "validator";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { signMeUp } from "@/lib/firebase/auth";
import { useState } from "react";
import { addNewUser } from "@/lib/supabase/fetch-data";

export const revalidate = 0;
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

const FormSchema = z.object({
  firstName: z.string().min(1, {
    message: "First name is required.",
  }),
  lastName: z.string().min(1, {
    message: "Last name is required.",
  }),
  phoneNumber: z.string().refine(validator.isMobilePhone, {
    message: "A valid phone number is required.",
  }),
  password: z.string().min(8, {
    message: "Pasword must have 8 charaters at least.",
  }),
});

export default function SignUpPage() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  const [ishidden, setHidden] = useState(true);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      password: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    // toast({
    //   title: "You submitted the following values:",
    //   description: (
    //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
    //       <code className="text-white">{JSON.stringify(data, null, 2)}</code>
    //     </pre>
    //   ),
    // });
    // if (!email) console.log("no email");

    // create new account in firebase
    const newUserId = await signMeUp(email!, form.getValues("password"));

    if (newUserId) {
      // check if there is a cart in local storage
      const cartData: CartItem[] = JSON.parse(
        localStorage.getItem("userCart") || "[]"
      );
      // add new user to supabase
      const newUser: User = {
        id: newUserId,
        firstName: form.getValues("firstName"),
        lastName: form.getValues("lastName"),
        email: email!,
        password: form.getValues("password"),
        avatar: "",
        isAdmin: false,
        isSeller: false,
        phoneNumber: form.getValues("phoneNumber"),
        address: [],
        paymentMethod: [],
        userListsIds: [],
        cart: cartData,
      };

      await addNewUser(newUser);
      
      // add user id to local storage
      localStorage.setItem("userCart", JSON.stringify([]));

      // navigate to home
      window.location.assign("/");
    }
  }

  return (
    <section className="flex flex-col justify-center">
      <section className="w-1/4 mx-auto">
        <p className="text-lg font-bold mb-4 text-center">
          Create your Walmart account
        </p>
        <p className="font-bold text-sm">Email Address</p>
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
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First name</FormLabel>
                  <FormControl>
                    <Input className="border-gray-600 h-14" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last name</FormLabel>
                  <FormControl>
                    <Input className="border-gray-600 h-14" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone number</FormLabel>
                  <FormControl>
                    <Input className="border-gray-600 h-14" {...field} />
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
                  <FormLabel>Create a password</FormLabel>
                  <FormControl>
                    <div className="flex relative">
                      <Input
                        className="border-gray-600 h-14"
                        {...field}
                        type={ishidden ? "password" : "text"}
                      />
                      <Button
                        type="button"
                        onClick={() => {
                          setHidden(!ishidden);
                        }}
                        className="absolute right-1 top-2"
                        variant={"link"}>
                        {ishidden ? "Show" : "Hide"}
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-full px-4 py-2 my-10 text-white bg-blue-600 rounded-full font-bold">
              Continue
            </Button>
          </form>
        </Form>
      </section>
    </section>
  );
}
