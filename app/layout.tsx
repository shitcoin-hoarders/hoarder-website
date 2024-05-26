import "./globals.css";
import type { Metadata } from "next";
import { headers } from "next/headers";

import { cookieToInitialState } from "wagmi";

import { config } from "@/wagmi";
import Web3ModalProvider from "@/components/web3-provider";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "Hoarder",
  description: "ETHBerlin 2024",
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  const initialState = cookieToInitialState(config, headers().get("cookie"));

  return (
    <html lang="en">
      <body>
        <Web3ModalProvider initialState={initialState}>
          <div className="flex flex-col justify-between w-full h-full min-h-screen bg-yellow-100">
            <Header />
            <main className="flex-auto w-full max-w-3xl px-4 py-4 mx-auto sm:px-6 md:py-6">
              {children}
            </main>
          </div>
        </Web3ModalProvider>
      </body>
    </html>
  );
}
