import { memo } from "react";
import { ConnectWallet } from "Components/ConnectWallet";

function WalletConnect() {
  return (
    <>
      <ConnectWallet />
    </>
  );
}

export default memo(WalletConnect);
