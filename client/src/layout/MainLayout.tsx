import React from "react";
import { cn } from "../libs/utils";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

export const MainLayout: React.FC<LayoutProps> = ({ children, className }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className={cn("flex-1 pt-24 px-4 sm:px-6 lg:px-8", className)}>
        <div className="max-w-7xl mx-auto w-full">{children}</div>
      </main>
      <Footer />
    </div>
  );
};
