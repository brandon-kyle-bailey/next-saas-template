import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export interface CreateSubscriptionPlanActionProps {
  plan_id: string;
  name: string;
  description: string;
  amount: string;
  currency: string;
  interval: string;
}

export async function createSubscriptionPlanAction(
  props: CreateSubscriptionPlanActionProps
) {
  try {
    console.log(
      `Create subscription_plan action invoked with props...${props}`
    );
    await prisma.subscriptions_plans.create({ data: props });
  } catch (error) {
    console.error(
      `Create subscription_plan action encountered an error: ${error}`
    );
    await prisma.$disconnect();
  } finally {
    await prisma.$disconnect();
  }
}
