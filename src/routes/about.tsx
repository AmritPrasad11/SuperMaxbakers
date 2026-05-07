import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import storyImg from "@/assets/story-baker.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story — Super Max Bakers, Rourkela" },
      {
        name: "description",
        content:
          "Family-run since 1998, Super Max Bakers brings hearth-baked cakes and breads to the heart of Udit Nagar, Rourkela.",
      },
      { property: "og:title", content: "Our Story — Super Max Bakers" },
      { property: "og:description", content: "Two decades of baking joy in Udit Nagar, Rourkela." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <section className="max-w-6xl mx-auto px-6 lg:px-8 pt-16 lg:pt-24 pb-20 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <span className="text-xs uppercase tracking-[0.2em] text-accent">Our story</span>
          <h1 className="font-serif text-5xl md:text-6xl text-primary mt-3 leading-[1.05] text-balance">
            A family kitchen, two decades strong.
          </h1>
          <div className="mt-8 space-y-5 text-muted-foreground text-lg leading-relaxed">
            <p>
              Super Max Bakers opened its doors on Madhusudan Marg in 1998 with one oven, three
              recipes and a stubborn belief that cake makes everything better.
            </p>
            <p>
              Today we bake hundreds of cakes a week, hand-fry our momos and pull stone-fired
              pizzas out of the same oven that started it all — but the spirit hasn't changed.
              Real ingredients, slow proofs, no shortcuts.
            </p>
            <p>
              We're proudly Rourkela's, and we're glad you stopped by.
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-3 bg-accent/15 rounded-[2rem] rotate-2" aria-hidden />
          <img
            src={storyImg}
            alt="Baker kneading dough on a floured wooden surface"
            width={1024}
            height={1024}
            loading="lazy"
            className="relative rounded-[1.75rem] aspect-square object-cover w-full shadow-2xl shadow-primary/10"
          />
        </div>
      </section>

      <section className="bg-secondary/50 border-y border-border/60">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20 grid sm:grid-cols-3 gap-10 text-center">
          {[
            { k: "27+", v: "years baking in Rourkela" },
            { k: "3,130", v: "reviews · 4.3 ★ on Google" },
            { k: "120+", v: "items on the daily menu" },
          ].map((s) => (
            <div key={s.v}>
              <div className="font-serif text-5xl text-primary">{s.k}</div>
              <p className="mt-2 text-sm text-muted-foreground uppercase tracking-[0.15em]">{s.v}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
