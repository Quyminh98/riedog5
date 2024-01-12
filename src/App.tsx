import AppRoutes from "./routes";
import { BrowserRouter } from "react-router-dom";
// import { clusterApiUrl } from "@solana/web3.js";
// import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
// import {
//   LedgerWalletAdapter,
//   PhantomWalletAdapter,
//   TorusWalletAdapter,
// } from "@solana/wallet-adapter-wallets";
// import {
//   ConnectionProvider,
//   WalletProvider,
// } from "@solana/wallet-adapter-react";
// import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from '@solana/web3.js';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
  MathWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { GlowWalletAdapter } from "@solana/wallet-adapter-glow";
import "@solana/wallet-adapter-react-ui/styles.css";
import { useMemo } from "react";

function App() {
  // const solNetwork = WalletAdapterNetwork.Mainnet;
  // const endpoint = clusterApiUrl(solNetwork);
  // const wallets = [
  //   new PhantomWalletAdapter(),
  //   new TorusWalletAdapter(),
  //   new LedgerWalletAdapter(),
  // ];
  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new SolflareWalletAdapter(),
      new GlowWalletAdapter(),
      new MathWalletAdapter(),
    ],
    []
  );
  const solNetwork = WalletAdapterNetwork.Mainnet;
  const endpoint = useMemo(() => clusterApiUrl(solNetwork), [solNetwork]);
  return (
    <>
      {/* <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets} autoConnect={true}>
          <WalletModalProvider> */}
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets} autoConnect={true}>
          <WalletModalProvider>
            <BrowserRouter>
              <AppRoutes />
            </BrowserRouter>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>

      {/* </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider> */}
    </>
  );
}

export default App;
