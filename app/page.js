"use client";
import Image from "next/image";
import mladenLanding from "@/public/images/mladenLanding.png";
import mladenLandingSmall from "@/public/images/mladenLandingSmall.jpg";
import mladenAbout from "@/public/images/mladenAbout.png";
import mladenAboutSmall from "@/public/images/mladenAboutSmall.jpg";
import odsutnostOne from "@/public/images/odsutnost1.jpg";
import odsutnostTwo from "@/public/images/odsutnost2.jpg";
import odsutnostTree from "@/public/images/odsutnost3.jpg";
import clouds from "@/public/images/oblak.jpg";
import balls from "@/public/images/lopte.jpg";
import gun from "@/public/images/pistolj.jpg";
import image3 from "@/public/images/slika3.jpg";
import tractor from "@/public/images/traktor.jpg";
import { FaInstagram, FaPhone } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import Link from "next/link";
import ExhibitionsFAQ from "@/components/mladen/Izlozbe";
import Container from "@/components/Container";
import Gallery from "@/components/mladen/Gallery";

const socials = [
  {
    icon: FaInstagram,
    text: "mladen.micic.1998",
    href: "https://www.instagram.com/mladen.micic.1998/",
  },
  {
    icon: IoIosMail,
    text: "mladen.micic.98@gmail.com",
  },
  {
    icon: FaPhone,
    text: "+387 66 017 543",
  },
];

const images = [
  {
    src: odsutnostOne,
    alt: "Odsutnost 1",
    title: "ODSUTNOST BR.1",
    technique: "Grafitna olovka na papiru",
    dimensions: "61x98cm",
    className: "lg:col-span-6",
    imageClassname: "h-[350px] md:h-[400px] lg:h-[450px] w-full",
    width: 500,
    height: 500,
  },
  {
    src: odsutnostTwo,
    alt: "Odsutnost 2",
    title: "ODSUTNOST BR.2",
    technique: "Grafitna olovka na papiru",
    dimensions: "67x100cm",
    className: "lg:col-span-6",
    imageClassname: "h-[350px] md:h-[400px] lg:h-[450px] w-full",
    width: 500,
    height: 500,
  },
  {
    src: tractor,
    alt: "tractor image",
    technique: "Grafitna olovka na papiru",
    dimensions: "70x100cm",
    className: "lg:col-span-3",
    imageClassname: "h-[350px] md:h-[400px] lg:h-[225px] w-full",
    width: 500,
    height: 500,
  },
  {
    src: clouds,
    alt: "Oblak",
    technique: "Grafit na papiru",
    dimensions: "16x16cm",
    className: "lg:col-span-6 lg:row-span-3",
    width: 500,
    height: 500,
    imageClassname: "h-[350px] md:h-[400px] lg:h-full w-full",
  },
  {
    src: balls,
    alt: "Lopte",
    technique: "Grafitna olovka na papiru",
    dimensions: "50x70cm",
    className: "lg:col-span-3 lg:row-start-2",
    imageClassname: "h-[350px] md:h-[400px] lg:h-[225px] w-full",
    width: 500,
    height: 500,
  },
  {
    src: gun,
    alt: "Pistolj",
    className: "lg:col-span-3 lg:row-start-3",
    imageClassname: "h-[350px] md:h-[400px] lg:h-[225px] w-full",
    technique: "Grafitna olovka na papiru",
    dimensions: "66x99cm",
    width: 500,
    height: 500,
  },
  {
    src: image3,
    alt: "Slika 3",
    className: "lg:col-span-3 lg:row-start-3",
    imageClassname: "h-[350px] md:h-[400px] lg:h-[225px] w-full",
    technique: "Grafitna olovka na papiru",
    dimensions: "50x70cm",
    width: 500,
    height: 500,
  },
  {
    src: odsutnostTree,
    alt: "Odsutnost 3",
    title: "ODSUTNOST BR.3",
    className: "lg:col-span-6 lg:row-start-4",
    technique: "Grafitna olovka na papiru",
    dimensions: "70x100cm",
    width: 500,
    height: 500,
    imageClassname: "h-[350px] md:h-[400px] lg:h-[450px] w-full",
  },
];

