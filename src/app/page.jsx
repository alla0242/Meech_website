import Image from "next/image";
import Banner from "./componnents/banner";
export default function Home() {
  return (
      <div className="w-full h-dvh bg-purple-500 flex items-center justify-center">
        <Banner />
      </div>
  );
}
