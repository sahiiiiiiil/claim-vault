"use client";

import { useState } from "react";

export default function Home() {
  const [address, setAddress] = useState("");

  async function connectWallet() {
    if (!window.ethereum) {
      alert("Please install MetaMask or another compatible wallet.");
      return;
    }

    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      if (accounts.length > 0) {
        setAddress(accounts[0]);
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <main>
      <h1>Claim Vault</h1>

      <p>
        Discover, verify, and claim supported on-chain rewards.
      </p>

      <button onClick={connectWallet}>
        {address
          ? `${address.slice(0, 6)}...${address.slice(-4)}`
          : "Connect Wallet"}
      </button>
    </main>
  );
}
