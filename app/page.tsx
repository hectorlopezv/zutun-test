import Image from "next/image";
import { GasStationForm } from "./components/gas-station-form";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-10">
      <h1>Problema de la Gasolinera</h1>
      <div className="relative object-contain overflow-hidden w-40 h-40">
        <Image src={"/logo.svg"} fill alt="zutun logo" />
      </div>
      <GasStationForm />
    </main>
  );
}
