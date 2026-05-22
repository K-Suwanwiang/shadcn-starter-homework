"use client";

import Link from "next/link";
import { useState } from "react";

const faqs = [
  {
    question: "What is shadcn/ui?",
    answer:
      "Shadcn/ui is a popular, open-source UI component library for React that focuses on flexibility and customization. It provides a set of accessible, customizable components that you can use to build modern web applications.",
  },
  {
    question: "What is shadcn/ui kit for Figma?",
    answer:
      "The shadcn/ui kit for Figma is a comprehensive design system that mirrors the shadcn/ui component library, allowing designers to create pixel-perfect designs that developers can implement efficiently.",
  },
  {
    question: "I'm not familiar with shadcn/ui. Can I still use this kit?",
    answer:
      "Absolutely! The kit is designed to be intuitive for designers of all experience levels. You don't need to know shadcn/ui to use the Figma kit — it works great as a standalone design system.",
  },
  {
    question: "Can I create multi-brand design systems with this UI kit?",
    answer:
      "Yes! The kit leverages Figma variables and styles, making it straightforward to swap color themes and create multiple brand variations from a single component library.",
  },
  {
    question: "How will this kit save me time?",
    answer:
      "The kit includes hundreds of pre-built, production-ready components. Instead of designing from scratch, you simply assemble your screens from existing pieces — cutting design time by up to 80%.",
  },
];

const ChevronIcon = ({ open }: { open: boolean }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
    className={`shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
  >
    <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function AccordionItem({ question, answer, defaultOpen = false }: { question: string; answer: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-border last:border-b-0">
      <button
        className="w-full flex items-center justify-between gap-2 py-4 text-left"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="text-sm font-medium text-foreground">{question}</span>
        <ChevronIcon open={open} />
      </button>
      {open && (
        <div className="pb-4">
          <p className="text-sm text-muted-foreground leading-5">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FaqSection() {
  return (
    <section className="py-24 bg-white" id="faq">
      <div className="mx-auto max-w-[672px] px-6 flex flex-col gap-12">
        {/* Header */}
        <div className="flex flex-col gap-5 items-center text-center">
          <p className="text-base font-semibold text-muted-foreground">FAQ section</p>
          <h2 className="text-4xl font-bold text-foreground leading-[1.2]">Frequently asked questions</h2>
          <p className="text-base text-muted-foreground leading-6">
            We've compiled the most important information to help you get the most out of your experience. Can't find what you're looking for?{" "}
            <Link href="#" className="text-foreground underline underline-offset-2">
              Contact us
            </Link>
            .
          </p>
        </div>

        {/* Accordion */}
        <div>
          {faqs.map((faq, i) => (
            <AccordionItem key={faq.question} question={faq.question} answer={faq.answer} defaultOpen={i === 0} />
          ))}
        </div>

        {/* CTA card */}
        <div className="flex flex-col gap-6 items-center p-6 rounded-xl bg-muted/60 text-center">
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-bold text-foreground">Still have questions?</h3>
            <p className="text-base text-muted-foreground">Have questions or need assistance? Our team is here to help!</p>
          </div>
          <Link
            href="#"
            className="flex items-center justify-center px-4 py-2 h-9 text-sm font-medium bg-primary text-primary-foreground rounded-lg shadow-sm hover:bg-primary/90 transition-colors"
          >
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}
