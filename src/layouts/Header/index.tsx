import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button, Container } from "../../components";
import rieDogLogo from "../../assets/image/logo.svg";
import { MenuIcon } from "../../icons/MenuIcon";
import { CloseIcon } from "../../icons/CloseIcon";
import MenuMobile from "./MenuMobile";
import { PATH_AIR_DROPS } from "../../routes/paths";

function Header() {
  const navigator = useNavigate();
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const handleOpenMenu = () => setShowMenu(true);

  const handleCloseMenu = () => setShowMenu(false);
  const navigate = useNavigate();

  const handleClickTokenomic = () => {
    navigator("/?tokenomic");
    handleCloseMenu();
  };
  const handleClickRoadmap = () => {
    navigator("/?roadmap");
    handleCloseMenu();
  };

  return (
    <div className="border-b-4 border-[#FFA943]">
      <Container className="flex justify-between items-center py-5  px-5 md:px-0">
        <Link to={"/"}>
          <img src={rieDogLogo} alt="logo" />
        </Link>
        <ul className="hidden lg:flex cursor-pointer">
          <li
            className="pr-12 text-xl font-bold hover:text-[#FFA943]"
            onClick={handleClickTokenomic}
          >
            TOKENOMIC
          </li>
          <li
            className="text-xl font-bold hover:text-[#FFA943]"
            onClick={handleClickRoadmap}
          >
            ROADMAP
          </li>
        </ul>
        <div className="flex items-center">
          <Button
            className="hidden md:block mr-5 px-4 py-3 border-2 border-[#FFA943] rounded-2xl bg-[#111] min-w-[170px]"
            onClick={() => navigate(PATH_AIR_DROPS)}
            style={{
              boxShadow: `0px 4px 0px 0px #000`,
            }}
          >
            <span className="text-white text-[20px] font-bold">Airdrop</span>
          </Button>
          <Button
            className="hidden md:block border-2 border-[#000] px-4 py-3
           bg-[#FFA943] rounded-2xl min-w-[170px]"
            style={{ boxShadow: `-2px 4px 0px 0px #FFA943` }}
          >
            <span className="text-white text-[20px] font-bold">Buy Now</span>
          </Button>
          <div className="block pl-3 lg:hidden lg:pl-0">
            {showMenu ? (
              <CloseIcon onClick={handleCloseMenu} />
            ) : (
              <MenuIcon onClick={handleOpenMenu} />
            )}
          </div>
        </div>
      </Container>
      {showMenu && (
        <MenuMobile
          onClick={handleClickTokenomic}
          onClickRoadmap={handleClickRoadmap}
        />
      )}
    </div>
  );
}

export default Header;
