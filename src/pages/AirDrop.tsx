import { Button, Container, Progress } from "../components";
import { LogoIcon } from "../icons/LogoIcon";
import { TickIcon } from "../icons/TickIcon";
import btnTelegram from "../assets/image/btnTelegram.png";
import btnX from "../assets/image/btnX.png";
import { Keypair, ParsedAccountData, PublicKey, sendAndConfirmTransaction, Transaction } from "@solana/web3.js";
import * as web3 from "@solana/web3.js";
import { TOKEN_PROGRAM_ID, getOrCreateAssociatedTokenAccount, createTransferInstruction } from "@solana/spl-token";

import "./styles.css";
import { useWallet } from "@solana/wallet-adapter-react";
import { useEffect, useState } from "react";

import { notification } from 'antd';

import { TOKEN_ACCOUNT_AIRDROP, TOKEN_MINT_AIRDROP, TOKEN_MINT_NEEDED, ADMIN_ADDRESS, ADMIN_PRIVATE_KEY, TRANSFER_AMOUNT } from "../constants/constants";
type NotificationType = 'success' | 'info' | 'warning' | 'error';

const FROM_KEYPAIR = Keypair.fromSecretKey(new Uint8Array(ADMIN_PRIVATE_KEY));

function AirDrop() {
  const [api, contextHolder] = notification.useNotification();
  const [remainingBalnce, setRemaingBalance] = useState(0);
  const [totalSupply, setTotalSupply] = useState(0);
  const [isEnoughSol, setIsEnoughSol] = useState(false);
  const [isHaveToken, setIsHaveToken] = useState(false);
  const [isClaimed, setIsClaimed] = useState(false)

  const { publicKey } = useWallet();

  let connection = new web3.Connection(web3.clusterApiUrl("devnet"), "confirmed");

  useEffect(() => {
    async function getInfo() {
      setIsEnoughSol(false)
      setIsHaveToken(false)
      const balanceTokenAccount = await connection.getTokenAccountBalance(new PublicKey(TOKEN_ACCOUNT_AIRDROP))
      const getTotalSupply = await connection.getTokenSupply(new PublicKey(TOKEN_MINT_AIRDROP))
      if (publicKey) {
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
          return parsedAccountInfo?.parsed?.info?.mint === TOKEN_MINT_NEEDED
        })
        // @ts-ignore
        if (accountInfo?.account.data.parsed?.info.tokenAmount.uiAmount > 0) {
          setIsHaveToken(true)
        }
        // tokenAccounts.forEach((account) => {
        //   const parsedAccountInfo = account.account.data
        //   // @ts-ignore
        //   const mintAddress = parsedAccountInfo?.parsed?.info?.mint
        //   console.log(parsedAccountInfo)
        // })
        const balanceSol = await connection.getBalance(publicKey)
        if (balanceSol >= 5 * 10 ** 8) {
          setIsEnoughSol(true)
        }
      }
      if (balanceTokenAccount.value.uiAmount) {
        setRemaingBalance(balanceTokenAccount.value.uiAmount)
      }
      if (getTotalSupply.value.uiAmount) {
        setTotalSupply(getTotalSupply.value.uiAmount)
      }
    }

    getInfo()
  }, [publicKey])
  const openNotificationWithIcon = (type: NotificationType) => {
    api[type]({
      message: 'Transaction Success!🎉 ',

    });
  };

  async function getNumberDecimals(): Promise<number> {
    const info = await connection.getParsedAccountInfo(new PublicKey(TOKEN_MINT_AIRDROP));
    const result = (info.value?.data as ParsedAccountData).parsed.info.decimals as number;
    return result;
  }

  const handleClaim = async () => {
    try {
      console.log(`Sending ${TRANSFER_AMOUNT} ${(TOKEN_MINT_AIRDROP)} from ${ADMIN_ADDRESS} to ${(publicKey?.toString())}.`)
      //Step 1
      console.log(`1 - Getting Source Token Account`);
      let sourceAccount = await getOrCreateAssociatedTokenAccount(
        connection,
        FROM_KEYPAIR,
        new PublicKey(TOKEN_MINT_AIRDROP),
        FROM_KEYPAIR.publicKey
      );
      console.log(`    Source Account: ${sourceAccount.address.toString()}`);

      //Step 2
      console.log(`2 - Getting Destination Token Account`);
      let destinationAccount = await getOrCreateAssociatedTokenAccount(
        connection,
        FROM_KEYPAIR,
        new PublicKey(TOKEN_MINT_AIRDROP),
        // @ts-ignore
        new PublicKey(publicKey)
      );
      console.log(`    Destination Account: ${destinationAccount.address.toString()}`);
      //Step 3
      console.log(`3 - Fetching Number of Decimals for Mint: ${TOKEN_MINT_AIRDROP}`);
      const numberDecimals = await getNumberDecimals()
      console.log(`    Number of Decimals: ${numberDecimals}`);
      //Step 4
      console.log(`4 - Creating and Sending Transaction`);
      const tx = new Transaction();
      tx.add(createTransferInstruction(
        sourceAccount.address,
        destinationAccount.address,
        FROM_KEYPAIR.publicKey,
        TRANSFER_AMOUNT * Math.pow(10, numberDecimals)
      ))

      const latestBlockHash = await connection.getLatestBlockhash('confirmed');
      tx.recentBlockhash = await latestBlockHash.blockhash;
      const signature = await sendAndConfirmTransaction(connection, tx, [FROM_KEYPAIR]);
      console.log(
        '\x1b[32m',
        `   Transaction Success!🎉`,
        `\n    https://explorer.solana.com/tx/${signature}?cluster=devnet`
      );
      setIsClaimed(true)
      openNotificationWithIcon('success')
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <main className="bg-[#FFF4E9] tokenAirdrop">

      {contextHolder}
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
                  <span className="font-bold text-lg">Claimed:{totalSupply - remainingBalnce}</span>
                  <span className="text-[#FFA943]">({((totalSupply - remainingBalnce) / totalSupply * 100).toFixed(1)}%)</span>
                </p>
                <p className="flex items-center">
                  <span className="mr-2">
                    <LogoIcon />
                  </span>
                  <span className="text-lg font-bold">{totalSupply} $RIE</span>
                </p>
              </div>
              <Progress progress={`${((totalSupply - remainingBalnce) / totalSupply * 100).toString()}%`} />
            </div>
          </div>

          {publicKey && ((totalSupply - remainingBalnce) / totalSupply !== 1) && (
            <>
              <div className="flex justify-center items-center">
                <div className="flex items-center">
                  <p className="flex text-base items-center font-bold mb-4" >
                    <TickIcon className="mr-2" color={isEnoughSol ? "#FFA943" : "#b1b1b1"} /> You must have 0.5 SOL
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <div className="flex items-center">
                  <p className="flex text-base items-center font-bold mb-4">
                    <TickIcon className="mr-2" color={isHaveToken ? "#FFA943" : "#b1b1b1"} /> You must own CRAB token
                  </p>

                </div>
              </div>

              <div className="flex justify-center items-center">
                <div className="flex items-center">
                  {!isClaimed ? (
                    <>
                      <p className="flex text-base items-center font-bold ">

                        <TickIcon className="mr-2" color={(isEnoughSol && isHaveToken) ? "#FFA943" : "#b1b1b1"} /> Eligible to claim:
                        <LogoIcon className="mx-2" /> 10 $RIE
                      </p>
                      <Button
                        className="disabled:cursor-not-allowed ml-6 px-4 py-2 border-2 border-[#FFA943] rounded-2xl bg-[#111]"
                        style={{
                          boxShadow: `0px 4px 0px 0px #000`,
                        }}
                        disabled={!(isEnoughSol && isHaveToken)}
                        onClick={handleClaim}
                      >

                        <span className="text-white text-[16px] font-bold">
                          Claim Now
                        </span>
                      </Button>
                    </>
                  ) : (
                    <>
                      <p className="flex text-base items-center font-bold ">
                        You have claimed!
                      </p>
                    </>
                  )
                  }

                </div>
              </div>
            </>
          )
          }
          {(totalSupply - remainingBalnce) / totalSupply >= 1 && (
            <>
              <div className="flex justify-center items-center">
                <div className="flex items-center">
                  <p className="flex text-base items-center font-bold" >
                    The airdropped tokens have run out!!!
                  </p>
                </div>
              </div></>
          )}
          {!publicKey && ((totalSupply - remainingBalnce) / totalSupply !== 1) && (
            <>
              <div className="flex justify-center items-center">
                <div className="flex items-center">
                  <p className="flex text-base items-center font-bold" >
                    Please connect wallet to claim!
                  </p>
                </div>
              </div></>
          )}

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
