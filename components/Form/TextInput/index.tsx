import { TextField } from "@mui/material";
import { ITextInputProps } from "./TextInput.model";

export default function TextInput({
  label,
  variant,
  required,
  defaultValue,
  disabled,
  type = "text",
  error,
  helperText,
  startAdornment,
  endAdornment,
  fullWidth,
  value,
  name,
}: ITextInputProps) {
  return (
    <TextField
      label={label}
      name={name}
      variant={variant}
      required={required}
      defaultValue={defaultValue}
      value={value}
      disabled={disabled}
      type={type}
      error={error}
      helperText={helperText}
      fullWidth={fullWidth}
      InputProps={{
        startAdornment,
        endAdornment,
      }}
    />
  );
}
