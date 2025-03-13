"use client";
import { Currency } from "@/lib/interfaces";
import { Check, Minus } from "lucide-react";
import { useEffect, useState } from "react";
import FloatingInput from "../ui/floating-input";
import { Select, SelectContent, SelectItem, SelectTrigger } from "../ui/select";
import WidthConstraint from "../ui/width-constraint";

// Fixed exchange rates
const EXCHANGE_RATES = {
  GBP: {
    GHS: 19.19,
    NGN: 2050.45,
    USD: 1.27,
    EUR: 1.17,
  },
  USD: {
    GHS: 15.11,
    NGN: 1615.32,
    GBP: 0.79,
    EUR: 0.92,
  },
  EUR: {
    GHS: 16.42,
    NGN: 1754.23,
    GBP: 0.85,
    USD: 1.09,
  },
};

// Fee types
const FEE_TYPES = {
  STANDARD: {
    name: "Standard",
    rate: 0.01, // 1%
    duration: "24-48 hours",
  },
  EXPRESS: {
    name: "Express",
    rate: 0.025, // 2.5%
    duration: "Instant",
  },
};

// Currency definitions
const CURRENCIES = {
  GBP: { code: "GBP", flag: "🇬🇧", name: "British Pound" },
  USD: { code: "USD", flag: "🇺🇸", name: "US Dollar" },
  EUR: { code: "EUR", flag: "🇪🇺", name: "Euro" },
  GHS: { code: "GHS", flag: "🇬🇭", name: "Ghanaian Cedi" },
  NGN: { code: "NGN", flag: "🇳🇬", name: "Nigerian Naira" },
};

// Available currencies for sending
const SEND_CURRENCIES = [CURRENCIES.GBP, CURRENCIES.USD, CURRENCIES.EUR];

// Available currencies for receiving
const RECEIVE_CURRENCIES = [CURRENCIES.GHS, CURRENCIES.NGN];

const CurrencyConverter = () => {
  return (
    <section className="pt-10 lg:pt-20 pb-20">
      <WidthConstraint className="space-y-10">
        <h2 className="text-2xl md:text-4xl lg:text-center font-medium text-indigo-900 max-w-4xl mx-auto">
          We are on a mission to reduce the cost of sending money to Africa at an average
          cost of 1%
        </h2>
        <section className="flex flex-col-reverse md:flex-row gap-12">
          <p className="text-gray-600 block md:hidden">
            Bomba provides you the luxury of sending money at rates that suit you. You can
            easily send and swap money between{" "}
            <span className="font-medium">GBP, USD, NGN</span> and up to 20 other African
            countries using Bomba&apos;s{" "}
            <span className="text-indigo-600 font-medium">&apos;Swap&apos;</span> and{" "}
            <span className="text-indigo-600 font-medium">&apos;Express&apos;</span>{" "}
            services. Beat bank rates, save time and gain more.
          </p>
          <CurrencyConverterForm />
          <div className="space-y-5 w-full lg:w-1/2 max-w-md lg:max-w-max">
            <h3 className="text-gray-500 text-sm">Why Bomba?</h3>
            <h2 className="text-4xl font-medium text-indigo-900 lg:text-5xl">
              Send & Receive <br /> money on your <br /> own terms
            </h2>
            <p className="text-gray-600 hidden md:block">
              Bomba provides you the luxury of sending money at rates that suit you. You
              can easily send and swap money between{" "}
              <span className="font-medium">GBP, USD, NGN</span> and up to 20 other
              African countries using Bomba&apos;s{" "}
              <span className="text-indigo-600 font-medium">&apos;Swap&apos;</span> and{" "}
              <span className="text-indigo-600 font-medium">&apos;Express&apos;</span>{" "}
              services. Beat bank rates, save time and gain more.
            </p>
          </div>
        </section>
      </WidthConstraint>
    </section>
  );
};

