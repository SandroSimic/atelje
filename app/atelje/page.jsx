import Image from "next/image";
import React from "react";
import ateljeLanding from "@/public/images/ateljeImage.png";
import Container from "@/components/Container";
import { Carousel } from "./Swiper";
import ateljeImg1 from "../../public/images/ateljeImg1.jpg";
import ateljeImg2 from "../../public/images/ateljeImg2.jpg";
import ateljeImg3 from "../../public/images/ateljeImg3.jpg";
import brush from "../../public/images/brush.png";
import pencil from "../../public/images/pencil.png";
import paint from "../../public/images/paint.png";
import ugljen from "../../public/images/ugljen.png";
import { FaLocationDot } from "react-icons/fa6";
import { FaClock, FaInstagram, FaPhone } from "react-icons/fa";
import Link from "next/link";
import { IoIosMail } from "react-icons/io";
import ServerMap from "./ServerMap";

export const metadata = {
  title: {
    default: "Atelje 98 | Umjetnički Prostor Bijeljina",
  },
  authors: [{ name: "Sandro Simic", url: "https://github.com/SandroSimic" }],
  description:
    "Atelje 98 je umjetnički prostor u Bijeljini, koji je namjenjen umjetničkim entuzijastima svih uzrasta. Naučite sve slikarske i crtačke tehnike.",
};

