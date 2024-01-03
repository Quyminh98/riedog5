import { Button, Container } from "../../components";
import "./style.css";

function MenuMobile() {
  return (
    <div className="menuMobile">
      <Container className="px-5 md:px-0">
        <ul className="py-6">
          <li className="pb-6">TOKENOMIC</li>
          <li className="py-6 border-y border-[#A3A3A3]">ROADMAP</li>
        </ul>
        <div className="flex justify-center items-center md:hidden">
          <Button
            className="mr-5 px-6 py-2 border-2 border-[#FFA943] rounded-2xl bg-[#111] min-w-[121px]"
            style={{
              boxShadow: `0px 4px 0px 0px #000`,
            }}
          >
            <span className="text-white text-[16px] font-bold">Claim Now</span>
          </Button>
          <Button
            className="mr-5 px-6 py-2 border-2 border-[#000] rounded-2xl bg-[#FFA943] min-w-[121px]"
            style={{ boxShadow: `-2px 4px 0px 0px #FFA943` }}
          >
          <span className="text-white text-[16px] font-bold">Connect Wallet</span>
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default MenuMobile;
