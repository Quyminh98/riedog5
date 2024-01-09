import { Button, Container, Progress } from "../components";
import { LogoIcon } from "../icons/LogoIcon";
import { TickIcon } from "../icons/TickIcon";
import btnTelegram from "../assets/image/btnTelegram.png";
import btnX from "../assets/image/btnX.png";

import "./styles.css";

function AirDrop() {
  return (
    <main className="bg-[#FFF4E9] tokenAirdrop">
      <Container className="pt-[62px] py-[150px] flex flex-col items-center">
        <h3 className="text-center text-[#FFA943] text-[40px] italic font-bold title mb-12">
          $RIE Token Airdrop
        </h3>
        <div
          className="py-[30px] px-[20px] md:py-[30px] md:px-[40px] lg:px-[90px] lg:py-[40px] rounded-[30px]"
          style={{
            backgroundColor: `rgba(197, 110, 30, 0.10)`,
            boxShadow: `0px 4px 20px 0px rgba(0, 0, 0, 0.05)`,
            backdropFilter: `blur(5px)`,
          }}
        >
          <div className="text-center">
            <p className="text-[30px] italic font-bold title">
              Airdrop Is Live Now!
            </p>
            <p className="pt-4 text-sm lg:text-base">
              A total of [amount] $RIE tokens have been claimed by RieDog
              supporters, <br /> constituting [percentage]% of the total supply.
              <br /> The unclaimed tokens, representing [percentage]% of the
              total supply, have been securely burned.
            </p>
          </div>
          <div className="mt-[32px] mb-4 bg-[#FFF4E9] rounded-2xl">
            <div className="p-5">
              <div className="pb-3 flex justify-between items-center">
                <p>
                  <span className="font-bold text-lg">Claimed: 300,000</span>
                  <span className="text-[#FFA943]">(33.5%)</span>
                </p>
                <p className="flex items-center">
                  <span className="mr-2">
                    <LogoIcon />
                  </span>
                  <span className="text-lg font-bold">1,000,000 $RIE</span>
                </p>
              </div>
              <Progress progress="33.5%" />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="flex items-center">
              <p className="flex text-base items-center font-bold">
                <TickIcon className="mr-2" /> Eligible to claim:
                <LogoIcon className="mx-2" /> 1000 $RIE
              </p>
              <Button
                className="ml-6 px-4 py-2 border-2 border-[#FFA943] rounded-2xl bg-[#111]"
                style={{
                  boxShadow: `0px 4px 0px 0px #000`,
                }}
              >
                <span className="text-white text-[16px] font-bold">
                  Claim Now
                </span>
              </Button>
            </div>
          </div>
          <div className="text-center mt-9 mb-6">
            <p className="text-[30px] italic font-bold title mb-4">
              Ways to Earn
            </p>
            <ul className="text-base">
              <li>
                <span className="font-bold">Staking:</span> Lock your $RIE
                tokens and earn passive rewards.
              </li>
              <li>
                <span className="font-bold">Farming:</span> Provide liquidity to
                earn additional $RIE and other tokens.
              </li>
              <li>
                <span className="font-bold">Community Contests:</span>{" "}
                Participate in fun and engaging activities to win $RIE.
              </li>
            </ul>
          </div>
        </div>
        <div
          className="bg-[#FFA943] rounded-2xl w-full max-w-[335px] md:max-w-[456px] lg:max-w-[610px] flex flex-col items-center py-5 -mt-8 z-50"
          style={{
            boxShadow: ` 0px 4px 0px 0px #000`,
            border: `2px solid #000`,
          }}
        >
          <p
            className="text-[#FFF4E9] text-[18px] italic font-bold mb-4 text-center"
            style={{
              textShadow: `0px 0.785px 0px #000`,
            }}
          >
            Join the RieDog community to hunt for Airdrops now!
          </p>
          <div>
            <Button className="mr-4">
              <img src={btnTelegram} alt="" />
            </Button>
            <Button>
              <img src={btnX} alt="" />
            </Button>
          </div>
        </div>
      </Container>
    </main>
  );
}

export default AirDrop;
