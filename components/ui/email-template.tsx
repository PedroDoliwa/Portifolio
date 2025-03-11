import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
  message: string;
  email: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  message,
  email,
}) => (
  <div>
    <h1>E-mail enviado de: {firstName}</h1>
    <h2>Mensagem: {message}</h2>
    <h3>Email: {email}</h3>
  </div>
);
