import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import cakeImg from "@/assets/menu-cake.jpg";
import rollImg from "@/assets/menu-roll.jpg";
import pizzaImg from "@/assets/menu-pizza.jpg";
import pastryImg from "@/assets/menu-pastry.jpg";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Super Max Bakers, Rourkela" },
      {
        name: "description",
        content:
          "Cakes, pastries, pizzas, burgers, rolls and momos — explore the full Super Max Bakers menu. ₹200–400 per person.",
      },
      { property: "og:title", content: "Menu — Super Max Bakers" },
      { property: "og:description", content: "Cakes, pastries, pizzas and snacks baked fresh daily." },
    ],
  }),
  component: MenuPage,
});

type Item = { name: string; price: string; desc?: string; tag?: string };
type Section = { title: string; img: string; items: Item[] };

const sections: Section[] = [
  {
    title: "Cakes & Pastries",
    img: cakeImg,
    items: [
      { name: "Black Forest Cake (350 g)", price: "₹420", desc: "Cherries, dark chocolate sponge, fresh cream.", tag: "Popular" },
      { name: "Chocolate Fudge Brownie", price: "₹80", desc: "Dense, gooey, baked in-house every morning." },
      { name: "Chocolate Pastry", price: "₹65" },
      { name: "Pineapple Pastry", price: "₹65" },
      { name: "Cheesecake Slice", price: "₹140", desc: "Baked New York style on a buttery biscuit base." },
      { name: "Birthday Cake (custom)", price: "from ₹550", desc: "Pre-order a day in advance." },
    ],
  },
  {
    title: "Rolls & Wraps",
    img: rollImg,
    items: [
      { name: "Chicken Roll", price: "₹120", desc: "Spiced chicken in flaky paratha.", tag: "Popular" },
      { name: "Chowmein Roll", price: "₹90" },
      { name: "Paneer Tikka Roll", price: "₹110" },
      { name: "Egg Roll", price: "₹70" },
    ],
  },
  {
    title: "Pizzas & Burgers",
    img: pizzaImg,
    items: [
      { name: "Veg Overloaded Pizza", price: "₹220", desc: "A garden of fresh veg, bubbling cheese.", tag: "Popular" },
      { name: "Cake Pizza", price: "₹180", desc: "Our sweet-savoury house special.", tag: "Signature" },
      { name: "Chicken Burger", price: "₹140" },
      { name: "Veg Burger & Fries", price: "₹160" },
    ],
  },
  {
    title: "Snacks & Bites",
    img: pastryImg,
    items: [
      { name: "Pan-fried Chicken Momos", price: "₹130", desc: "Crispy bottom, juicy filling." },
      { name: "Vada Pav", price: "₹40" },
      { name: "Sandwich (Veg / Chicken)", price: "₹70 – ₹110" },
      { name: "Chips Plate", price: "₹50" },
    ],
  },
];

function MenuPage() {
  return (
    <SiteLayout>
      <section className="max-w-6xl mx-auto px-6 lg:px-8 pt-16 lg:pt-24 pb-12">
        <span className="text-xs uppercase tracking-[0.2em] text-accent">The menu</span>
        <h1 className="font-serif text-5xl md:text-6xl text-primary mt-3 max-w-3xl text-balance">
          Everything we bake, fry and frost.
        </h1>
        <p className="mt-5 text-muted-foreground max-w-2xl text-lg">
          A peek at our regulars — daily specials and custom cakes available in-store.
          Average spend ₹200–400 per person.
        </p>
      </section>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 pb-24 space-y-20">
        {sections.map((sec) => (
          <section key={sec.title} className="grid lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16">
            <div className="lg:sticky lg:top-24 self-start">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-muted">
                <img
                  src={sec.img}
                  alt={sec.title}
                  width={800}
                  height={1000}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="font-serif text-3xl text-primary mt-5">{sec.title}</h2>
            </div>
            <ul className="divide-y divide-border/70">
              {sec.items.map((it) => (
                <li key={it.name} className="py-5 flex gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <h3 className="font-serif text-xl text-primary">{it.name}</h3>
                      {it.tag && (
                        <span className="text-[10px] uppercase tracking-[0.18em] text-accent border border-accent/40 rounded-full px-2 py-0.5">
                          {it.tag}
                        </span>
                      )}
                    </div>
                    {it.desc && (
                      <p className="text-sm text-muted-foreground mt-1.5 max-w-md leading-relaxed">
                        {it.desc}
                      </p>
                    )}
                  </div>
                  <div className="font-serif text-lg text-primary whitespace-nowrap">{it.price}</div>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </SiteLayout>
  );
}
