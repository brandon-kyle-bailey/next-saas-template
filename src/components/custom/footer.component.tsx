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
    <footer className="border-t flex flex-col-reverse lg:flex-row w-full">
      <div className="flex flex-row lg:flex-col p-4 lg:w-1/2 items-center border-r">
        <div className="flex flex-col justify-evenly w-full lg:w-3/4 p-10">
          <div className="flex flex-row justify-between border-b mb-10 pb-6">
            <ul className="flex flex-col space-y-4">
              <p className="font-medium mb-4">Socials</p>
              <li>
                <Link
                  rel="noopeneer noreferrer"
                  href={"/https://twitter.com/brandonkpbailey"}
                  target="_blank"
                >
                  Twitter
                </Link>
              </li>
            </ul>
            <ul className="flex flex-col space-y-4">
              <p className="font-medium mb-4">Helpful Links</p>
              <li>
                <Link rel="noopeneer noreferrer" href={"/"} target="_blank">
                  Docs
                </Link>
              </li>
              <li>
                <Link href={"/"}>Methodology</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col space-y-4 text-xs">
            <ul className="flex flex-row space-x-4">
              <li>
                <Link rel="noopeneer noreferrer" href={"/"} target="_blank">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link rel="noopeneer noreferrer" href={"/"} target="_blank">
                  Privacy Policy
                </Link>
              </li>
            </ul>
            <p className="">&copy; Your Company. All rights reserved.</p>
          </div>
        </div>
      </div>
      <div className="p-10 flex flex-col w-full lg:w-1/2">
        <div>
          <h2 className="text-2xl font-medium">Join our newsletter!</h2>
          <p>This is an example newsletter email input.</p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col border rounded-xl p-4 lg:w-3/4 mt-6 gap-3"
        >
          <Input
            {...register("email", { required: true })}
            placeholder="Enter your email"
            type="email"
          />
          <Button type="submit">Sign Up</Button>
        </form>
      </div>
    </footer>
  );
}
