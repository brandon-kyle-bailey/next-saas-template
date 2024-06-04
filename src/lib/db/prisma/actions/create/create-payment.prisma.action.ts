import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export interface CreatePaymentActionProps {
  stripe_id: string;
  email: string;
  amount: string;
  payment_time: string;
  payment_date: string;
  currency: string;
  user_id: string;
  customer_details: string;
  payment_intent: string;
}

export async function createPaymentAction(props: CreatePaymentActionProps) {
  try {
    console.log(`Create payment action invoked with props...${props}`);
    return await prisma.payment.create({ data: props });
  } catch (error) {
    console.error(`Create payment action encountered an error: ${error}`);
    await prisma.$disconnect();
  } finally {
    await prisma.$disconnect();
  }
}
