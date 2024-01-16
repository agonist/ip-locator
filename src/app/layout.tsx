import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import { Provider } from "@/components/provider";

const rubik = Rubik({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "IP Address Tracker",
  description: "Track IP address like a pro.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Provider>
        <body className={rubik.className}>{children}</body>
      </Provider>
    </html>
  );
}
