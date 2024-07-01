"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";

export default function FooterComponent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data: any) => {
    console.log(data);
  };
  return (
    <footer className="border-t dark:border-neutral-800 flex flex-col-reverse lg:flex-row dark:bg-black dark:bg-opacity-50 bg-white">
      <div className="p-10 flex flex-col lg:flex-row justify-center lg:w-1/2">
        <div className="lg:w-1/2">
          <div className="flex flex-col lg:flex-row gap-4 justify-evenly lg:justify-between">
            <div>
              <p className="font-medium">Socials</p>
              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <Link
                    href={"https://twitter.com/brandonkpbailey"}
                    target="_blank"
                    rel="noopeneer noreferrer"
                  >
                    Twitter
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-medium">Helpful Links</p>
              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <Link href={"/"} target="_blank" rel="noopeneer noreferrer">
                    Docs
                  </Link>
                </li>
                <li>
                  <Link href={"/"} target="_blank" rel="noopeneer noreferrer">
                    Methodology
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8">
            <ul className="flex flex-wrap gap-4 text-xs">
              <li>
                <Link href={"/"} target="_blank" rel="noopeneer noreferrer">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href={"/"} target="_blank" rel="noopeneer noreferrer">
                  Privacy Policy
                </Link>
              </li>
            </ul>
            <p className="mt-8 text-xs">
              &copy; SomeCompany LLC. All rights reserved.
            </p>
          </div>
        </div>
      </div>
      <div className="p-10 flex flex-col lg:w-1/2">
        <div>
          <h2 className="text-2xl font-medium">Join our newsletter!</h2>
          <p>This is an example newsletter email input.</p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col border dark:border-neutral-800 rounded-xl p-4 lg:w-2/3 mt-6 gap-3"
        >
          <Input
            {...register("email", { required: true })}
            placeholder="Enter your email"
            type="email"
            className="dark:border-neutral-800 dark:bg-black dark:bg-opacity-50 bg-white"
          />
          <Button type="submit">Sign Up</Button>
        </form>
      </div>
    </footer>
  );
}
