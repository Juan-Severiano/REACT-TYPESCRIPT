import { InputHTMLAttributes } from "react";
import { RegisterOptions, UseFormRegister } from "react-hook-form";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegister<any>,
  error?: string,
  rules?: RegisterOptions
}
