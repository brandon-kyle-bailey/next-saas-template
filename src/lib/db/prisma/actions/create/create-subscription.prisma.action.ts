import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export interface CreateSubscriptionActionProps {
  subscription_id: string;
  stripe_user_id: string;
  status: string;
  start_date: string;
  end_date?: string;
  plan_id: string;
  default_payment_method_id?: string;
  email: string;
  user_id: string;
}

export async function createSubscriptionAction(
  props: CreateSubscriptionActionProps
) {
  try {
    console.log(`Create subscription action invoked with props...${props}`);
    await prisma.subscriptions.create({ data: props });
  } catch (error) {
    console.error(`Create subscription action encountered an error: ${error}`);
    await prisma.$disconnect();
  } finally {
    await prisma.$disconnect();
  }
}
