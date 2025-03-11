import { Resend } from "resend";
import { NextResponse } from "next/server";
import { EmailTemplate } from "@/components/ui/email-template";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const dataForm = await req.json();

    // Criando o componente React de forma síncrona
    const emailContent = React.createElement(EmailTemplate, {
      firstName: dataForm.username,
      message: dataForm.message,
      email: dataForm.email,
    });

    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["phdoliwa7@gmail.com"],
      subject: "Pedro",
      react: emailContent,
      text: "Pedro",
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({
      error: error instanceof Error ? error.message : "Erro desconhecido",
    });
  }
}
