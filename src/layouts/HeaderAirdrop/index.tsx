import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button, Container } from "../../components";
import rieDogLogo from "../../assets/image/logo.svg";
import { MenuIcon } from "../../icons/MenuIcon";
import { CloseIcon } from "../../icons/CloseIcon";
import MenuMobile from "./MenuMobile";
import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from '@solana/wallet-adapter-react-ui';
import YourWallet from "./YourWallet";
import * as web3 from "@solana/web3.js";
import BigNumber from "bignumber.js";
import { TOKEN_MINT_AIRDROP } from "../../constants/constants";
import { TOKEN_PROGRAM_ID } from "@solana/spl-token";

function HeaderAirdrop() {
  const navigator = useNavigate();

  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [isShowYourWallet, setIsShowYourWallet] = useState<boolean>(false);
  const [solBalance, setSolBalance] = useState<string>('')
  const [rieBalance, setRieBalance] = useState<string>('')

  const { publicKey } = useWallet();
  const { setVisible } = useWalletModal();
  let connection = new web3.Connection(web3.clusterApiUrl("devnet"), "confirmed");
  useEffect(() => {
    const getInfoWallet = async () => {
      if (publicKey) {
        const balanceSol = await connection.getBalance(publicKey)
        setSolBalance(new BigNumber(balanceSol).dividedBy(new BigNumber(10).pow(9)).toString())
        const filters: web3.GetProgramAccountsFilter[] = [
          {
            dataSize: 165,
          },
          {
            memcmp: {
              offset: 32,
              bytes: publicKey.toString()
            }
          }
        ]
        const tokenAccounts = await connection.getParsedProgramAccounts(
          TOKEN_PROGRAM_ID,
          { filters }
        )
        const accountInfo = tokenAccounts.find((account) => {
          const parsedAccountInfo = account.account.data;
          // @ts-ignore
          return parsedAccountInfo?.parsed?.info?.mint === TOKEN_MINT_AIRDROP
        })
        // @ts-ignore
        setRieBalance(accountInfo?.account.data.parsed.info.tokenAmount.uiAmount)
      }

    }
    getInfoWallet()
  }, [publicKey])
  console.log()

  const handleConnect = () => {
    setVisible(true)
  }

  const handleOpenMenu = () => setShowMenu(true);
  const handleCloseMenu = () => setShowMenu(false);

  const handleShowYourWallet = () => setIsShowYourWallet(true)

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
          {publicKey ? <Button
            className=" hidden md:block border-2 border-[#000] px-4 py-3
           bg-[#FFA943] rounded-2xl min-w-[170px]"
            style={{ boxShadow: `-2px 4px 0px 0px #FFA943` }}
            onClick={handleShowYourWallet}
          >
            <span className="text-white text-[20px] font-bold">
              {/* {wallet?.adapter.icon && <img src={wallet.adapter.icon} alt={`${wallet.adapter.name} icon`}/>}  */}
              {publicKey.toString().slice(0, 4)}...{publicKey.toString().slice(-4)}
            </span>

          </Button> :
            <Button
              className="hidden md:block border-2 border-[#000] px-4 py-3
           bg-[#FFA943] rounded-2xl min-w-[170px]"
              style={{ boxShadow: `-2px 4px 0px 0px #FFA943` }}
              onClick={handleConnect}
            >
              <span className="text-white text-[20px] font-bold">
                Connect Wallet
              </span>
            </Button>
          }
          {publicKey && (
            <YourWallet
              address={publicKey?.toString()}
              solBalance={solBalance}
              rieBalance={rieBalance}
              setIsShowYourWallet={setIsShowYourWallet}
              isShowYourWallet={isShowYourWallet}
            ></YourWallet>
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
      {showMenu && (
        <MenuMobile
          onClick={handleClickTokenomic}
          onClickRoadmap={handleClickRoadmap}
        />
      )}
    </div>
  );
}

export default HeaderAirdrop;
