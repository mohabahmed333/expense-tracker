import { FieldErrors, Path, UseFormRegister } from "react-hook-form";
import { FieldValues } from "react-hook-form";
import classNames from "../../lib/classNames";
import { HtmlHTMLAttributes, ReactNode } from "react";
import { Error } from "./Error";
import { Label } from "./Label";

interface InputProps<T extends FieldValues> {
  placeholder: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
  className?: HtmlHTMLAttributes<HTMLElement>["className"];
  labelText?: string;
  icon?: ReactNode;
  type?: string;
  step?: string;
}

export const Input = <T extends FieldValues>({
  register,
  errors,
  placeholder,
  name,
  className,
  labelText,
  icon,
  type = "text",
  step,
}: InputProps<T>) => {
  return (
    <div>
      <Label labelText={labelText} htmlFor={name} />
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
            {icon}
          </div>
        )}
        <input
          type={type}
          step={step}
          id={name}
          className={classNames(
            "w-full  rounded-lg border focus:border-indigo-500 focus:ring-indigo-500 shadow-sm",
            errors[name] ? "border-red-500" : "border-gray-300",
            className ?? "",
            icon ? "pl-10" : "pl-2",
          )}
          onKeyPress={(e) => {
            if (!/[0-9]/.test(e.key) && type === "number") {
              e.preventDefault();
            }
          }}
          placeholder={placeholder}
          {...register(name)}
        />
      </div>
      <Error errors={errors} name={name} />
    </div>
  );
};

export default Input;
