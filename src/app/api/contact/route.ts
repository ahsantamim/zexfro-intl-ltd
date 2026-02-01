import { NextRequest, NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/mail/carbonio";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    // Validate required fields
    const { name, email, subject, message, inquiryType } = body;
    if (!name || !email || !subject || !message || !inquiryType) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }
    // Send contact email via Carbonio
    await sendContactEmail({ name, email, subject, message, inquiryType });
    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error sending contact email:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 },
    );
  }
}
