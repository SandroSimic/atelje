"use client";
import { useState } from "react";
import Image from "next/image";
import arrow from "@/public/images/arrow.png";
import mladenIzlozbe from "@/public/images/mladenIzlozbe.png";

const categories = {
  samostalneIzlozbe: [
    "„Biti u Kronovoj utrobi“, Galerija Centra za kulturu „Semberija“, Bijeljina, 2023.",
    "„Bez naziva“, Galerija „Kvaka 22“, Beograd, 2023.",
    "„Prostor izvan svijeta“, Galerija Plus, Banja Luka, 2022.",
    "„Svjedoci Vremenu“, Galerija „Sreten Stojanović“, Prijedor, 2022.",
    "„Svjedoci Vremenu“, JU Zavičajni muzej Gradiška, 2021.",
    "„Odsutnost“, Art klub Prostor, Banja Luka, 2019.",
  ],
  kolektivneIzlozbe: [
    "„TakeOver Fest“, Galerija Centra za kulturu, Bijeljina, 2024.",
    "31. izložba crteža, Galerija kulturnog centra, Šabac, 2024.",
    "„BečBijeljina“, Vienna Design Week, Beč, 2023.",
    "15. Bijeljinski likovni salon, Galerija Centra za kulturu, Bijeljina, 2023.",
    "II Međunarodna likovna kolonija „Banja Dvorovi 2023“, Galerija biblioteke „Filip Višnjić“, Bijeljina, 2023.",
    "„BečBijeljina“, Galerija Centra za kulturu, Bijeljina, 2023.",
    "BPM 2023: Foto Bazaar, Galerija KVART, Beograd, 2023.",
    "ALU Perspektiva 2, Izložba „Petolik“, Akademija likovnih umjetnosti, Zagreb, 2022.",
    "„Inter/Akcija 2022“, Kamena kuća, Banja Luka, 2022.",
    "„Inter/Akcija 2022“, Kuća legata, Beograd, 2022.",
  ],
  nagrade: [
    "Nagrada Fakulteta likovnih umetnosti u Beogradu za crtež „Stevan Knežević“, 2022.",
    "Nagrada Muzeja savremene umjetnosti Republike Srpske (samostalna izložba), 2021.",
    "Nagrada Akademije umjetnosti Univerziteta u Banjoj Luci za Slikarstvo, 2021.",
    "Nagrada „Galerije Sreten Stojanović“ (samostalna izložba), 2021.",
    "Nagrada Zavičajnog muzeja Gradiška nagrada za slikarstvo (samostalna izložba), 2020.",
    "Nagrada Art klub Prostora za najbolji rad iz medija crtež, 2019.",
    "Nagrada Akademije umjetnosti Univerziteta u Banjoj Luci za Studiju-sliku, 2019.",
    "Nagrada Akademije umjetnosti Univerziteta u Banjoj Luci za Studiju-crtež, 2018.",
  ],
};

export default function ExhibitionsCategories() {
  const [activeCategory, setActiveCategory] = useState(null);

  const toggleCategory = (category) => {
    setActiveCategory(activeCategory === category ? null : category);
  };

  return (
    <div className="flex items-center flex-col justify-center bg-background-primary py-10 lg:h-screen">
      <h2 className="my-10 text-center text-2xl uppercase text-white lg:text-5xl">
        Izložbe i Nagrade
      </h2>
      <div className="flex flex-col gap-10 px-5 md:px-10 lg:flex-row lg:justify-between">
        {/* Image Section */}
        <div className="hidden lg:mx-auto lg:block lg:w-full lg:max-w-xl">
          <Image
            src={mladenIzlozbe}
            alt="Mladen Izložbe"
            className="rounded-lg"
            layout="responsive"
            objectFit="cover"
            quality={100}
          />
        </div>

        {/* Categories Section */}
        <div className="flex w-full flex-col gap-4 lg:w-[800px]">
          {Object.entries(categories).map(([key, items]) => (
            <div
              key={key}
              className="flex max-w-full flex-col  overflow-hidden rounded-lg border border-white bg-transparent"
            >
              <button
                onClick={() => toggleCategory(key)}
                className="flex items-center justify-between bg-transparent px-5 py-4 text-lg font-semibold transition-all duration-200"
              >
                {key === "samostalneIzlozbe" && "Samostalne Izložbe"}
                {key === "kolektivneIzlozbe" && "Kolektivne Izložbe"}
                {key === "nagrade" && "Nagrade"}
                <span>
                  <Image
                    src={arrow}
                    alt="Arrow Icon"
                    width={20}
                    height={20}
                    className={`transition-transform duration-200 ${
                      activeCategory === key ? "rotate-180" : ""
                    }`}
                  />
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeCategory === key ? "max-h-screen p-5" : "max-h-0"
                }`}
              >
                <ul className="list-inside list-disc space-y-2">
                  {items.map((item, index) => (
                    <li key={index} className="leading-relaxed text-white">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
