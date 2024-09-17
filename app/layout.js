import {  Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { AlertProvider } from "@/context/alertContext";
import Alert from "./common_components/alert";

const plus = Plus_Jakarta_Sans({ subsets: ["latin"] });


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={plus.className}>
      <AlertProvider>
        {children}
      <Alert /> {/* Render the Alert component */}
        </AlertProvider>
        </body>
    </html>
  );
}
