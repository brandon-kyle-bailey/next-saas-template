import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export interface CreateUserActionProps {
  email: string;
  first_name?: string;
  last_name?: string;
  profile_image_url?: string;
  user_id: string;
  subscription?: string;
}

export async function createUserAction(props: CreateUserActionProps) {
  try {
    console.log(`Create user action invoked with props...${props}`);
    return await prisma.user.create({ data: props });
  } catch (error) {
    console.error(`Create user action encountered an error: ${error}`);
    await prisma.$disconnect();
  } finally {
    await prisma.$disconnect();
  }
}
