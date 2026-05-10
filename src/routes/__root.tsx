import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Super Max Bakers — Rourkela" },
      { name: "description", content: "Hearth-baked cakes, breads and bites in Udit Nagar, Rourkela. 4.3★ from 3,130+ guests." },
      { name: "author", content: "Super Max Bakers" },
      { property: "og:title", content: "Super Max Bakers — Rourkela" },
      { property: "og:description", content: "Hearth-baked cakes, breads and bites in Udit Nagar, Rourkela. 4.3★ from 3,130+ guests." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Super Max Bakers — Rourkela" },
      { name: "twitter:description", content: "Hearth-baked cakes, breads and bites in Udit Nagar, Rourkela. 4.3★ from 3,130+ guests." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/944fb5ce-f4cb-4b53-8aa5-d830a6b6cccb/id-preview-249171c4--a0e93ffa-451a-4a71-afbe-84922616d75b.lovable.app-1777404042398.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/944fb5ce-f4cb-4b53-8aa5-d830a6b6cccb/id-preview-249171c4--a0e93ffa-451a-4a71-afbe-84922616d75b.lovable.app-1777404042398.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
