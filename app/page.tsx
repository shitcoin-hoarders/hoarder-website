"use client";

import DepositTokens from "@/components/deposit-tokens";
import SellCurrency from "@/components/sell-currency";

export default function Index() {
  return (
    <div className="flex flex-col gap-6">
      <p>Hoardr</p>

      <DepositTokens />

      <SellCurrency />
    </div>
  );
}
