import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className=" flex flex-col justify-between w-full p-4 h-64 bg-black">
      <Image src="/globe.svg" alt="logo" width={100} height={100} className="self-center" />
      <div className="text-2xl font-bold flex flex-row justify-between px-20 w-full items-center">
        <Link href="/booking">
          <Image src="/globe.svg" alt="logo" width={100} height={100} />
        </Link>
        <Link href="/flash">
          <Image src="/globe.svg" alt="logo" width={100} height={100} />
        </Link>
        <Link href="/merch">
          <Image src="/globe.svg" alt="logo" width={100} height={100} />
        </Link>
        <Link href="/">
          <Image src="/globe.svg" alt="logo" width={100} height={100} />
        </Link>
      </div>

    </nav>
  );
}