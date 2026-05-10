import { Link } from "@tanstack/react-router";

const nav = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "Our Story" },
  { to: "/contact", label: "Visit" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur-md bg-background/80 border-b border-border/60">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-baseline gap-1.5">
          <span className="font-serif text-2xl font-semibold text-primary tracking-tight">
            Super Max
          </span>
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Bakers</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: true }}
              activeProps={{ className: "text-primary" }}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/menu"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
        >
          Order Online
        </Link>
      </div>
    </header>
  );
}
