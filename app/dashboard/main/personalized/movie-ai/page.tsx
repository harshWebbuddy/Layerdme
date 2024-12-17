import NavigationButton from "@/app/dashboard/components/NavigationButton";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <section className="h-full w-full">
      <div className="bg-black/90 fixed inset-0" />
      <div className="h-full w-full flex flex-col sm:flex-row justify-center gap-10 items-center max-w-6xl mx-auto absolute inset-0 py-4 px-3 sm:px-10">
        <div className="space-y-10">
          <h1 className="capitalize mt-4 text-4xl md:text-5xl bg-gradient-to-b from-white to-primary-red !leading-[50px] md:!leading-[65px] font-bold text-transparent bg-clip-text max-w-[600px]">
            Get Curated Show & Movie Recommendations with{" "}
            <span className="text-primary-yellow">Layerd</span> AI
          </h1>
          <NavigationButton
            styleClass="font-bold flex items-center gap-3 bg-[#313131] hover:bg-[#3d3d3d] py-3 px-4 rounded-lg"
            link="/dashboard/main/personalized/movie-ai/recommendations"
          >
            <span>Get Recommendations</span>
            <Image
              src="/arrow-right.svg"
              alt="Arrow Right"
              width={20}
              height={20}
            />
          </NavigationButton>
        </div>
        <div>
          <Image
            src="/main/movie-theatre-pop.png"
            alt="Arrow Right"
            draggable={false}
            width={420}
            height={420}
          />
        </div>
      </div>
    </section>
  );
}
