import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { createRootRouteWithContext, useRouter, Link, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, createRouter } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
const appCss = "/assets/styles-CRHz0WeH.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            router.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$c = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Euphoria Pub Food & Bar — Lomé" },
      { name: "description", content: "Upscale urban pub & bar in Lomé. Craft cocktails, elevated street food, unforgettable nights." },
      { name: "theme-color", content: "#0a0a0a" },
      { property: "og:site_name", content: "Euphoria Pub Food & Bar" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" }
    ],
    links: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com"
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Raleway:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap"
      },
      {
        rel: "stylesheet",
        href: appCss
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$c.useRouteContext();
  return /* @__PURE__ */ jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsx(Outlet, {}) });
}
const $$splitComponentImporter$b = () => import("./reception-CqqoPVQc.js");
const Route$b = createFileRoute("/reception")({
  component: lazyRouteComponent($$splitComponentImporter$b, "component"),
  head: () => ({
    meta: [{
      title: "Reception — Euphoria"
    }, {
      name: "robots",
      content: "noindex"
    }]
  })
});
const $$splitComponentImporter$a = () => import("./admin-BbuTTKPM.js");
const Route$a = createFileRoute("/admin")({
  component: lazyRouteComponent($$splitComponentImporter$a, "component"),
  head: () => ({
    meta: [{
      title: "Admin — Euphoria"
    }, {
      name: "robots",
      content: "noindex"
    }]
  })
});
const $$splitComponentImporter$9 = () => import("./_site-BMc2dG0c.js");
const Route$9 = createFileRoute("/_site")({
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./_site.index-DvaJruCf.js");
const Route$8 = createFileRoute("/_site/")({
  component: lazyRouteComponent($$splitComponentImporter$8, "component"),
  head: () => ({
    meta: [{
      title: "Euphoria Pub Food & Bar — Lomé"
    }, {
      name: "description",
      content: "Upscale urban pub & bar in Lomé. Craft cocktails, elevated street food, unforgettable nights."
    }, {
      property: "og:title",
      content: "Euphoria Pub Food & Bar — Lomé"
    }, {
      property: "og:description",
      content: "Where every night tells a story."
    }, {
      property: "og:url",
      content: "/"
    }],
    links: [{
      rel: "canonical",
      href: "/"
    }]
  })
});
const $$splitComponentImporter$7 = () => import("./table._tableNumber-DybE-O_c.js");
const Route$7 = createFileRoute("/table/$tableNumber")({
  component: lazyRouteComponent($$splitComponentImporter$7, "component"),
  head: () => ({
    meta: [{
      title: "Order — Euphoria"
    }, {
      name: "robots",
      content: "noindex"
    }]
  })
});
const $$splitComponentImporter$6 = () => import("./_site.reserve-CjqvqbBH.js");
const Route$6 = createFileRoute("/_site/reserve")({
  component: lazyRouteComponent($$splitComponentImporter$6, "component"),
  head: () => ({
    meta: [{
      title: "Reserve a Table — Euphoria"
    }, {
      name: "description",
      content: "Reserve your table at Euphoria. The evening begins when you arrive."
    }, {
      property: "og:url",
      content: "/reserve"
    }],
    links: [{
      rel: "canonical",
      href: "/reserve"
    }]
  })
});
const $$splitComponentImporter$5 = () => import("./_site.menu-BnG7EYgL.js");
const Route$5 = createFileRoute("/_site/menu")({
  component: lazyRouteComponent($$splitComponentImporter$5, "component"),
  head: () => ({
    meta: [{
      title: "Menu — Euphoria Pub Food & Bar"
    }, {
      name: "description",
      content: "Street-inspired, kitchen-elevated. Burgers, mains, sides and desserts at Euphoria."
    }, {
      property: "og:title",
      content: "Menu — Euphoria"
    }, {
      property: "og:url",
      content: "/menu"
    }],
    links: [{
      rel: "canonical",
      href: "/menu"
    }]
  })
});
const $$splitComponentImporter$4 = () => import("./_site.gallery-CinKLVqc.js");
const Route$4 = createFileRoute("/_site/gallery")({
  component: lazyRouteComponent($$splitComponentImporter$4, "component"),
  head: () => ({
    meta: [{
      title: "Gallery — Euphoria Pub Food & Bar"
    }, {
      name: "description",
      content: "A night worth remembering. Cocktails, food, atmosphere, events."
    }, {
      property: "og:title",
      content: "Gallery — Euphoria"
    }, {
      property: "og:url",
      content: "/gallery"
    }],
    links: [{
      rel: "canonical",
      href: "/gallery"
    }]
  })
});
const $$splitComponentImporter$3 = () => import("./_site.events-BqL1NU5y.js");
const Route$3 = createFileRoute("/_site/events")({
  component: lazyRouteComponent($$splitComponentImporter$3, "component"),
  head: () => ({
    meta: [{
      title: "Events & Nights — Euphoria"
    }, {
      name: "description",
      content: "DJ nights, themed parties, live music. Something happening every night at Euphoria."
    }, {
      property: "og:title",
      content: "Events — Euphoria"
    }, {
      property: "og:url",
      content: "/events"
    }],
    links: [{
      rel: "canonical",
      href: "/events"
    }]
  })
});
const $$splitComponentImporter$2 = () => import("./_site.contact-BIccci8n.js");
const Route$2 = createFileRoute("/_site/contact")({
  component: lazyRouteComponent($$splitComponentImporter$2, "component"),
  head: () => ({
    meta: [{
      title: "Find Us — Euphoria Pub Food & Bar"
    }, {
      name: "description",
      content: "Visit us in Lomé. Hours, phone, address and contact form."
    }, {
      property: "og:url",
      content: "/contact"
    }],
    links: [{
      rel: "canonical",
      href: "/contact"
    }]
  })
});
const $$splitComponentImporter$1 = () => import("./_site.bar-Cukqookt.js");
const Route$1 = createFileRoute("/_site/bar")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component"),
  head: () => ({
    meta: [{
      title: "The Bar — Euphoria Pub Food & Bar"
    }, {
      name: "description",
      content: "Crafted. Shaken. Elevated. Signature cocktails, classics, mocktails and more."
    }, {
      property: "og:title",
      content: "The Bar — Euphoria"
    }, {
      property: "og:url",
      content: "/bar"
    }],
    links: [{
      rel: "canonical",
      href: "/bar"
    }]
  })
});
const $$splitComponentImporter = () => import("./_site.about-EMP1TTJG.js");
const Route = createFileRoute("/_site/about")({
  component: lazyRouteComponent($$splitComponentImporter, "component"),
  head: () => ({
    meta: [{
      title: "Our Story — Euphoria Pub Food & Bar"
    }, {
      name: "description",
      content: "How Euphoria came to be — craft, community, experience in the heart of Lomé."
    }, {
      property: "og:url",
      content: "/about"
    }],
    links: [{
      rel: "canonical",
      href: "/about"
    }]
  })
});
const ReceptionRoute = Route$b.update({
  id: "/reception",
  path: "/reception",
  getParentRoute: () => Route$c
});
const AdminRoute = Route$a.update({
  id: "/admin",
  path: "/admin",
  getParentRoute: () => Route$c
});
const SiteRoute = Route$9.update({
  id: "/_site",
  getParentRoute: () => Route$c
});
const SiteIndexRoute = Route$8.update({
  id: "/",
  path: "/",
  getParentRoute: () => SiteRoute
});
const TableTableNumberRoute = Route$7.update({
  id: "/table/$tableNumber",
  path: "/table/$tableNumber",
  getParentRoute: () => Route$c
});
const SiteReserveRoute = Route$6.update({
  id: "/reserve",
  path: "/reserve",
  getParentRoute: () => SiteRoute
});
const SiteMenuRoute = Route$5.update({
  id: "/menu",
  path: "/menu",
  getParentRoute: () => SiteRoute
});
const SiteGalleryRoute = Route$4.update({
  id: "/gallery",
  path: "/gallery",
  getParentRoute: () => SiteRoute
});
const SiteEventsRoute = Route$3.update({
  id: "/events",
  path: "/events",
  getParentRoute: () => SiteRoute
});
const SiteContactRoute = Route$2.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => SiteRoute
});
const SiteBarRoute = Route$1.update({
  id: "/bar",
  path: "/bar",
  getParentRoute: () => SiteRoute
});
const SiteAboutRoute = Route.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => SiteRoute
});
const SiteRouteChildren = {
  SiteAboutRoute,
  SiteBarRoute,
  SiteContactRoute,
  SiteEventsRoute,
  SiteGalleryRoute,
  SiteMenuRoute,
  SiteReserveRoute,
  SiteIndexRoute
};
const SiteRouteWithChildren = SiteRoute._addFileChildren(SiteRouteChildren);
const rootRouteChildren = {
  SiteRoute: SiteRouteWithChildren,
  AdminRoute,
  ReceptionRoute,
  TableTableNumberRoute
};
const routeTree = Route$c._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router;
};
export {
  getRouter
};
