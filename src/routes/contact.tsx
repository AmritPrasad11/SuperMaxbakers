import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Visit Us — Super Max Bakers, Udit Nagar, Rourkela" },
      {
        name: "description",
        content:
          "Visit Super Max Bakers at Madhusudan Marg, Udit Nagar, Rourkela. Open daily 10 am – 10 pm.",
      },
      { property: "og:title", content: "Visit — Super Max Bakers" },
      { property: "og:description", content: "Madhusudan Marg, Udit Nagar, Rourkela. Open 10–10." },
    ],
  }),
  component: ContactPage,
});

const hours = [
  ["Mon", "10:00 am – 10:00 pm"],
  ["Tue", "10:00 am – 10:00 pm"],
  ["Wed", "10:00 am – 10:00 pm"],
  ["Thu", "10:00 am – 10:00 pm"],
  ["Fri", "10:00 am – 10:00 pm"],
  ["Sat", "10:00 am – 10:30 pm"],
  ["Sun", "10:00 am – 10:30 pm"],
];

function ContactPage() {
  return (
    <SiteLayout>
      <section className="max-w-6xl mx-auto px-6 lg:px-8 pt-16 lg:pt-24 pb-12">
        <span className="text-xs uppercase tracking-[0.2em] text-accent">Visit us</span>
        <h1 className="font-serif text-5xl md:text-6xl text-primary mt-3 max-w-3xl text-balance">
          Stop by, smell the sourdough.
        </h1>
      </section>

      <section className="max-w-6xl mx-auto px-6 lg:px-8 pb-24 grid lg:grid-cols-2 gap-10 lg:gap-16">
        <div className="space-y-10">
          <div>
            <h2 className="font-serif text-2xl text-primary">Address</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Super Max Bakers
              <br />
              Madhusudan Marg, Udit Nagar
              <br />
              Rourkela, Odisha 769001
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Super+Max+Bakers+Udit+Nagar+Rourkela"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center mt-4 text-sm font-medium text-accent hover:underline"
            >
              Open in Google Maps →
            </a>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-primary">Hours</h2>
            <ul className="mt-3 divide-y divide-border/70">
              {hours.map(([d, h]) => (
                <li key={d} className="py-2.5 flex justify-between text-sm">
                  <span className="font-medium text-primary">{d}</span>
                  <span className="text-muted-foreground">{h}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-muted-foreground">
              Peak hour: ~7 pm. Most guests stay around 15 minutes.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-primary">Orders & enquiries</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              For custom cakes and bulk orders, please call us a day in advance.
            </p>
            <a
              href="tel:+910000000000"
              className="inline-flex items-center mt-4 bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-medium hover:bg-primary/90 transition"
            >
              Call the bakery
            </a>
          </div>
        </div>

        <div className="aspect-square lg:aspect-auto rounded-2xl overflow-hidden border border-border/70 bg-muted min-h-[420px]">
          <iframe
            title="Super Max Bakers location map"
            src="https://www.google.com/maps?q=Super+Max+Bakers+Udit+Nagar+Rourkela&output=embed"
            className="w-full h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </SiteLayout>
  );
}
