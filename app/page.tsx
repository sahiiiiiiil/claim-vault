"use client";

import {
  useAccount,
  useChainId,
  useConnect,
  useDisconnect,
} from "wagmi";

export default function Home() {
  const { address, isConnected } = useAccount();
  const chainId = useChainId();
  const { connectors, connect } = useConnect();
  const { disconnect } = useDisconnect();

  const isRobinhood = chainId === 4663;

  return (
    <main>
      <h1>Claim Vault</h1>

      <p>
        Discover, verify, and claim supported on-chain rewards.
      </p>

      {!isConnected ? (
        <div>
          {connectors.map((connector) => (
            <button
              key={connector.uid}
              onClick={() => connect({ connector })}
              style={{ margin: "6px" }}
            >
              {connector.name === "Injected"
                ? "Connect Wallet"
                : `Connect ${connector.name}`}
            </button>
          ))}
        </div>
      ) : (
        <div>
          <p>
            Connected: {address?.slice(0, 6)}...
            {address?.slice(-4)}
          </p>

          <p>
            Network:{" "}
            {isRobinhood
              ? "Robinhood Chain ✓"
              : `Wrong Network (${chainId})`}
          </p>

          <button onClick={() => disconnect()}>
            Disconnect
          </button>
        </div>
      )}
    </main>
  );
}