function Atelje() {
  return (
    <>
      <div>
        <div className="relative h-screen w-full md:bg-transparent">
          <div className="absolute inset-0 -z-10 hidden lg:block">
            <Image
              src={ateljeLanding}
              alt="Atelje 98 umjetnički prostor Bijeljina"
              fill
              className="object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute inset-0 -z-10 block lg:hidden">
            <Image
              src={ateljeLanding}
              alt="Mladen Micic Landing Image"
              fill
              className="object-cover"
              loading="lazy"
            />
          </div>
          <div className="flex h-full flex-col items-center justify-center gap-5 px-5 sm:gap-7 md:items-end md:gap-10">
            <div className="flex items-center gap-3">
              <p className="text-2xl text-background-secondary md:text-3xl">
                Skola
              </p>
              <div className="h-[1px] w-24 bg-background-secondary" />
            </div>
            <h1 className="text-center text-4xl uppercase text-white md:text-7xl 2xl:text-[8rem]">
              ATELJE 98
            </h1>
          </div>

          <div className="absolute bottom-0 left-0 hidden h-1/2 w-full flex-col justify-between bg-background-white p-5 lg:flex lg:w-[400px]">
            <h2 className="text-3xl text-background-primary">Atelje 98</h2>
            <p className="text-base font-normal text-background-primary">
              Atelje 98 je umjetnički prostor u Bijeljini, koji je namjenjen
              umjetničkim entuzijastima svih uzrasta U ateljeu možete naučiti
              sve slikarske i crtačke tehnike: Ulje na platnu, akril na platnu,
              grafitna olovka na papiru, ugljen na papiru i mnoge druge.
            </p>
            <div className="mt-4 h-52 w-full">
              <video controls className="h-full w-full object-contain">
                <source
                  src="/videos/ateljeVideo.mp4"
                  type="video/mp4"
                  alt="Mladen Video"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
      <div id="atelje">
        <Container className="flex flex-col items-center gap-12 py-14">
          <Carousel>
            <div className="h-[20rem] w-full rounded-3xl md:h-[29.375rem]">
              <Image
                src={ateljeImg1}
                alt="Atelje Image 1"
                className="h-full w-full rounded-3xl"
              />
            </div>
            <div className="h-[20rem] w-full rounded-3xl md:h-[29.375rem]">
              <Image
                src={ateljeImg2}
                alt="Atelje Image 2"
                className="h-full w-full rounded-3xl"
              />
            </div>
            <div className="h-[20rem] w-full rounded-3xl md:h-[29.375rem]">
              <Image
                src={ateljeImg3}
                alt="Atelje Image 3"
                className="h-full w-full rounded-3xl"
              />
            </div>
          </Carousel>
          <h1 className="text-2xl uppercase text-background-primary md:text-3xl lg:text-6xl">
            Atelje 98
          </h1>
          <p className="w-full text-center text-background-primary md:max-w-7xl md:px-0 md:text-left md:text-xl lg:px-10 lg:text-2xl lg:leading-9">
            Atelje 98 je umjetnički prostor u Bijeljini, koji je namjenjen
            umjetničkim entuzijastima svih uzrasta. Atelje 98 je mjesto prijatne
            atmosfere, jer se u njemu okupljaju ljudi koji gaje ljubav prema
            umjetnosti. U ateljeu možete naučiti sve slikarske i crtačke
            tehnike: Ulje na platnu, akril na platnu, grafitna olovka na papiru,
            ugljen na papiru i mnoge druge. Osnivač i predavač je Mladen Mićić.
            Visokoobrazovani stručnjak i višestruko nagrađivani, doktorand na
            Fakultetu likovnih umjetnosti u Beogradu. Pored časova crtanja i
            slikanja, polaznici će u ateljeu imati priliku da vide predavača u
            stvaralačkom procesu. Tu je takođe i stalna postavka umjetničkih
            radova samog predavača, kao dokaz o kvalitetu njegovog rada. Tako da
            možete imati potpuno povjerenje da ste na pravom mjestu.
          </p>
        </Container>
      </div>
      <div className="bg-background-primary">
        <Container className="py-14">
          <h1 className="text-2xl uppercase text-white md:text-3xl lg:pl-10 lg:text-5xl">
            Tehnike koje ce te nauciti
          </h1>
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 lg:pl-10">
            <div className="flex h-40 flex-col items-center justify-center gap-8 rounded-3xl bg-white lg:h-48">
              <Image src={brush} alt="brush icon" className="fill-black" />
              <p className="text-base uppercase text-background-primary">
                Ulje na platnu
              </p>
            </div>
            <div className="flex h-40 flex-col items-center justify-center gap-8 rounded-3xl bg-white lg:h-48">
              <Image src={paint} alt="paint icon" />
              <p className="text-base uppercase text-background-primary">
                Akril na platnu
              </p>
            </div>
            <div className="flex h-40 flex-col items-center justify-center gap-8 rounded-3xl bg-white lg:h-48">
              <Image src={ugljen} alt="charcoal icon" />
              <p className="text-base uppercase text-background-primary">
                Ugljen na platnu
              </p>
            </div>
            <div className="flex h-40 flex-col items-center justify-center gap-8 rounded-3xl bg-white lg:h-48">
              <Image src={pencil} alt="pencil icon" />
              <p className="text-base uppercase text-background-primary">
                Grafitna olovka na papiru
              </p>
            </div>
          </div>
        </Container>
      </div>
      <Container className="flex flex-col py-14 md:justify-center lg:h-screen">
        <div className="flex flex-col justify-center gap-5 lg:pl-10">
          <h1 className="text-2xl uppercase text-background-primary md:text-3xl lg:text-5xl">
            lokacija
          </h1>
          <div className="h-[300px] w-full lg:h-[550px]">
            <ServerMap />
          </div>
          <div className="mt-5 flex items-center justify-center">
            <div className="flex flex-col justify-between gap-10 md:w-full md:flex-row md:justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <FaLocationDot className="h-3 w-3 lg:h-5 lg:w-5" />
                  <h3 className="text-md font-bold uppercase lg:text-xl">
                    Adresa
                  </h3>
                </div>
                <p className="mt-1 pl-6 text-sm font-semibold text-background-primary md:text-base">
                  Srpske dobrovoljačke garde 6, Bijeljina 76300
                </p>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <FaPhone className="h-3 w-3 lg:h-5 lg:w-5" />
                  <h3 className="text-md font-bold uppercase lg:text-xl">
                    Kontakt
                  </h3>
                </div>
                <div className="mt-1 flex flex-col gap-1 pl-6">
                  <div className="flex gap-4 text-sm font-semibold text-background-primary md:text-base">
                    <p>Email: </p>
                    <p>mladen.micic.98@gmail.com</p>
                  </div>
                  <div className="flex gap-4 text-sm font-semibold text-background-primary md:text-base">
                    <p>Telefon: </p>
                    <p>+387 66 017 543</p>
                  </div>
                  <div className="flex gap-4 text-sm font-semibold text-background-primary md:text-base">
                    <p>Instagram: </p>
                    <Link href={"https://www.instagram.com/atelje_98/"}>
                      @atelje_98
                    </Link>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <FaClock className="h-3 w-3 lg:h-5 lg:w-5" />
                  <h3 className="text-md font-bold uppercase lg:text-xl">
                    Radno Vrijeme
                  </h3>
                </div>
                <div>
                  <p className="mt-1 pl-6 text-sm font-semibold text-background-primary md:text-base">
                    Ponedeljak-Subota
                  </p>
                  <div className="mt-1 pl-6 text-sm font-semibold text-background-primary md:text-base">
                    <p>10:00 - 14:00h</p>
                    <p>17:00 - 21:00h</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <footer className="bg-background-primary">
        <Container>
          <div className="flex flex-col items-center justify-center gap-3 py-10 md:gap-5 lg:gap-10">
            <h1 className="text-lg uppercase text-white md:text-3xl lg:text-[48px]">
              © 2024 Atelje 98
            </h1>
            <div className="flex flex-col items-center gap-3 md:gap-5 lg:flex-row lg:items-baseline lg:gap-10">
              <div className="flex items-center gap-2 text-white">
                <FaPhone className="text-xl text-white" />
                <p>+387 66 017 543</p>
              </div>
              <Link
                href={"https://www.instagram.com/atelje_98/"}
                className="flex items-center gap-2 text-white"
              >
                <FaInstagram className="text-xl text-white" />
                <p>atelje_98</p>
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

export default Atelje;
