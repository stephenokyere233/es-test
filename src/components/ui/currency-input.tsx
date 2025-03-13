import { ChangeEvent, InputHTMLAttributes } from "react";

interface Currency {
  code: string;
  flag: string;
  name?: string;
}

interface CurrencyInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "className"> {
  id: string;
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  currency: Currency;
  readOnly?: boolean;
  name?: string;
  error?: string;
  className?: string;
  inputClassName?: string;
}

const CurrencyInput = ({
  id,
  label,
  value,
  onChange,
  currency,
  readOnly = false,
  name,
  error,
  className = "",
  inputClassName = "",
  ...rest
}: CurrencyInputProps) => {
  return (
    <div className={`${className}`}>
      <label className="block text-xs text-gray-500 mb-1">{label}</label>
      <div className="flex border rounded-md overflow-hidden">
        <input
          id={id}
          name={name || id}
          type="text"
          value={value}
          onChange={onChange}
          readOnly={readOnly}
          className={`p-3 flex-grow text-lg font-medium focus:outline-none ${
            readOnly ? "bg-gray-50" : ""
          } ${inputClassName}`}
          {...rest}
        />
        <div className="bg-indigo-900 text-white px-4 py-3 flex items-center justify-between min-w-[100px]">
          <span className="flex items-center">
            <span className="mr-2">{currency.flag}</span>
            {currency.code}
          </span>
        </div>
      </div>
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
};

export default CurrencyInput;
