"use client"
import { LogListProvider } from "@/context/logContext";

function Layout({ children }) {
  return <LogListProvider>{children}</LogListProvider>;
}

export default Layout;
