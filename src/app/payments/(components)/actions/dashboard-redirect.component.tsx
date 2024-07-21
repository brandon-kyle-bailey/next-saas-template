"use client"; // Ensure this is a client component
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function DashboardRedirectAction(props: {
  url: string;
  delay: number;
}) {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push(props.url);
    }, props.delay);

    return () => clearTimeout(timer); // Cleanup timeout on unmount
  }, [props.url, props.delay, router]);

  return null;
}
