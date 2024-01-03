import React from "react";
import { Button, Container } from "../../components";
import './style.css'
import btnAirDropM from '../../assets/image/btnAirDropMobile.png'
import btnBuyNowM from '../../assets/image/btnBuyNowMobile.png'

function MenuMobile() {
  return (
    <div className="menuMobile">
      <Container className="px-5 md:px-0">
        <ul className="py-6">
          <li className="pb-6">TOKENOMIC</li>
          <li className="py-6 border-y border-[#A3A3A3]">ROADMAP</li>
        </ul>
        <div className="flex justify-center items-center md:hidden">
            <Button className="pr-2">
                <img src={btnAirDropM} alt="" />
            </Button>
            <Button>
                <img src={btnBuyNowM} alt="" />
            </Button>
        </div>
      </Container>
    </div>
  );
}

export default MenuMobile;
