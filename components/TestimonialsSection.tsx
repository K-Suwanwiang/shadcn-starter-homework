import Image from "next/image";
import { Fragment } from "react";

const testimonials = [
  {
    quote:
      '"Shadcn UI Kit for Figma has completely transformed our design process. It\'s incredibly intuitive and saves us so much time. The components are beautifully crafted and customizable."',
    name: "Lando Norris",
    role: "Founder at Acme Inc.",
  },
  {
    quote:
      '"Shadcn UI Kit for Figma has completely transformed our design process. It\'s incredibly intuitive and saves us so much time. The components are beautifully crafted and customizable."',
    name: "Lando Norris",
    role: "Founder at Acme Inc.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-[1280px] px-6 flex flex-col gap-12">
        {/* Header */}
        <div className="flex flex-col gap-5 max-w-[576px]">
          <p className="text-base font-semibold text-muted-foreground">Testimonial section</p>
          <h2 className="text-4xl font-bold text-foreground leading-[1.2]">
            Social proof section title that focuses on trust and results
          </h2>
        </div>

        {/* Testimonials */}
        <div className="flex flex-col md:flex-row gap-12 items-start">
          {testimonials.map((t, i) => (
            <Fragment key={i}>
              <div className="flex-1 flex flex-col gap-8">
                <blockquote className="text-lg font-medium text-foreground leading-7">
                  {t.quote}
                </blockquote>
                <div className="flex items-center gap-5">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0">
                    <Image
                      src="/assets/avatar.png"
                      alt={t.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-base font-semibold text-foreground">{t.name}</p>
                    <p className="text-base text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </div>
              {i < testimonials.length - 1 && (
                <div className="hidden md:block w-px self-stretch bg-border" />
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
