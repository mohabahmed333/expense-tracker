import { FieldErrors, FieldValues, Path } from "react-hook-form";

export const Error = <T extends FieldValues>({errors,name}:{
      errors: FieldErrors<T>;
    name:Path<T>
  })=>{
    if(!errors[name]) return null;
    return(
      <p className="mt-1 text-sm text-red-600">{errors[name]?.message as string}</p>
    );
  };
  