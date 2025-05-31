import connectDB from "../../../utils/connectDB";
import Aboutme from "../../../models/aboutme";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();
    const aboutmeData = await Aboutme.find({});

    return NextResponse.json(
      { message: "Success", data: aboutmeData },
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
