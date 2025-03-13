import { FloatingInputProps } from "@/lib/interfaces";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select";

const FloatingInput = ({
  id,
  label,
  value,
  onChange,
  name,
  type = "text",
  required = false,
  className = "",
  currency,
  currencies = [],
  onCurrencyChange,
  ...rest
}: FloatingInputProps) => {
  // Use the first currency as default if currency is not provided
  const selectedCurrency =
    currency || (currencies.length > 0 ? currencies[0] : undefined);
  const hasCurrencyOptions = currencies.length > 0;

  const handleCurrencyChange = (value: string) => {
    if (onCurrencyChange) {
      const newCurrency = currencies.find((c) => c.code === value);
      if (newCurrency) {
        onCurrencyChange(newCurrency);
      }
    }
  };

  return (
    <div
      className={`relative ${className} flex w-full text-sm text-gray-900 bg-transparent rounded-lg border peer`}
    >
      <input
        id={id}
        name={name || id}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent appearance-none focus:outline-none focus:ring-0 peer`}
        placeholder=" "
        {...rest}
      />
      <label
        htmlFor={id}
        className={`absolute text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1`}
      >
        {label}
      </label>

      <div className="bg-indigo-900 rounded-r-lg text-white h-full py-[5px] px-[15px] flex items-center justify-between min-w-[110px]">
        {selectedCurrency &&
          (hasCurrencyOptions ? (
            <Select
              onValueChange={handleCurrencyChange}
              defaultValue={selectedCurrency.code}
            >
              <SelectTrigger className=" bg-transparent p-0 h-full rounded-r-lg text-white py-4 border-0 w-full focus-visible:ring-0 focus-visible:border-0">
                <SelectValue>
                  <div className="flex items-center">
                    <span className="mr-2">{selectedCurrency.flag}</span>
                    {selectedCurrency.code}
                  </div>
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                {currencies.map((curr) => (
                  <SelectItem key={curr.code} value={curr.code}>
                    <span className="mr-2">{curr.flag}</span>
                    {curr.code}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          ) : (
            <span className="flex items-center">
              <span className="mr-2">{selectedCurrency.flag}</span>
              {selectedCurrency.code}
            </span>
          ))}
      </div>
    </div>
  );
};

export default FloatingInput;
