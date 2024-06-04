import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export interface UpdateSubscriptionActionProps {
  subscription_id: string;
  stripe_user_id?: string;
  status?: string;
  start_date?: string;
  end_date?: string;
  plan_id?: string;
  default_payment_method_id?: string;
  email?: string;
  user_id?: string;
}

export async function updateSubscriptionAction(
  props: UpdateSubscriptionActionProps
) {
  try {
    console.log(`Update subscription action invoked with props...${props}`);
    return await prisma.subscription.update({
      where: { subscription_id: props.subscription_id },
      data: props,
    });
  } catch (error) {
    console.error(`Update subscription action encountered an error: ${error}`);
    await prisma.$disconnect();
  } finally {
    await prisma.$disconnect();
  }
}
