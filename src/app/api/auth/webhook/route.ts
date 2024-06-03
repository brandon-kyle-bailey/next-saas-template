import { createUserAction } from "@/lib/db/prisma/actions/create/create-user.prisma.action";
import { updateUserAction } from "@/lib/db/prisma/actions/update/update-user.prisma.action";
import { WebhookEvent } from "@clerk/nextjs/server";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { Webhook } from "svix";

const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET!;

export async function POST(req: Request) {
  try {
    console.log("webhook hit");
    const requestHeaders = headers();
    const svix_id = requestHeaders.get("svix-id");
    const svix_timestamp = requestHeaders.get("svix-timestamp");
    const svix_signature = requestHeaders.get("svix-signature");
    if ([svix_id, svix_timestamp, svix_signature].some((e) => !e)) {
      throw new Error("svix headers missing");
    }

    const payload = await req.json();
    const requestBody = JSON.stringify(payload);

    const webhook = new Webhook(WEBHOOK_SECRET);

    const webhookEvent = webhook.verify(requestBody, {
      "svix-id": svix_id!,
      "svix-timestamp": svix_timestamp!,
      "svix-signature": svix_signature!,
    }) as WebhookEvent;

    if (webhookEvent.type === "user.created") {
      console.log("user.created event with payload", payload);
      const user = await createUserAction({
        email: payload?.data?.email_addresses?.[0]?.email_address,
        first_name: payload?.data?.first_name,
        last_name: payload?.data?.last_name,
        profile_image_url: payload?.data?.profile_image_url,
        user_id: payload?.data?.id,
      });
      console.log("Created user", user);
      return NextResponse.json({
        status: 201,
        message: "user created",
      });
    }

    if (webhookEvent.type === "user.updated") {
      console.log("user.updated event with payload", payload);
      const user = await updateUserAction({
        email: payload?.data?.email_addresses?.[0]?.email_address,
        first_name: payload?.data?.first_name,
        last_name: payload?.data?.last_name,
        profile_image_url: payload?.data?.profile_image_url,
        user_id: payload?.data?.id,
      });
      console.log("Updated user", user);
      return NextResponse.json({
        status: 201,
        message: "user updated",
      });
    }
    throw new Error(`Unhandled event type: ${webhookEvent.type}`);
  } catch (error) {
    console.error("Error occured", error);
    return new Response(`Error: ${error}`, {
      status: 500,
    });
  }
}
