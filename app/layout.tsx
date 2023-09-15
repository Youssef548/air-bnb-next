import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import ClientOnlyProps from "./components/ClientOnly";
import Modal from "./components/Modlas/Modal";
import RegisterModal from "./components/Modlas/RegisterModal";
import ToasterProvider from "./components/providers/ToasterProvider";
// import type { Metadata } from "next";

export const metadata = {
  title: "Airbnb",
  description: "Airbnb clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ClientOnlyProps>
          <ToasterProvider />
          <RegisterModal />
          <Navbar />
        </ClientOnlyProps>
      </body>
    </html>
  );
}
