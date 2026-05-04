import { Header } from "./Header";
import { Footer } from "./Footer";
import type { ReactNode } from "react";

export const SiteLayout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-1 pt-16">{children}</main>
    <Footer />
  </div>
);
