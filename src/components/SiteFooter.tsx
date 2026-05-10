import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border/60 bg-secondary/40">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 grid md:grid-cols-3 gap-10">
        <div>
          <div className="font-serif text-2xl font-semibold text-primary">Super Max Bakers</div>
          <p className="mt-3 text-sm text-muted-foreground max-w-xs leading-relaxed">
            Hearth-baked cakes, breads and bites — fresh from our Rourkela kitchen since 1998.
          </p>
        </div>
        <div className="text-sm">
          <h4 className="font-serif text-lg text-primary mb-3">Visit</h4>
          <p className="text-muted-foreground leading-relaxed">
            Madhusudan Marg, Udit Nagar
            <br />
            Rourkela, Odisha 769001
          </p>
        </div>
        <div className="text-sm">
          <h4 className="font-serif text-lg text-primary mb-3">Hours</h4>
          <p className="text-muted-foreground leading-relaxed">
            Open daily · 10:00 am – 10:00 pm
            <br />
            <span className="text-accent-foreground/70">Closed · opens 10 am</span>
          </p>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Super Max Bakers. Baked with care.</p>
          <div className="flex gap-6">
            <Link to="/menu" className="hover:text-primary">Menu</Link>
            <Link to="/about" className="hover:text-primary">Story</Link>
            <Link to="/contact" className="hover:text-primary">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
