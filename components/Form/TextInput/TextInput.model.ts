import { TextFieldVariants } from "@mui/material";
import React from "react";

export interface ITextInputProps {
  label: string;
  name: string;
  variant?: TextFieldVariants;
  required?: boolean;
  defaultValue?: string;
  value?: string;
  disabled?: boolean;
  type?: "text" | "password" | "email" | "url";
  error?: boolean;
  helperText?: React.ReactNode;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  fullWidth?: boolean;
}
