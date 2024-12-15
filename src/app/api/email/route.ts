import WelcomeEmail from "@/app/emails/welcome";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    const { data, error } = await resend.emails.send({
      from: "Hashir <onboarding@resend.dev>",
      to: email,
      subject: "Welcome To My react email project",
      react: WelcomeEmail(),
    });
    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }
    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
