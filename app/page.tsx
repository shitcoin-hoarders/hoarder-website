"use client";

import { useWriteContract } from "wagmi";
import abi from "@/hoarder-abi.json";
import DepositTokens from "@/components/deposit-tokens";

export default function Index() {
  const { data: hash, writeContract, error } = useWriteContract();

  const handleSell = () => {
    writeContract({
      address: "0x887B16A1B66A94432C2C63eF7eCe69EeF272bDeB",
      abi,
      functionName: "sellCurrency",
      args: [[["0xF3AfD1a49b0960dc1be12d7946d952fa2eFa9dB6", 10]]],
    });
  };

  return (
    <div className="flex flex-col gap-6">
      <p>Hoardr</p>

      <DepositTokens />

      <div>
        <button
          onClick={handleSell}
          className="rounded-md bg-primary text-secondary px-3 py-2"
        >
          Sell currency
        </button>
        {error && <div>Error: {error.message}</div>}
        {hash && <div>Transaction Hash: {hash}</div>}
      </div>
    </div>
  );
}
