import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export interface GetUserActionProps {
  user_id: string;
}

export async function getUserAction(props: GetUserActionProps) {
  try {
    console.log(`Create user action invoked with props...${props}`);
    return await prisma.user.findUnique({ where: props });
  } catch (error) {
    console.error(`Create user action encountered an error: ${error}`);
    await prisma.$disconnect();
  } finally {
    await prisma.$disconnect();
  }
}