const CurrencyConverterForm = () => {
  const [sendAmount, setSendAmount] = useState<string>("1000.00");
  const [receiveAmount, setReceiveAmount] = useState<string>("0");
  const [fee, setFee] = useState<string>("0");
  const [totalToPay, setTotalToPay] = useState<string>("0");
  const [feeType, setFeeType] = useState<"STANDARD" | "EXPRESS">("STANDARD");
  const [sendCurrency, setSendCurrency] = useState<Currency>(SEND_CURRENCIES[0]);
  const [receiveCurrency, setReceiveCurrency] = useState<Currency>(RECEIVE_CURRENCIES[0]);

  // Get the exchange rate between the selected currencies
  const getExchangeRate = (from: string, to: string): number => {
    if (from === to) return 1;

    // @ts-expect-error - We know these currencies exist in our exchange rates
    if (EXCHANGE_RATES[from] && EXCHANGE_RATES[from][to]) {
      // @ts-expect-error - We know these currencies exist in our exchange rates
      return EXCHANGE_RATES[from][to];
    }

    return 1; // Default fallback
  };

  // Calculate conversion when input changes or currencies change
  useEffect(() => {
    if (sendAmount) {
      const amount = parseFloat(sendAmount);

      // Calculate fee based on selected fee type
      const feeRate = FEE_TYPES[feeType].rate;
      const feeAmount = amount * feeRate;
      setFee(feeAmount.toFixed(2));

      // Calculate total to pay
      const total = amount + feeAmount;
      setTotalToPay(total.toFixed(2));

      // Calculate receive amount using exchange rate
      const rate = getExchangeRate(sendCurrency.code, receiveCurrency.code);
      const received = amount * rate;
      setReceiveAmount(received.toFixed(2));
    }
  }, [sendAmount, feeType, sendCurrency, receiveCurrency]);

  return (
    <section className="lg:w-1/2">
      <div className="bg-white max-w-md space-y-4">
        <div className="">
          {/* Send amount */}
          <FloatingInput
            id="send-amount"
            label="You send"
            value={sendAmount}
            onChange={(e) => setSendAmount(e.target.value)}
            currency={sendCurrency}
            currencies={SEND_CURRENCIES}
            onCurrencyChange={setSendCurrency}
            step="0.01"
            min="0"
          />

          {/* Fee type selector and fee display */}
          <div className="flex items-center gap-4 relative border-l mx-6 py-4 text-xs text-gray-600">
            <div className="bg-indigo-900 rounded-full absolute -left-2 top-1/2 -translate-y-1/2">
              <Minus className="" size={16} color="#23CE6B" />
            </div>

            <div className="flex items-center ml-4">
              <span className="text-gray-500">
                {fee} {sendCurrency.code}
              </span>
            </div>

            {/* Fee type selector */}
            <div className="flex items-center gap-2">
              <Select
                value={feeType}
                onValueChange={(value) => setFeeType(value as "STANDARD" | "EXPRESS")}
              >
                <SelectTrigger className="bg-gray-100 border-0 h-8 px-3 py-1.5 text-sm min-w-[100px] focus-visible:ring-0 focus-visible:border-0 rounded-md">
                  <div className="flex items-center">
                    <span>{feeType === "STANDARD" ? "Standard" : "Express"}</span>
                    {feeType === "EXPRESS" && (
                      <Check className="ml-1.5 h-4 w-4 text-green-500" />
                    )}
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="STANDARD">Standard</SelectItem>
                  <SelectItem value="EXPRESS">Express</SelectItem>
                </SelectContent>
              </Select>
              <span>Fee</span>
            </div>
          </div>

          {/* Receive amount */}
          <FloatingInput
            id="receive-amount"
            label="Recipient Gets"
            value={receiveAmount}
            onChange={() => {}} // No-op since this is read-only
            currency={receiveCurrency}
            currencies={RECEIVE_CURRENCIES}
            onCurrencyChange={setReceiveCurrency}
            readOnly
          />
        </div>

        {/* Conversion details */}
        <div className="flex items-center justify-between gap-4 mb-4 text-sm">
          <div>
            <div className="text-xs text-gray-500">Amount we&apos;ll convert</div>
            <div className="font-medium text-indigo-900">
              {sendAmount} {sendCurrency.code}
            </div>
          </div>
          <div className="flex items-end flex-col">
            <div className="text-xs text-gray-500">Guaranteed rate (1 hr)</div>
            <div className="font-medium">
              <span className="mr-2 text-green-500">✓</span>
              <span className="text-indigo-900">
                1 {sendCurrency.code} ={" "}
                {getExchangeRate(sendCurrency.code, receiveCurrency.code).toFixed(2)}{" "}
                {receiveCurrency.code}
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between gap-4 mb-6 text-sm">
          <div>
            <div className="text-xs text-gray-500">Total to Pay</div>
            <div className="font-medium text-indigo-900">
              {totalToPay} {sendCurrency.code}
            </div>
          </div>
          <div className="flex items-end flex-col">
            <div className="text-xs text-gray-500">Average duration</div>
            <div className="font-medium text-indigo-900">
              {FEE_TYPES[feeType].duration}
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <button className="w-full bg-indigo-900 text-white py-3 rounded-md font-medium hover:bg-indigo-800 transition-colors">
          Get started for free
        </button>
      </div>
    </section>
  );
};

export default CurrencyConverter;
