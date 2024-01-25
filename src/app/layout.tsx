import RecoilRootProvider from "./RecoilRootProvider";
import { jua } from "@/fonts";

export const metadata = {
  title: "마요네즈",
  description: "마성의 요리 네이밍 퀴즈",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <RecoilRootProvider>
      <html lang="en">
        <body className = {jua.className} style={{ margin: "0" }}>
          {children}
        </body>
      </html>
    </RecoilRootProvider>
  );
}
