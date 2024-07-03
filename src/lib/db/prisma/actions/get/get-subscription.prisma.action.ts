import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export interface GetSubscriptionActionProps {
  user_id: string;
}

export async function getSubscriptionAction(props: GetSubscriptionActionProps) {
  try {
    console.log(`Get subscription action invoked with props...${props}`);
    return await prisma.subscription.findFirstOrThrow({ where: props });
  } catch (error) {
    console.error(`Get subscription action encountered an error: ${error}`);
    await prisma.$disconnect();
  } finally {
    await prisma.$disconnect();
  }
}
