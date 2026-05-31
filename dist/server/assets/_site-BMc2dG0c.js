import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Link, useLocation, Outlet } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Instagram, Facebook, Video, MapPin, Phone, Clock } from "lucide-react";
import { useState, useEffect } from "react";
import { u as useCartStore } from "./cartStore-Mu-5IcZ3.js";
import { a as CartFab, C as CartDrawer } from "./CartDrawer-Bd7uR-ls.js";
import { Toaster as Toaster$1 } from "sonner";
import "zustand";
import "zustand/middleware";
import "./format-CZhDL1kI.js";
import "./whatsapp-BO6hiolq.js";
import "./settingsStore-Ebfo6NmT.js";
import "./ordersStore-D_fd3WX_.js";
function useScrolled(threshold = 30) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);
  return scrolled;
}
const links = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/bar", label: "The Bar" },
  { to: "/events", label: "Events" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" }
];
function Navbar() {
  const scrolled = useScrolled(40);
  const [open, setOpen] = useState(false);
  const cartCount = useCartStore((s) => s.count());
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(
      "nav",
      {
        className: "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        style: {
          background: scrolled ? "rgba(10,10,10,0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid var(--border-subtle)" : "1px solid transparent"
        },
        children: [
          /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-5 lg:px-8 h-20 flex items-center justify-between", children: [
            /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex flex-col leading-none", children: [
              /* @__PURE__ */ jsx("span", { className: "font-display text-3xl tracking-widest text-gold", children: "EUPHORIA" }),
              /* @__PURE__ */ jsx("span", { className: "font-body text-[10px] uppercase tracking-[0.3em] text-muted-foreground-x mt-0.5", children: "Pub Food & Bar" })
            ] }),
            /* @__PURE__ */ jsx("ul", { className: "hidden lg:flex items-center gap-9", children: links.map((l) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
              Link,
              {
                to: l.to,
                className: "font-body uppercase text-[12px] tracking-[0.2em] text-[var(--text-primary)] hover:text-gold transition-colors data-[status=active]:text-gold relative group",
                activeProps: {
                  style: { color: "var(--accent-gold)", textShadow: "0 0 12px rgba(212,175,55,0.5)" }
                },
                activeOptions: { exact: l.to === "/" },
                children: [
                  l.label,
                  /* @__PURE__ */ jsx("span", { className: "absolute -bottom-2 left-0 right-0 h-px bg-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left" })
                ]
              }
            ) }, l.to)) }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsx(
                Link,
                {
                  to: "/reserve",
                  className: "hidden md:inline-flex items-center justify-center px-5 py-2.5 border border-gold text-gold font-body uppercase text-[11px] tracking-[0.25em] hover:bg-gold hover:text-[#0a0a0a] transition-all pulse-gold",
                  children: "Reserve a table"
                }
              ),
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => setOpen(true),
                  "aria-label": "Open menu",
                  className: "lg:hidden text-gold p-2",
                  children: /* @__PURE__ */ jsx(Menu, { className: "w-6 h-6" })
                }
              )
            ] })
          ] }),
          cartCount > 0 ? null : null
        ]
      }
    ),
    /* @__PURE__ */ jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        className: "fixed inset-0 z-[60] bg-[#0a0a0a]/98 backdrop-blur-xl lg:hidden",
        children: [
          /* @__PURE__ */ jsx("div", { className: "flex justify-end p-6", children: /* @__PURE__ */ jsx("button", { onClick: () => setOpen(false), "aria-label": "Close menu", className: "text-gold", children: /* @__PURE__ */ jsx(X, { className: "w-7 h-7" }) }) }),
          /* @__PURE__ */ jsxs("ul", { className: "flex flex-col items-center gap-7 mt-10", children: [
            links.map((l, i) => /* @__PURE__ */ jsx(
              motion.li,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: i * 0.05 },
                children: /* @__PURE__ */ jsx(
                  Link,
                  {
                    to: l.to,
                    onClick: () => setOpen(false),
                    className: "font-display text-3xl tracking-widest text-gold",
                    children: l.label.toUpperCase()
                  }
                )
              },
              l.to
            )),
            /* @__PURE__ */ jsx(
              motion.li,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: links.length * 0.05 },
                children: /* @__PURE__ */ jsx(
                  Link,
                  {
                    to: "/reserve",
                    onClick: () => setOpen(false),
                    className: "mt-4 inline-flex px-6 py-3 border border-gold text-gold font-body uppercase text-sm tracking-[0.25em]",
                    children: "Reserve a table"
                  }
                )
              }
            )
          ] })
        ]
      }
    ) })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsxs("footer", { className: "bg-[#0a0a0a] border-t border-gold/40 mt-24", children: [
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-8 py-14 grid gap-10 lg:grid-cols-3", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "font-display text-4xl tracking-widest text-gold", children: "EUPHORIA" }),
        /* @__PURE__ */ jsx("p", { className: "font-body text-sm text-muted-foreground-x mt-2 italic", children: "Where the night finds its voice." }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-4 mt-6", children: [
          /* @__PURE__ */ jsx("a", { href: "#", "aria-label": "Instagram", className: "text-[var(--text-primary)] hover:text-gold transition-colors", children: /* @__PURE__ */ jsx(Instagram, { className: "w-5 h-5" }) }),
          /* @__PURE__ */ jsx("a", { href: "#", "aria-label": "Facebook", className: "text-[var(--text-primary)] hover:text-gold transition-colors", children: /* @__PURE__ */ jsx(Facebook, { className: "w-5 h-5" }) }),
          /* @__PURE__ */ jsx("a", { href: "#", "aria-label": "TikTok", className: "text-[var(--text-primary)] hover:text-gold transition-colors", children: /* @__PURE__ */ jsx(Video, { className: "w-5 h-5" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
        /* @__PURE__ */ jsx("h4", { className: "font-display text-xl tracking-wider text-gold mb-2", children: "Explore" }),
        [
          ["/menu", "Menu"],
          ["/bar", "The Bar"],
          ["/events", "Events"],
          ["/gallery", "Gallery"],
          ["/about", "About"],
          ["/reserve", "Reserve"]
        ].map(([to, label]) => /* @__PURE__ */ jsx(
          Link,
          {
            to,
            className: "font-body text-sm uppercase tracking-[0.2em] text-[var(--text-primary)] hover:text-gold transition-colors",
            children: label
          },
          to
        ))
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "font-body text-sm space-y-3 text-[var(--text-primary)]", children: [
        /* @__PURE__ */ jsx("h4", { className: "font-display text-xl tracking-wider text-gold mb-2", children: "Visit" }),
        /* @__PURE__ */ jsxs("p", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsx(MapPin, { className: "w-4 h-4 mt-0.5 text-gold" }),
          " Lomé, Togo"
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsx(Phone, { className: "w-4 h-4 mt-0.5 text-gold" }),
          " +228 90 00 00 00"
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsx(Clock, { className: "w-4 h-4 mt-0.5 text-gold" }),
          /* @__PURE__ */ jsxs("span", { children: [
            "Mon–Thu 17h–01h",
            /* @__PURE__ */ jsx("br", {}),
            "Fri–Sat 17h–03h",
            /* @__PURE__ */ jsx("br", {}),
            "Sun 18h–00h"
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "border-t border-subtle py-5 text-center font-body text-xs text-muted-foreground-x", children: "© 2025 Euphoria Pub Food & Bar. All rights reserved." })
  ] });
}
function PageTransition({ children }) {
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -20 },
      transition: { duration: 0.4, ease: "easeOut" },
      children
    }
  );
}
const Toaster = ({ ...props }) => {
  return /* @__PURE__ */ jsx(
    Toaster$1,
    {
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    }
  );
};
function SiteLayout() {
  const location = useLocation();
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen flex flex-col bg-[#0a0a0a]", children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx("main", { className: "flex-1", children: /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsx(PageTransition, { children: /* @__PURE__ */ jsx(Outlet, {}) }, location.pathname) }) }),
    /* @__PURE__ */ jsx(Footer, {}),
    /* @__PURE__ */ jsx(CartFab, {}),
    /* @__PURE__ */ jsx(CartDrawer, {}),
    /* @__PURE__ */ jsx(Toaster, { theme: "dark", position: "bottom-center" })
  ] });
}
export {
  SiteLayout as component
};
