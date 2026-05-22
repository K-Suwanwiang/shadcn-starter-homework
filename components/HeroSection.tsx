import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      {/* Background grid pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative mx-auto max-w-[1280px] px-6 flex flex-col gap-16">
        {/* Text grid */}
        <div className="flex flex-col md:flex-row gap-16 items-start">
          <h1 className="flex-1 text-5xl font-bold leading-[1.15] text-foreground">
            Work smarter, not harder with Flowly
          </h1>
          <div className="flex-1 flex flex-col gap-8">
            <p className="text-lg text-muted-foreground leading-7">
              Automate workflows, streamline tasks, and collaborate seamlessly – all in one platform.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="#"
                className="flex items-center justify-center px-4 py-2 h-9 text-sm font-medium bg-primary text-primary-foreground rounded-lg shadow-sm hover:bg-primary/90 transition-colors"
              >
                Start free trial
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 px-4 py-2 h-9 text-sm font-medium text-foreground rounded-lg hover:bg-muted transition-colors"
              >
                Explore
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Hero image */}
        <div className="w-full rounded-lg overflow-hidden aspect-[16/9] relative shadow-lg">
          <Image
            src="/assets/hero.png"
            alt="Flowly dashboard preview"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
