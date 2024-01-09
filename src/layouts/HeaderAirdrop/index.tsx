import { useEffect, useState } from "react";
import { Button, Container } from "../../components";
import rieDogLogo from "../../assets/image/logo.svg";
import { MenuIcon } from "../../icons/MenuIcon";
import { CloseIcon } from "../../icons/CloseIcon";
import MenuMobile from "./MenuMobile";
import { Link } from "react-router-dom";
import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { Connection, PublicKey } from "@solana/web3.js";
import YourWallet from "./YourWallet";
import { shortenAddress } from "../../utils";

function HeaderAirdrop() {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const { setVisible } = useWalletModal();
  const [isShowYourWallet, setIsShowYourWallet] = useState<boolean>(false);

  const [balance, setBalance] = useState<number>();

  const { publicKey, connect, connected } = useWallet();

  const handleConnect = () => {
    if (connected) {
      setIsShowYourWallet(true);
    } else {
      connect();
      setVisible(true);
    }
  };

  const handleOpenMenu = () => setShowMenu(true);
  const handleCloseMenu = () => setShowMenu(false);

  useEffect(() => {
    const getBalance = async () => {
      if (publicKey) {
        const connection = new Connection(
          "https://api.mainnet-beta.solana.com",
          "confirmed"
        );
        const balance = await connection.getBalance(
          new PublicKey(publicKey.toBase58())
        );
        setBalance(balance);
      }
    };

    getBalance();
  }, [publicKey]);

  console.log("balance",balance)

  return (
    <div className="border-b-4 border-[#FFA943]">
      <Container className="flex justify-between items-center py-5  px-5 md:px-0">
        <Link to={"/"}>
          <img src={rieDogLogo} alt="logo" />
        </Link>
        <ul className="hidden lg:flex cursor-pointer">
          <li className="pr-12 text-xl font-bold hover:text-[#FFA943]">
            <a href="#tokenomic">TOKENOMIC</a>
          </li>
          <li className="text-xl font-bold hover:text-[#FFA943]">ROADMAP</li>
        </ul>
        <div className="flex items-center relative">
          <Button
            className="hidden md:block mr-5 px-4 py-3 border-2 border-[#FFA943] rounded-2xl bg-[#111] min-w-[170px]"
            style={{
              boxShadow: `0px 4px 0px 0px #000`,
            }}
          >
            <span className="text-white text-[20px] font-bold">
              Claim Token
            </span>
          </Button>
          <Button
            className="hidden md:block border-2 border-[#000] px-4 py-3
           bg-[#FFA943] rounded-2xl min-w-[170px]"
            style={{ boxShadow: `-2px 4px 0px 0px #FFA943` }}
            onClick={handleConnect}
          >
            <span className="text-white text-[20px] font-bold">
              {connected && publicKey
                ? shortenAddress(publicKey.toBase58())
                : "Conect Wallet"}
            </span>
          </Button>
          {publicKey && (
            <YourWallet
              address={publicKey?.toBase58()}
              setIsShowYourWallet={setIsShowYourWallet}
              isShowYourWallet={isShowYourWallet}
            />
          )}
          <div className="block pl-3 lg:hidden lg:pl-0">
            {showMenu ? (
              <CloseIcon onClick={handleCloseMenu} />
            ) : (
              <MenuIcon onClick={handleOpenMenu} />
            )}
          </div>
        </div>
      </Container>
      {showMenu && <MenuMobile />}
    </div>
  );
}

export default HeaderAirdrop;
