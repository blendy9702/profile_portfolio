import type { Metadata } from "next";
import "./globals.css";
import { InstagramGradientBackground } from "./components/InstagramGradient";

export const metadata: Metadata = {
  title: "Profile Portfolio",
  description: "Profile Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/pretendard@4.0.1/dist/web/variable/pretendardvariable.min.css"
        />
      </head>
      <body className={`antialiased max-w-[1440px] mx-auto`}>
        <InstagramGradientBackground />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
