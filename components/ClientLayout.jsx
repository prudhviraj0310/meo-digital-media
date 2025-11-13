"use client";

import NavbarMinimal from "@/components/NavbarMinimal";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import PageTransition from "@/components/PageTransition";
import LoadingScreen from "@/components/LoadingScreen";
import ScrollProgress from "@/components/ScrollProgress";

export default function ClientLayout({ children }) {
  return (
    <>
      <ScrollProgress />
      <LoadingScreen />
      <CustomCursor />
      <NavbarMinimal />
      <PageTransition>
        <main>{children}</main>
      </PageTransition>
      <Footer />
    </>
  );
}
