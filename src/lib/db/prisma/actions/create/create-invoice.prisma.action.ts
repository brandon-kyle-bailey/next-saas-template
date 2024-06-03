import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export interface CreateInvoiceActionProps {
  invoice_id: string;
  subscription_id: string;
  amount_paid: string;
  amount_due: string;
  currency: string;
  status: string;
  email: string;
  user_id?: string;
}

export async function createInvoiceAction(props: CreateInvoiceActionProps) {
  try {
    console.log(`Create invoice action invoked with props...${props}`);
    return await prisma.invoices.create({ data: props });
  } catch (error) {
    console.error(`Create invoice action encountered an error: ${error}`);
    await prisma.$disconnect();
  } finally {
    await prisma.$disconnect();
  }
}
