"use client";

import { useState } from "react";
import Link from "next/link";

const CheckIcon = () => (
  <svg className="shrink-0" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M4 10l4 4 8-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const plans = [
  {
    name: "Starter",
    desc: "For individuals or small teams getting started.",
    monthly: "Free",
    annually: "Free",
    period: false,
    cta: "Get started",
    ctaStyle: "primary" as const,
    features: ["Basic task management", "1 automation per workflow", "5GB storage"],
    featuresLabel: "What's included:",
    dark: false,
  },
  {
    name: "Pro",
    desc: "For growing teams ready to scale their business.",
    monthly: "$29",
    annually: "$23",
    period: true,
    cta: "Purchase plan",
    ctaStyle: "primary" as const,
    features: ["Unlimited boards", "Advanced automation", "50GB storage", "Integrations"],
    featuresLabel: "Everything in Starter, plus:",
    dark: false,
  },
  {
    name: "Enterprise",
    desc: "For large organizations with custom needs.",
    monthly: "$129",
    annually: "$99",
    period: true,
    cta: "Purchase plan",
    ctaStyle: "secondary" as const,
    features: ["Dedicated support", "Custom workflows", "150GB storage", "Advanced security"],
    featuresLabel: "Everything in Pro, plus:",
    dark: true,
  },
];

export default function PricingSection() {
  const [billing, setBilling] = useState<"monthly" | "annually">("monthly");

  return (
    <section className="relative py-24 overflow-hidden bg-secondary/20">
      {/* Pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative mx-auto max-w-[1280px] px-6 flex flex-col gap-12 items-center">
        {/* Header */}
        <div className="flex flex-col gap-5 items-center text-center max-w-[576px]">
          <p className="text-base font-semibold text-muted-foreground">Pricing</p>
          <h2 className="text-4xl font-bold text-foreground leading-[1.2]">Simple, transparent pricing</h2>
          <p className="text-base text-muted-foreground leading-6">Choose a plan that fits your team's needs.</p>
        </div>

        {/* Toggle */}
        <div className="flex items-center bg-muted rounded-lg p-[2px] h-9 w-40" role="group" aria-label="Billing period">
          {(["monthly", "annually"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setBilling(tab)}
              className={`flex-1 h-[29px] text-sm font-medium rounded-full transition-all ${
                billing === tab
                  ? "bg-white text-foreground shadow-sm"
                  : "text-foreground hover:text-foreground/80"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-[1024px]">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col gap-8 p-8 rounded-xl border ${
                plan.dark
                  ? "bg-foreground border-foreground text-primary-foreground"
                  : "bg-white border-border"
              }`}
            >
              {/* Plan info */}
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-3">
                  <h3 className={`text-lg font-semibold ${plan.dark ? "text-primary-foreground" : "text-foreground"}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm ${plan.dark ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                    {plan.desc}
                  </p>
                </div>

                {/* Price */}
                <div className="flex items-end gap-0.5">
                  <span className={`text-4xl font-semibold leading-[1.1] ${plan.dark ? "text-primary-foreground" : "text-foreground"}`}>
                    {billing === "monthly" ? plan.monthly : plan.annually}
                  </span>
                  {plan.period && (
                    <span className={`text-base mb-0.5 ${plan.dark ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                      /month
                    </span>
                  )}
                </div>

                {/* CTA */}
                <Link
                  href="#"
                  className={`flex items-center justify-center h-9 px-4 text-sm font-medium rounded-lg shadow-sm transition-colors w-full ${
                    plan.ctaStyle === "secondary"
                      ? "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                      : "bg-primary text-primary-foreground hover:bg-primary/90"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>

              {/* Features */}
              <div className="flex flex-col gap-4">
                <p className={`text-sm font-medium ${plan.dark ? "text-primary-foreground" : "text-foreground"}`}>
                  {plan.featuresLabel}
                </p>
                <ul className="flex flex-col gap-4">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-3">
                      <span className={plan.dark ? "text-primary-foreground" : "text-foreground"}>
                        <CheckIcon />
                      </span>
                      <span className={`text-sm ${plan.dark ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
