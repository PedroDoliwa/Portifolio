import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  email,
  message,
}) => (
  <div>
    <h1>E-mail enviado de: {firstName}</h1>
    <h2>Mensagem: {message}</h2>
    <h3>Email: {email}</h3>
  </div>
);
