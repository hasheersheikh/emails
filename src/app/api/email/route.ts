import WelcomeEmail from "@/app/emails/welcome";
import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  // Add CORS headers
  const headers = {
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,OPTIONS,PATCH,DELETE,POST,PUT",
    "Access-Control-Allow-Headers":
      "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
  };

  // Handle OPTIONS preflight request
  if (request.method === "OPTIONS") {
    return new NextResponse(null, {
      status: 200,
      headers,
    });
  }

  try {
    // Ensure Resend API key is present
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: "Resend API key is not configured" },
        {
          status: 500,
          headers,
        }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    // Parse request body safely
    const requestBody = await request.json();
    const { email } = requestBody;

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        {
          status: 400,
          headers,
        }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Hashir <hashir@hashirsheikh.site>",
      to: email,
      subject: "Welcome To My react email project",
      react: WelcomeEmail(),
    });

    if (error) {
      return NextResponse.json(
        { error },
        {
          status: 500,
          headers,
        }
      );
    }

    return NextResponse.json(
      { data },
      {
        status: 200,
        headers,
      }
    );
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unknown error" },
      {
        status: 500,
        headers,
      }
    );
  }
}
