import { FieldErrors, Path, UseFormRegister } from "react-hook-form";
import { Error } from "./Error";
import { Label } from "./Label";
import { FieldValues } from "react-hook-form";
import classNames from "../../lib/classNames";
import { HtmlHTMLAttributes } from "react";

interface TextAreaProps<T extends FieldValues> {
  placeholder: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
  className?: HtmlHTMLAttributes<HTMLElement>["className"];
  labelText?: string;
}

export const TextArea = <T extends FieldValues>({
  register,
  errors,
  placeholder,
  name,
  className,
  labelText,
}: TextAreaProps<T>) => {
  return (
    <div>
      <Label labelText={labelText} htmlFor={name} />
      <textarea
        className={classNames(
          "w-full rounded-lg border focus:border-indigo-500 focus:ring-indigo-500 shadow-sm max-h-[250px]",
          errors[name] ? "border-red-500" : "border-gray-300",
          className ?? "",
        )}
        id={name}
        rows={3}
        placeholder={placeholder}
        {...register(name)}
      />
      <Error errors={errors} name={name} />
    </div>
  );
};

export default TextArea;
