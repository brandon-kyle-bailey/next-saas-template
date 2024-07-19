"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function GoBackButton() {
  const router = useRouter();
  return <Button onClick={() => router.back()}>Take me back</Button>;
}
