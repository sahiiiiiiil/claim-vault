import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Claim Vault",
  description:
    "Discover, verify, and claim supported on-chain rewards on Robinhood Chain.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
