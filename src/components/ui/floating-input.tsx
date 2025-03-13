import { ChangeEvent, InputHTMLAttributes } from "react";

interface FloatingInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "className"> {
  id: string;
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  type?: string;
  required?: boolean;
  error?: string;
  className?: string;
  labelClassName?: string;
  inputClassName?: string;
}

const FloatingInput = ({
  id,
  label,
  value,
  onChange,
  name,
  type = "text",
  required = false,
  error,
  className = "",
  labelClassName = "",
  inputClassName = "",
  ...rest
}: FloatingInputProps) => {
  return (
    <div className={`relative ${className}`}>
      <input
        id={id}
        name={name || id}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border ${
          error ? "border-red-500" : "border-gray-300"
        } appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer ${inputClassName}`}
        placeholder=" "
        {...rest}
      />
      <label
        htmlFor={id}
        className={`absolute text-sm ${
          error ? "text-red-500" : "text-gray-500"
        } duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 ${labelClassName}`}
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
};

export default FloatingInput;
