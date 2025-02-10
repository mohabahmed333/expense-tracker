import { FieldErrors, Path, UseFormRegister } from 'react-hook-form';
import { FieldValues } from 'react-hook-form';
import classNames from '../../lib/classNames';
import { HtmlHTMLAttributes, ReactNode } from 'react';
import { Error } from './Error';
import { Label } from './Label';

interface DateInputProps<T extends FieldValues> {
  name: Path<T>;
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
  className?: HtmlHTMLAttributes<HTMLElement>["className"];
  labelText?: string;
  icon?: ReactNode;
}

export const DateInput = <T extends FieldValues>({
  register,
  errors,
  name,
  className,
  labelText,
  icon
}: DateInputProps<T>) => {
  return (
    <div>
      <Label labelText={labelText} />
      <div className="relative">
        {icon && <div className="absolute left-3 top-1/2 transform -translate-y-1/2">{icon}</div>}
        <input
          type="date"
          className={classNames(
            'pl-10 w-full rounded-lg border focus:border-indigo-500 focus:ring-indigo-500 shadow-sm',
            errors[name] ? 'border-red-500' : 'border-gray-300',
            className ?? ""
          )}
          {...register(name)}
        />
      </div>
      <Error errors={errors} name={name} />
    </div>
  );
};

export default DateInput;
