import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-border py-24">
      <div className="mx-auto max-w-[1280px] px-6 flex flex-col gap-12">
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand + nav */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 sm:gap-12">
            <Link href="/">
              <Image src="/assets/logo.png" alt="Flowly" width={40} height={40} />
            </Link>
            <nav className="flex flex-wrap gap-6 sm:gap-8 text-base text-muted-foreground">
              <Link href="#" className="hover:text-foreground transition-colors">Home</Link>
              <Link href="#" className="hover:text-foreground transition-colors">About Us</Link>
              <Link href="#" className="hover:text-foreground transition-colors">Contact</Link>
              <Link href="#" className="hover:text-foreground transition-colors">Support</Link>
              <Link href="#faq" className="hover:text-foreground transition-colors">FAQ</Link>
            </nav>
          </div>

          {/* Email subscribe */}
          <div className="flex items-center gap-2 w-full sm:w-auto sm:max-w-[350px]">
            <input
              type="email"
              placeholder="Your email"
              aria-label="Email address"
              className="flex-1 h-9 px-3 text-base text-muted-foreground bg-white border border-border rounded-md outline-none focus:ring-2 focus:ring-foreground/20 transition min-w-0"
            />
            <button className="shrink-0 flex items-center justify-center h-9 px-4 text-sm font-medium bg-primary text-primary-foreground rounded-lg shadow-sm hover:bg-primary/90 transition-colors">
              Subscribe
            </button>
          </div>
        </div>

        {/* Separator */}
        <hr className="border-border" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-base text-muted-foreground">
          <p>Copyright 2048 © shadcndesign.com</p>
          <nav className="flex flex-wrap gap-6 sm:gap-8">
            <Link href="#" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Cookies Settings</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
