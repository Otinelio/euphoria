import { createFileRoute, Outlet, useLocation } from "@tanstack/react-router";
import { AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CartDrawer, CartFab } from "@/components/CartDrawer";
import { PageTransition } from "@/components/PageTransition";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/_site")({
  component: SiteLayout,
});

function SiteLayout() {
  const location = useLocation();
  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0a]">
      <Navbar />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <PageTransition key={location.pathname}>
            <Outlet />
          </PageTransition>
        </AnimatePresence>
      </main>
      <Footer />
      <CartFab />
      <CartDrawer />
      <Toaster theme="dark" position="bottom-center" />
    </div>
  );
}