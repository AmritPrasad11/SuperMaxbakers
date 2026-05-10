import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import heroImage from "@/assets/hero-bakery.jpg";
import cakeImg from "@/assets/menu-cake.jpg";
import rollImg from "@/assets/menu-roll.jpg";
import pizzaImg from "@/assets/menu-pizza.jpg";
import pastryImg from "@/assets/menu-pastry.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Super Max Bakers — Fresh cakes & bakes in Rourkela" },
      {
        name: "description",
        content:
          "Hearth-baked cakes, breads, pizzas and snacks from Super Max Bakers in Udit Nagar, Rourkela. Rated 4.3★ by 3,130+ guests.",
      },
      { property: "og:title", content: "Super Max Bakers — Rourkela" },
      {
        property: "og:description",
        content: "Fresh cakes, pastries and savouries baked daily in Udit Nagar, Rourkela.",
      },
    ],
  }),
  component: HomePage,
});

const highlights = [
  { name: "Black Forest Cake", img: cakeImg, tag: "Signature", desc: "Cherries, dark chocolate, fresh cream — 350 g of pure indulgence." },
  { name: "Chicken Roll", img: rollImg, tag: "Most loved", desc: "Spiced chicken wrapped in our flaky house paratha." },
  { name: "Veg Overloaded Pizza", img: pizzaImg, tag: "Stone-fired", desc: "A garden of fresh veg on a 24-hour fermented base." },
  { name: "Pastries & Brownies", img: pastryImg, tag: "Daily fresh", desc: "Chocolate fudge, pineapple, butterscotch — pick your moment." },
];

function HomePage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 pt-16 lg:pt-24 pb-20 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-7">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <span className="h-px w-8 bg-accent" /> Rourkela · since 1998
            </span>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.05] text-primary text-balance">
              Baked fresh for <em className="text-accent not-italic">every</em> sweet moment.
            </h1>
            <p className="text-lg text-muted-foreground max-w-[52ch] leading-relaxed">
              From signature black forest cakes to spiced chicken rolls and stone-fired pizzas —
              Super Max Bakers has been Udit Nagar's kitchen of celebrations for over two decades.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/menu"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-full font-medium hover:bg-primary/90 transition-colors"
              >
                Order online
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-medium text-primary border border-border hover:bg-secondary transition-colors"
              >
                Get directions
              </Link>
            </div>
            <div className="flex items-center gap-6 pt-4 text-sm">
              <div>
                <div className="flex items-center gap-1 text-accent text-lg">
                  ★★★★<span className="text-accent/40">★</span>
                </div>
                <p className="text-muted-foreground mt-1">
                  <span className="font-semibold text-primary">4.3</span> from 3,130 reviews
                </p>
              </div>
              <div className="h-10 w-px bg-border" />
              <p className="text-muted-foreground">
                <span className="font-semibold text-primary">₹200–400</span>
                <br />per person
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-3 bg-accent/15 rounded-[2rem] -rotate-2" aria-hidden />
            <img
              src={heroImage}
              alt="A wooden display of fresh chocolate cake, breads and pastries from Super Max Bakers"
              width={1280}
              height={960}
              className="relative rounded-[1.75rem] aspect-[4/3] object-cover w-full shadow-2xl shadow-primary/10"
            />
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 py-20">
        <div className="flex items-end justify-between mb-12 gap-6 flex-wrap">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-accent">Menu highlights</span>
            <h2 className="font-serif text-4xl md:text-5xl text-primary mt-3 text-balance">
              The crowd favourites
            </h2>
          </div>
          <Link to="/menu" className="text-sm font-medium text-primary hover:text-accent">
            View full menu →
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((h) => (
            <article
              key={h.name}
              className="group bg-card rounded-2xl overflow-hidden border border-border/70 hover:shadow-xl hover:shadow-primary/5 transition-all"
            >
              <div className="aspect-square overflow-hidden bg-muted">
                <img
                  src={h.img}
                  alt={h.name}
                  width={800}
                  height={800}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-5">
                <span className="text-[10px] uppercase tracking-[0.18em] text-accent">{h.tag}</span>
                <h3 className="font-serif text-xl text-primary mt-1.5">{h.name}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{h.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* QUOTE */}
      <section className="bg-secondary/50 border-y border-border/60">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 py-20 text-center">
          <span className="text-xs uppercase tracking-[0.2em] text-accent">From our guests</span>
          <blockquote className="font-serif text-3xl md:text-4xl text-primary leading-snug mt-5 text-balance">
            “Ideal for baked products including pizzas, cakes, biryani and snack items —
            <em className="text-accent not-italic"> so yummy, tasty food.</em>”
          </blockquote>
          <p className="text-sm text-muted-foreground mt-6">
            Summarised from 3,130+ Google reviews · 4.3 ★
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 py-24">
        <div className="bg-primary text-primary-foreground rounded-3xl p-10 md:p-16 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl text-balance">
              Cake for tomorrow? We've got you.
            </h2>
            <p className="mt-4 text-primary-foreground/75 max-w-md">
              Pre-order birthday cakes, party platters and bulk orders a day in advance —
              walk in or give us a ring.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 md:justify-end">
            <Link
              to="/menu"
              className="inline-flex items-center bg-accent text-accent-foreground px-7 py-3.5 rounded-full font-medium hover:opacity-90 transition"
            >
              Browse menu
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center border border-primary-foreground/30 px-7 py-3.5 rounded-full font-medium hover:bg-primary-foreground/10 transition"
            >
              Call the bakery
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
