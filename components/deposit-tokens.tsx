import React from "react";
import { useBalance, useWriteContract } from "wagmi";
import abi from "@/hoarder-abi.json";

const DepositTokens = () => {
  const { data: hash, writeContract, error } = useWriteContract();
  const { data: contractBalance } = useBalance({
    address: "0x887B16A1B66A94432C2C63eF7eCe69EeF272bDeB",
  });
  const handleDeposit = () => {
    writeContract({
      address: "0x887B16A1B66A94432C2C63eF7eCe69EeF272bDeB",
      abi,
      functionName: "deposit",
      value: BigInt(1),
    });
  };

  return (
    <div className="border p-6 border-black space-y-2">
      <h1>Contract balance: {contractBalance?.formatted || "Loading.."} ETH</h1>
      <button
        onClick={handleDeposit}
        className="rounded-md bg-primary text-secondary px-3 py-2"
      >
        Deposit
      </button>
      {error && <div>Error: {error.message}</div>}
      {hash && <div>Transaction Hash: {hash}</div>}
    </div>
  );
};

export default DepositTokens;
