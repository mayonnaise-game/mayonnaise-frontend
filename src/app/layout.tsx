import Providers from "./Providers";
import { gmarket } from "@/fonts";

export const metadata = {
  title: "마요네즈",
  description: "마성의 요리 네이밍 퀴즈",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <Providers>
      <html lang="en">
        <body className={gmarket.className} style={{ margin: "0" }}>
          {children}
        </body>
      </html>
    </Providers>
  );
}
