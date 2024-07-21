"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";

export default function FooterSection() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data: any) => {
    console.log(data);
    console.log(errors);
  };
  return (
    <footer id="footer" className="flex flex-col gap-4">
      <div className="flex justify-between flex-col-reverse gap-6 lg:flex-row">
        <div className="flex flex-col gap-4">
          <p className="font-medium">Product</p>
          <ul className="flex flex-col gap-2 text-muted-foreground">
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
            <li>
              <a href="#pricing">Pricing</a>
            </li>
            <li>
              <a href="/request-a-demo">Request a demo</a>
            </li>
            <li>
              <a href="/terms-and-conditions">Terms & Conditions</a>
            </li>
            <li>
              <a href="/privacy-policy">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <p className="font-medium">Company</p>
          <ul className="flex flex-col gap-2 text-muted-foreground">
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li>
              <a href="/documentation">Documentation</a>
            </li>
          </ul>
        </div>
        <div className="lg:w-1/2 flex flex-col gap-4">
          <p className="font-medium">Newsletter</p>
          <p className="text-muted-foreground">
            Join our newsletter and receive updates before anyone else!
          </p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <Input
              type="email"
              placeholder="Enter your email"
              className="shadow-2xl"
              {...register("email", { required: true })}
            />
            <Button className="lg:w-1/4" type="submit">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
      <div className="flex justify-between">
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built with ❤️ by{" "}
          <a
            href={"https://x.com/brandonkpbailey"}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            brandonkpbailey
          </a>
        </p>
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
          &copy; Copyright 2024 The Startup Stack Inc.
        </p>
      </div>
    </footer>
  );
}
