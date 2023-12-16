"use server";

import { connectToDatabase } from "../mongoose";

export async function createQuestion(params: any) {
  try {
    await connectToDatabase();
    // Use params here as needed
  } catch (error) {
    console.error(error);
  }
}
