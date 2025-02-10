import { HTMLAttributes } from "react";
import classNames from "../../lib/classNames";

export const Label =({labelText,className,...props}:{
  labelText?:string,
  className?:HTMLAttributes<HTMLLIElement>["className"],
}&HTMLAttributes<HTMLElement>)=>{
    if(!labelText) return null;
  return(
      <label className={
        classNames(
          "block text-sm font-medium text-secondary mb-1",
          className??''
        )
  }
      {...props} >{labelText}</label>
  );

};