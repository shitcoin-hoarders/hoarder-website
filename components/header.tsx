import { MainNav } from "./main-nav";

export default function Header() {
  return (
    <header className="sticky flex justify-center border-b border-black">
      <div className="flex items-center justify-between w-full h-16 max-w-5xl px-4 mx-auto sm:px-6">
        <MainNav />
        <w3m-button />
      </div>
    </header>
  );
}
