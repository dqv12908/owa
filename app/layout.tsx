import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Owacrypto Community (😇,🪽) - Đạo quân cởi trần hút thuốc",
  description: "Tận sâu trong vũ trụ on-chain, nơi những con số nhảy múa như ma pháp và những cú nến xanh đỏ chính là thần chú. Gia nhập giáo phái kỳ lạ Owacrypto Community - chuyên săn kèo hiddengem theo trend.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
