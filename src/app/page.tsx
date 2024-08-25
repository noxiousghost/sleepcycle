"use client";
import Background from "@/components/background";
import Tabs from "@/components/tabs";

export default function Home() {
  return (
    <div className="flex flex-col justify-between items-stretch inset-0 h-screen">
      <div className="flex flex-col items-center flex-grow-0 flex-shrink-0 px-6 py-12 transition-all duration-300">
        <Background />
        <h1 className="text-slate-300 scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-6xl">
          Get Perfect Sleep
        </h1>
        <Tabs />
      </div>
    </div>
  );
}
