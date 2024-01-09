import { Button, Container } from "../../components";
import "./style.css";
import btnAirDropM from "../../assets/image/btnAirDropMobile.png";
import btnBuyNowM from "../../assets/image/btnBuyNowMobile.png";
import { useNavigate } from "react-router-dom";
import { PATH_AIR_DROPS } from "../../routes/paths";

interface MenuMobileProps {
  onClick: () => void;
  onClickRoadmap: () => void;
}

function MenuMobile({ onClick, onClickRoadmap }: MenuMobileProps) {
  const navigate = useNavigate();

  return (
    <div className="menuMobile">
      <Container className="px-5 md:px-0">
        <ul className="py-6">
          <li className="pb-6" onClick={onClick}>
            TOKENOMIC
          </li>
          <li
            className="py-6 border-y border-[#A3A3A3]"
            onClick={onClickRoadmap}
          >
            ROADMAP
          </li>
        </ul>
        <div className="flex justify-center items-center md:hidden">
          <Button className="pr-2" onClick={() => navigate(PATH_AIR_DROPS) }>
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
