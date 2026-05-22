import type { ReactNode } from "react";

interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M2 4h16M2 8h10M2 12h13M2 16h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14 13l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17 16H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Workflow automation",
    description: "Eliminate repetitive tasks and save time with customizable automation.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="15" cy="6" r="2.5" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    title: "Real-time collaboration",
    description: "Keep your team in sync with shared boards and instant updates.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <ellipse cx="10" cy="5" rx="7" ry="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3 5v4c0 1.1 3.13 2 7 2s7-.9 7-2V5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3 9v4c0 1.1 3.13 2 7 2s7-.9 7-2V9" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    title: "Data-driven insights",
    description: "Track progress and measure success with advanced analytics.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <rect x="2" y="2" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <rect x="11" y="2" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <rect x="2" y="11" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <rect x="11" y="11" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    title: "Easy integration",
    description: "Connect seamlessly with tools like Slack, Google Workspace, and Trello.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-24 bg-secondary/20">
      <div className="mx-auto max-w-[1280px] px-6 flex flex-col gap-16 items-center">
        {/* Header */}
        <div className="flex flex-col gap-5 items-center text-center max-w-[576px]">
          <p className="text-base font-semibold text-muted-foreground">Features</p>
          <h2 className="text-4xl font-bold text-foreground leading-[1.2]">Why choose Flowly?</h2>
          <p className="text-base text-muted-foreground leading-6">
            Transform the way your team works with these powerful features:
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col gap-5 items-center text-center">
              <div className="flex items-center justify-center w-10 h-10 rounded-md bg-white border border-border shadow-sm shrink-0">
                {feature.icon}
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-base font-semibold text-card-foreground">{feature.title}</h3>
                <p className="text-base text-muted-foreground leading-6">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
