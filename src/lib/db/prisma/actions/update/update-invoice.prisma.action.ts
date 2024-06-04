import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export interface UpdateInvoiceActionProps {
  invoice_id?: string;
  subscription_id?: string;
  amount_paid?: string;
  amount_due?: string;
  currency?: string;
  status?: string;
  email: string;
  user_id?: string;
}

export async function updateInvoiceAction(props: UpdateInvoiceActionProps) {
  try {
    console.log(`Update invoice action invoked with props...${props}`);
    return await prisma.invoice.updateMany({
      where: { email: props.email },
      data: props,
    });
  } catch (error) {
    console.error(`Update invoice action encountered an error: ${error}`);
    await prisma.$disconnect();
  } finally {
    await prisma.$disconnect();
  }
}
