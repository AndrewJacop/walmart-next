"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
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
import { checkUserEmail } from "@/lib/supabase/fetch-data";

const FormSchema = z.object({
  email: z.string().email({
    message: "You need to enter a valid email.",
  }),
});

export default function AuthPage() {
  const router = useRouter();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const user = await checkUserEmail(data.email);
    if (!user) {
      router.push(`/auth/sign-up?email=${data.email}`);
    } else {
      router.push(`/auth/sign-in?email=${data.email}`);
    }
  }

  return (
    <section className="flex flex-col justify-center">
      <section className="text-center">
        <p className="text-lg font-bold mb-4">Sign in or create your account</p>
        <p className="font-light text-sm">Not sure if you have an account?</p>
        <p className="font-light text-sm mb-4">
          Enter your email and we{"’"}ll check for you.
        </p>
      </section>

      <section className="w-1/4 mx-auto my-3">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input className="border-gray-600 h-14" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-full px-4 py-2 my-5 text-white bg-blue-600 rounded-full">
              Continue
            </Button>
            <FormDescription className="px-4">
              Securing your personal information is our priority.
              <a
                className="hover:text-black block"
                href="https://corporate.walmart.com/privacy-security">
                See our privacy measures.
              </a>
            </FormDescription>
          </form>
        </Form>
      </section>
    </section>
  );
}
