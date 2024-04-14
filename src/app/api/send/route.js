import { NextResponse } from "next/server";
import { sendEmail } from "../../../../config/mailer";

export async function GET() {
  return NextResponse.json({ message: "Success" }, { status: 200 });
}

export async function POST(req) {
  try {
    const reqBody = await req.json();
    await sendEmail(reqBody);
    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ message: e.message }, { status: 500 });
  }
}
