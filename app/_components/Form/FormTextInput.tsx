"use client";

import { InputText } from "primereact/inputtext";
import React from "react";
import FormFieldError from "./FormFieldError";

export interface IFormTextInputProps {
  name: string;
  errors?: {
    [key: string]: string[];
  };
  label?: string;
  placeholder?: string;
  addon?: React.ReactNode;
  type?: "text" | "password";
}

export default function FormTextInput({
  errors,
  label,
  name,
  placeholder,
  addon,
  type,
}: IFormTextInputProps) {
  return (
    <>
      <div className="p-inputgroup flex-1 mt-4">
        {addon || null}
        <InputText
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          className={errors && errors[name] ? "p-invalid" : ""}
        />
      </div>
      <FormFieldError errors={errors} field={name} />
    </>
  );
}