export default function Home() {
  return (
    <>
      <div className="relative h-screen w-full md:bg-transparent">
        <div className="absolute inset-0 -z-10 hidden lg:block">
          <Image
            src={mladenLanding}
            alt="Mladen Mićić umjetnički rad - Slikarstvo"
            layout="fill"
            loading="lazy"
          />
        </div>
        <div className="absolute inset-0 -z-10 block lg:hidden">
          <Image
            src={mladenLandingSmall}
             alt="Mladen Mićić umjetnički rad na manjem ekranu"
            layout="fill"
            className="object-cover brightness-50 filter"
            loading="lazy"
          />
        </div>
        <div className="flex h-full flex-col items-center justify-center gap-5 px-5 sm:gap-7 md:items-baseline md:gap-10">
          <div className="flex items-center gap-3">
            <p className="text-2xl text-background-secondary md:text-3xl">
              Artist
            </p>
            <div className="h-[1px] w-24 bg-background-secondary" />
          </div>
          <h1 className="text-center text-4xl uppercase text-white md:text-7xl 2xl:text-[8rem]">
            Mladen Mićić
          </h1>
        </div>

        <div className="absolute bottom-0 right-0 hidden h-1/2 w-full flex-col justify-between bg-[#222222] p-5 lg:flex lg:w-[400px]">
          <h2 className="text-3xl text-white">Mladen Mićić</h2>
          <p className="text-base font-normal text-white">
            Mladen Mićić, rođen 1998. u Bijeljini, diplomirao slikarstvo 2021.
            na Akademiji umjetnosti u Banjoj Luci, a master završio 2022. na
            Fakultetu likovnih umetnosti u Beogradu. Iste godine upisao
            doktorske studije.
          </p>
          <video controls className="mt-4 w-full">
            <source
              src="/videos/mladenVideo.mp4"
              type="video/mp4"
              alt="Mladen Video"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div
        className="bg-background-primary lg:flex lg:h-screen lg:flex-col lg:items-center lg:justify-center"
        id="oMeni"
      >
        <Container>
          <div className="flex items-center justify-center bg-background-primary py-10">
            <div className="flex flex-col items-center justify-center px-10">
              <div className="flex flex-col-reverse items-center justify-center gap-5 lg:flex-row-reverse lg:items-center lg:justify-center">
                <div className="lg:hidden">
                  <Image
                    src={mladenAboutSmall}
                    alt="Mladen Mićić About Image"
                    className="rounded-lg"
                  />
                </div>
                <div className="hidden lg:block">
                  <Image
                    src={mladenAbout}
                    alt="Mladen Mićić About Image"
                    className="h-full w-[500px] rounded-lg"
                  />
                </div>
                <div className="flex w-full flex-col gap-5 text-center leading-8 text-white lg:w-1/2 lg:justify-between lg:gap-20 lg:p-5 lg:text-left">
                  <div className="flex flex-col items-center justify-center gap-3 lg:items-baseline lg:gap-5">
                    <h2 className="text-2xl uppercase text-white lg:text-5xl">
                      o meni
                    </h2>
                    <div className="flex items-center gap-5 text-background-secondary lg:text-2xl">
                      <p>Mladen Mićić</p>
                      <span className="h-[1px] w-10 bg-background-secondary" />
                      <p>Artist</p>
                    </div>
                  </div>
                  <div>
                    <p className="lg:text-xl lg:leading-10">
                      Mladen Mićić, rođen 25.4.1998. godine u Bijeljini. OŠ
                      „Jovan Dučić” u Bijeljini završio 2013. godine. Srednju
                      Ekonomsku školu u Bijeljini završava 2017. godine, nakon
                      čega se upisuje na Akademiju umjetnosti u Banjoj Luci.
                      Diplomirao je 2021. godine. na Akademiji umjetnosti
                      Univerziteta u Banjoj Luci na odsjeku slikarstva u klasi
                      profesorice Borjane Mrđa. 2022. godine završava Master
                      studije slikarstva na Fakultetu likovnih umetnosti u
                      Beogradu, u klasi profesora Radomira Kneževića. Iste
                      godine upisuje Doktorske akademske studije na Fakultetu
                      likovnih umetnosti u Beogradu.
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-4 md:flex-row md:justify-center lg:flex-col lg:items-baseline lg:gap-5">
                    {socials.map((social, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-center gap-2 lg:gap-4 lg:text-2xl"
                      >
                        <social.icon className="text-md" />
                        {social.href ? (
                          <Link
                            href={social.href}
                            target="_blank"
                            rel="noreferrer"
                            className="text-md text-white"
                          >
                            {social.text}
                          </Link>
                        ) : (
                          <p className="text-md text-white">{social.text}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="bg-background-primary text-white">
        <Container>
          <ExhibitionsFAQ />
        </Container>
      </div>
      <div className="flex flex-col items-center bg-background-primary text-white">
        <Container>
          <Gallery images={images} />
        </Container>
      </div>
      <footer className="bg-background-primary">
        <Container>
          <div className="flex flex-col items-center justify-center gap-3 py-10 md:gap-5 lg:gap-10">
            <h1 className="text-lg uppercase text-white md:text-3xl lg:text-[48px]">
              © 2024 Mladen Mićić
            </h1>
            <div className="flex flex-col items-center gap-3 md:gap-5 lg:flex-row lg:items-baseline lg:gap-10">
              <div className="flex items-center gap-2 text-white">
                <FaPhone className="text-xl text-white" />
                <p>+387 66 017 543</p>
              </div>
              <Link
                href={"https://www.instagram.com/mladen.micic.1998/"}
                className="flex items-center gap-2 text-white"
              >
                <FaInstagram className="text-xl text-white" />
                <p>mladen.micic.1998</p>
              </Link>
              <div className="flex items-center gap-2 text-white">
                <IoIosMail className="text-xl text-white" />
                <p>mladen.micic.98@gmail.com</p>
              </div>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
}
