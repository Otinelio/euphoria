import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrolled } from "@/hooks/useScrolled";
import { useCartStore } from "@/store/cartStore";
import logo from "@/images/logoEuphoria.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/bar", label: "The Bar" },
  { to: "/events", label: "Events" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const scrolled = useScrolled(40);
  const [open, setOpen] = useState(false);
  const cartCount = useCartStore((s) => s.count());

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(10,10,10,0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid var(--border-subtle)" : "1px solid transparent",
        }}
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-8 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 leading-none">
            <img src={logo} alt="Euphoria Pub Food & Bar" className="h-16 w-auto object-contain" />
            <span className="sr-only">Euphoria Pub Food & Bar</span>
          </Link>

          <ul className="hidden lg:flex items-center gap-9">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="font-body uppercase text-[12px] tracking-[0.2em] text-[var(--text-primary)] hover:text-gold transition-colors data-[status=active]:text-gold relative group"
                  activeProps={{
                    style: { color: "var(--accent-gold)", textShadow: "0 0 12px rgba(212,175,55,0.5)" },
                  }}
                  activeOptions={{ exact: l.to === "/" }}
                >
                  {l.label}
                  <span className="absolute -bottom-2 left-0 right-0 h-px bg-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <Link
              to="/reserve"
              className="hidden md:inline-flex items-center justify-center px-5 py-2.5 border border-gold text-gold font-body uppercase text-[11px] tracking-[0.25em] hover:bg-gold hover:text-[#0a0a0a] transition-all pulse-gold"
            >
              Reserve a table
            </Link>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="lg:hidden text-gold p-2"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
        {cartCount > 0 ? null : null}
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-[#0a0a0a]/98 backdrop-blur-xl lg:hidden"
          >
            <div className="flex justify-end p-6">
              <button onClick={() => setOpen(false)} aria-label="Close menu" className="text-gold">
                <X className="w-7 h-7" />
              </button>
            </div>
            <ul className="flex flex-col items-center gap-7 mt-10">
              {links.map((l, i) => (
                <motion.li
                  key={l.to}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="font-display text-3xl tracking-widest text-gold"
                  >
                    {l.label.toUpperCase()}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: links.length * 0.05 }}
              >
                <Link
                  to="/reserve"
                  onClick={() => setOpen(false)}
                  className="mt-4 inline-flex px-6 py-3 border border-gold text-gold font-body uppercase text-sm tracking-[0.25em]"
                >
                  Reserve a table
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}