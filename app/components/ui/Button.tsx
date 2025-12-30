import { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ className = "", ...props }: Props) {
  return (
    <button
      {...props}
      className={`h-10 w-full rounded-sm bg-yellow-400 hover:bg-yellow-300 
                  text-sm text-gray-900 
                cursor-pointer ${className}`}
    />
  );
}
