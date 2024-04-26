import { Arya } from "next/font/google";
import "./globals.scss";
import NavBar from "./components/NavBar";

const inter = Arya({
  style: "normal",
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "F1 Insights",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`bg-[#00293B] ${inter.className}`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
