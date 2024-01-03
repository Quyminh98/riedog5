import React from "react";
import { CloseIcon } from "../../icons/CloseIcon";
import { Button } from "../../components";
import { CopyIcon } from "../../icons/CopyIcon";
import sol from "../../assets/image/sol.png";
import { LogoIcon } from "../../icons/LogoIcon";
import { shortenAddress } from "../../utils";
import { useWallet } from "@solana/wallet-adapter-react";

interface YourWalletProps {
  address: string;
  solBalance?: string;
  rieBalance?: string;
  isShowYourWallet: boolean;
  setIsShowYourWallet: React.Dispatch<React.SetStateAction<boolean>>;
}

function YourWallet({
  address,
  solBalance = "0.00",
  rieBalance = "0.00",
  setIsShowYourWallet,
  isShowYourWallet,
}: YourWalletProps) {
  const walletAddress = shortenAddress(address, 11, 11);
  const { disconnect } = useWallet();

  const copyToClipboard = () => {
    if (address) {
      navigator.clipboard
        .writeText(address)
        .then(() => {
          console.log("Address copied to clipboard!");
        })
        .catch((error) => {
          console.error("Error copying to clipboard:", error);
        });
    }
  };

  const handleDisconnect = () => {
    disconnect();
  };

  return (
    <>
      {isShowYourWallet && (
        <div
          className="bg-[#FFF9F4] p-6 w-full max-w-[400px] absolute top-[82px] rounded-xl z-50"
          style={{
            boxShadow: `0px 4px 20px 0px rgba(0, 0, 0, 0.10)`,
          }}
        >
          <div className="flex justify-between items-center pb-3 border-b border-[#F7E4D3]">
            <p className="text-[20px] font-bold">Your Wallet</p>
            <CloseIcon onClick={() => setIsShowYourWallet(false)} />
          </div>
          <div className="mt-3">
            <p className="text-[#FFA943]">Your Address</p>
            <div className="">
              <div className="bg-[#E4D0BC] p-3 rounded-lg relative">
                {walletAddress}
                <div
                  className="absolute right-0 top-0 bg-[#FFA943] p-3 rounded-e-lg cursor-pointer"
                  onClick={copyToClipboard}
                >
                  <CopyIcon />
                </div>
              </div>
            </div>
          </div>
          <div className="my-6">
            <div className="flex justify-between items-center bg-[#fff] py-2 px-3 rounded-lg mb-2">
              <p className="text-sm font-bold flex items-center">
                <img src={sol} alt="" className="pr-2" /> SOL Balance:
              </p>
              <p className="text-[#FFA943] text-lg">{solBalance}</p>
            </div>
            <div className="flex justify-between items-center bg-[#fff] py-2 px-3 rounded-lg">
              <p className="text-sm font-bold flex items-center">
                <LogoIcon /> <span className="pl-2">RIE Balance:</span>
              </p>
              <p className="text-[#FFA943] text-lg">{rieBalance}</p>
            </div>
          </div>
          <Button
            className="px-4 py-2 bg-[#FFA943] rounded-2xl w-full"
            onClick={handleDisconnect}
            style={{
              border: `2px solid #000`,
              boxShadow: `-2px 4px 0px 0px #FFA943`,
            }}
          >
            <span className="text-white text-[18px] font-bold">
              Disconnect Wallet
            </span>
          </Button>
        </div>
      )}
    </>
  );
}

export default YourWallet;
