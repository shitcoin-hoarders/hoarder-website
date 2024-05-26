import { useAccount, useReadContract, useWriteContract } from "wagmi";
import abi from "@/hoarder-abi.json";
import tokenAbi from "@/hoarder-token-abi.json";
import { useState } from "react";
const HOARD_TKN_ADDRESS = "0xF3AfD1a49b0960dc1be12d7946d952fa2eFa9dB6";
const HOARD_CONTRACT = "0x887B16A1B66A94432C2C63eF7eCe69EeF272bDeB";
const SellCurrency = () => {
  const [amount, setAmount] = useState(10000);
  const { data: hash, writeContract, error } = useWriteContract();

  const { address: connectedWalletAddress } = useAccount();

  const { data: hoardBalance } = useReadContract({
    address: HOARD_TKN_ADDRESS,
    abi: tokenAbi,
    functionName: "balanceOf",
    args: [connectedWalletAddress],
  });

  const handleSell = () => {
    writeContract({
      address: HOARD_CONTRACT,
      abi,
      functionName: "sellCurrency",
      args: [[[HOARD_TKN_ADDRESS, amount]]],
    });
  };

  return (
    <div className="border p-6 border-black space-y-2">
      <h1>HOARD balance: {(hoardBalance as BigInt | undefined)?.toString()}</h1>
      <h1>
        Amount to sell:{" "}
        <input
          value={amount}
          type="number"
          onChange={(e) => {
            setAmount(e.target.valueAsNumber);
          }}
        />
      </h1>
      <button
        onClick={handleSell}
        className="rounded-md bg-primary text-secondary px-3 py-2"
      >
        Sell currency
      </button>
      {error && <div>Error: {error.message}</div>}
      {hash && <div>Transaction Hash: {hash}</div>}
    </div>
  );
};

export default SellCurrency;
