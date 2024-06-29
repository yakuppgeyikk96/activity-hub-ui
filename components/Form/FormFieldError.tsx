"use client";

import { Message, MessageProps } from "primereact/message";

interface IFormFieldErrorProps {
  errors?: {
    [key: string]: string[];
  };
  field: string;
}

export default function FormFieldError({
  errors,
  field,
}: IFormFieldErrorProps) {
  if (!(errors && errors[field])) {
    return null;
  }
  const errorFields = errors[field];

  const content = (text: string) => (
    <div className="flex justify-content-start align-items-center">
      <i className="pi pi-info-circle"></i>
      <div className="ml-2">{text}</div>
    </div>
  );

  return (
    <div className="flex flex-column gap-2 mt-2">
      {errorFields.map((error: string) => (
        <Message
          key={error}
          severity="error"
          text={error}
          content={() => content(error)}
          className="w-full flex justify-content-start"
        />
      ))}
    </div>
  );
}
