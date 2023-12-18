"use server";

import { connectToDatabase } from "@/lib/mongoose";
import User from "@/database/user.model";
// import {
//   CreateUserParams,
//   DeleteUserParams,
//   GetAllUsersParams,
//   UpdateUserParams,
// } from "@/lib/actions/shared.types";
// import { revalidatePath } from "next/cache";
// import Question from "@/database/question.model";

export async function getUserById(params: any) {
  try {
    await connectToDatabase();

    const { userId } = params;
    const user = await User.findOne({ clerkId: userId });
    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
