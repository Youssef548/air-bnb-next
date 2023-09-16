import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import ClientOnlyProps from "./components/ClientOnly";
import Modal from "./components/Modlas/Modal";
import RegisterModal from "./components/Modlas/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";
import LoginModal from "./components/Modlas/LoginModal";
import getCurrentUser from "./actions/getCurrentUser";
// import type { Metadata } from "next";

export const metadata = {
  title: "Airbnb",
  description: "Airbnb clone",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body>
        <ClientOnlyProps>
          <ToasterProvider />
          <LoginModal />
          <RegisterModal />
          <Navbar currentUser={currentUser} />
        </ClientOnlyProps>
      </body>
    </html>
  );
}
