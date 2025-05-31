import connectDB from "../../../utils/connectDB";
import projects from "../../../models/projects";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();
    const projectsData = await projects.find({});

    return NextResponse.json(
      { message: "Success", data: projectsData },
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
