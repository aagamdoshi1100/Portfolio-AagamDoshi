import connectDB from "../../../utils/connectDB";
import experiences from "../../../models/experiences";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export async function GET() {
  try {
    await connectDB();
    const experienceData = await experiences.find({});

    return NextResponse.json(
      { message: "Success", data: experienceData },
      { status: 200 }
    );
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { message: "Failed to fetch data from database", error: e.message },
      { status: 200 }
    );
  }
}
