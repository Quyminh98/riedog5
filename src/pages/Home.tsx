import { Button, Container } from "../components";
import btnAddress from "../assets/image/btnAddress.png";
import sologan from "../assets/image/sologan.png";
import sologanMobile from "../assets/image/sologanMobile.png";
import btnBuyToken from "../assets/image/btnBuyToken.png";
import btnDexscrener from "../assets/image/btnDexscrener.png";
import btnBuyTokenMobile from "../assets/image/btnBuyMobile.png";
import btnDexscrenerMobile from "../assets/image/btnDexMobile.png";

import telegramIcon from "../assets/icon/telegram.svg";
import xIcon from "../assets/icon/x.svg";
import banner from "../assets/image/banner.png";
import tokenLeft from "../assets/image/token-left.png";
import tokenRight from "../assets/image/token-right.png";
import roadMap from "../assets/image/road-map.png";
import roadMapTablet1 from "../assets/image/road-map-tablet.png";
import roadMapTablet2 from "../assets/image/road-map-tablet2.png";
import roadMapMobile from "../assets/image/road-map-mobile.png";

import "./styles.css";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

function Home() {
  const tokenomicRef = useRef<HTMLDivElement>(null);
  const roadMapRef = useRef<HTMLDivElement>(null);
  const { search } = useLocation();


  useEffect(() => {
    const searchParams = new URLSearchParams(search);

    if (searchParams.has("tokenomic") && tokenomicRef.current) {
      tokenomicRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    if (searchParams.has("roadmap") && roadMapRef.current) {
      roadMapRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [search, tokenomicRef, roadMapRef]);

  return (
    <>
      <main className="bg-[#FFF4E9]">
        <Container>
          <div className="hidden md:flex items-center pt-[100px]">
            <div className="flex flex-col items-start">
              <img src={sologan} alt="" />
              <p className="py-9 italic text-[40px]">Get Some $Rie Dog</p>
              <div>
                <Button className="pr-5">
                  <img src={btnBuyToken} alt="" />
                </Button>
                <Button>
                  <img src={btnDexscrener} alt="" />
                </Button>
              </div>
              <div className="pt-[25px] pb-[20px]">
                <Button className="pr-5">
                  <img src={telegramIcon} alt="telgram" />
                </Button>
                <Button>
                  <img src={xIcon} alt="X" />
                </Button>
              </div>
            </div>
            <div>
              <img src={banner} alt="" />
            </div>
          </div>
          <div className="flex flex-col items-center py-[50px] md:hidden">
            <div className="flex  flex-col items-center">
              <img src={sologanMobile} alt="" />
              <p className="py-4 italic text-[20px]">Get Some $Rie Dog</p>
            </div>
            <div className="py-6">
              <img src={banner} alt="" />
            </div>
            <div className="flex flex-col">
              <Button className="pb-5">
                <img src={btnBuyTokenMobile} alt="" />
              </Button>
              <Button>
                <img src={btnDexscrenerMobile} alt="" />
              </Button>
            </div>
            <div className="pt-[25px] pb-[20px]">
              <Button className="pr-5">
                <img src={telegramIcon} alt="telgram" />
              </Button>
              <Button>
                <img src={xIcon} alt="X" />
              </Button>
            </div>
          </div>
        </Container>
      </main>
      <main className="bg-[#FFA943] md:-mt-5">
        <Container className="px-5 md:px-0 py-12">
          <p className="italic text-center text-white text-[20px] font-">
            Riedog: A memecoin for animal welfare
            <br />
            Riedog is a memecoin that funds animal welfare services around the
            world.
            <br />
            By owning Riedog, you help provide shelter, food, medicine, and
            healthcare to animals in need.
            <br /> Riedog is more than a memecoin. It's a way to make a
            difference in the lives of animals.
          </p>
        </Container>
      </main>
      <main className="bg-white py-12" ref={tokenomicRef}>
        <Container className="px-5 md:px-0 flex flex-col justify-center items-center relative">
          <div className="hidden md:block absolute left-[-75px] xl:left-0 w-1/4">
            <img src={tokenLeft} alt="" />
          </div>
          <h3 className="text-[#FFA943] text-[24px] md:text-[36px]">
            TOKENOMICS
          </h3>
          <div
            className="md:pt-11 pb-8 text-center text-[24px] md:text-[35px] italic font-bold"
            id="#tokenomic"
          >
            <p>
              Supply: <span className="text-stroke">10KB $RIE</span>
            </p>
            <p>
              Blockchain:
              <span className="text-stroke">SOLANA (...)</span>
            </p>
            <p>
              Ticker Token: <span className="text-stroke">$RIE</span>
            </p>
          </div>
          <div className=" hidden md:block absolute top-0 xl:top-8 right-[-30px] xl:right-0 w-1/4">
            <img src={tokenRight} alt="" />
          </div>
          <Button>
            <img src={btnAddress} alt="" />
          </Button>
        </Container>
      </main>
      <main className="bg-[#FFF4E9] py-4 md:py-7 lg:py-12" ref={roadMapRef}>
        <Container className="flex flex-col items-center">
          <h3 className="pb-4 lg:pb-16 text-[28px] lg:text-[40px] text-[#FFA943] font-bold">
            ROADMAP
          </h3>
          <div className="hidden lg:block">
            <img src={roadMap} alt="" />
          </div>
          <div className="hidden md:block lg:hidden">
            <img src={roadMapTablet1} alt="" className="pb-11" />
            <img src={roadMapTablet2} alt="" />
          </div>
          <div className="block md:hidden">
            <img src={roadMapMobile} alt="" className="pb-11" />
          </div>
        </Container>
      </main>
      <main className="bg-[#FFA943]  py-[76px] px-5 md:px-0">
        <Container className="bg-white text-center rounded-3xl">
          <div className="py-5 md:py-6">
            <h3 className="title text-[32px] md:text-[42px] italic font-bold pb-4">
              Ultimate goal
            </h3>
            <p className="italic font-normal text-base md:text-[22px] pb-4 md:pb-0">
              Riedog will become the most popular currency in the world!
            </p>
          </div>
        </Container>
      </main>
    </>
  );
}

export default Home;
