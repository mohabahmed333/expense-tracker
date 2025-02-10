import { FieldErrors, Path, UseFormRegister, FieldValues } from 'react-hook-form';
import { cloneElement, HtmlHTMLAttributes, isValidElement, ReactNode } from 'react';
import { Error } from './FormComponents/Error';
import { Label } from './FormComponents/Label';
import Input from './FormComponents/Input';
 
interface FormItemProps<T extends FieldValues> {
  name: Path<T>;
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
  placeholder?: string;
  className?: HtmlHTMLAttributes<HTMLElement>["className"];
  labelText?: string;
  icon?: ReactNode;
  type?: string;
  step?: string;
  children: ReactNode;
}

export const FormItem = <T extends FieldValues>({
  errors,
  name,
  placeholder,
  register,
  className,
  labelText,
  icon,
  type = "text",
  step,
  children,
}: FormItemProps<T>) => {
  if (!children || !isValidElement(children)) return null; // Ensure valid children

  const isFormField = ['input', 'textarea', 'select'].includes(children.type as string);
  const isCustomComponent = typeof children.type === 'function';

  return cloneElement(children, {
    ...children.props,
    ...(isFormField
      ? { ...register(name), placeholder, className, type, step }
      : isCustomComponent
      ? { name, register, errors, labelText, icon, type, step }
      : {}),
  });
};

 FormItem.Label = Label;
FormItem.Error = Error;
FormItem.Input = Input;  
