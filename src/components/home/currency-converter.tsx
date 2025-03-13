"use client";
import { useEffect, useState } from "react";
import CurrencyInput from "../ui/currency-input";
import WidthConstraint from "../ui/width-constraint";

// Fixed exchange rate for GBP to GHS
const GBP_TO_GHS_RATE = 19.19;

// Currency definitions
const CURRENCIES = {
  GBP: { code: "GBP", flag: "🇬🇧", name: "British Pound" },
  GHS: { code: "GHS", flag: "🇬🇭", name: "Ghanaian Cedi" },
};

const CurrencyConverter = () => {
  return (
    <section className="py-20 bg-white">
      <WidthConstraint className="space-y-10">
        <h2 className="text-3xl md:text-4xl text-center font-medium text-indigo-900 max-w-4xl mx-auto">
          We are on a mission to reduce the cost of sending money to Africa at an average
          cost of 1%
        </h2>
        <section className="grid grid-cols-2 gap-12">
          <CurrencyConverterForm />
          <div className="space-y-5">
            <h3 className="text-gray-500 text-sm">Why Bomba?</h3>
            <h2 className="text-3xl font-medium text-indigo-900 lg:text-5xl">
              Send & Receive <br /> money on your own <br /> terms
            </h2>
            <p className="text-gray-600 mb-4">
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

  // Calculate conversion when input changes
  useEffect(() => {
    if (sendAmount) {
      const amount = parseFloat(sendAmount);

      // Calculate fee (1% of send amount)
      const feeAmount = amount * 0.01;
      setFee(feeAmount.toFixed(2));

      // Calculate total to pay
      const total = amount + feeAmount;
      setTotalToPay(total.toFixed(2));

      // Calculate receive amount using fixed rate
      const received = amount * GBP_TO_GHS_RATE;
      setReceiveAmount(received.toFixed(2));
    }
  }, [sendAmount]);

  return (
    <div className="bg-white max-w-md">
      {/* Send amount */}
      <div className="mb-4">
        <CurrencyInput
          id="send-amount"
          label="You send"
          value={sendAmount}
          onChange={(e) => setSendAmount(e.target.value)}
          currency={CURRENCIES.GBP}
          step="0.01"
          min="0"
        />
        {/* Fee display */}
        <div className="flex items-center mt-2 text-xs text-gray-600">
          <div className="w-2 h-2 bg-indigo-900 rounded-full mr-2"></div>
          <span>{fee} GBP Fee</span>
        </div>
      </div>

      {/* Receive amount */}
      <div className="mb-4">
        <CurrencyInput
          id="receive-amount"
          label="Recipient Gets"
          value={receiveAmount}
          onChange={() => {}} // No-op since this is read-only
          currency={CURRENCIES.GHS}
          readOnly
        />
      </div>

      {/* Conversion details */}
      <div className="flex items-center justify-between gap-4 mb-4 text-sm">
        <div>
          <div className="text-xs text-gray-500">Amount we&apos;ll convert</div>
          <div className="font-medium">{sendAmount} GBP</div>
        </div>
        <div className="flex items-end flex-col">
          <div className="text-xs text-gray-500">Guaranteed rate (1 hr)</div>
          <div className="font-medium">
            <span className="mr-2 text-green-500">✓</span>£1 / GHS{" "}
            {GBP_TO_GHS_RATE.toFixed(2)}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between gap-4 mb-6 text-sm">
        <div>
          <div className="text-xs text-gray-500">Total to Pay</div>
          <div className="font-medium">{totalToPay} GBP</div>
        </div>
        <div className="flex items-end flex-col">
          <div className="text-xs text-gray-500">Average duration</div>
          <div className="font-medium">Instant</div>
        </div>
      </div>

      {/* CTA Button */}
      <button className="w-full bg-indigo-900 text-white py-3 rounded-md font-medium hover:bg-indigo-800 transition-colors">
        Get started for free
      </button>
    </div>
  );
};

export default CurrencyConverter;
