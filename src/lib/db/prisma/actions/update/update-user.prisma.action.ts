import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export interface UpdateUserActionProps {
  email: string;
  first_name?: string;
  last_name?: string;
  profile_image_url?: string;
  user_id?: string;
  subscription?: string;
}

export async function updateUserAction(props: UpdateUserActionProps) {
  try {
    console.log(`Update user action invoked with props...${props}`);
    return await prisma.user.update({
      where: { email: props.email },
      data: props,
    });
  } catch (error) {
    console.error(`Update user action encountered an error: ${error}`);
    await prisma.$disconnect();
  } finally {
    await prisma.$disconnect();
  }
}
