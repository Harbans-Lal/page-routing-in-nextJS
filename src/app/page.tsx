import Image from "next/image";
import { navbar } from "./navbar/navbar";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-between ">
      <div className=" flex justify-around items-center w-[100%] bg-black text-white h-16">
        <Link href="/">Home</Link>
        <Link href="/dashboard">dashboard</Link>
        <Link href="/contact">contact</Link>
        <Link href="/login">login</Link>
      </div>
      
      <div className="flex justify-around items-center w-[100%] bg-blue-300 h-[250px]">
        <h1>Welcome to the Home</h1>
      </div>
    </main>
  );
}
