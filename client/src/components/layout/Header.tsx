import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Header() {
  const [location] = useLocation();

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <a className="text-2xl font-bold text-gradient-gold">
            Comet
          </a>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/residential">
            <a className={cn(
              "text-sm hover:text-[hsl(var(--brand-navy))] transition-colors",
              location === "/residential" && "text-[hsl(var(--brand-navy))] font-medium"
            )}>
              Residential
            </a>
          </Link>
          <Link href="/sports">
            <a className={cn(
              "text-sm hover:text-[hsl(var(--brand-navy))] transition-colors",
              location === "/sports" && "text-[hsl(var(--brand-navy))] font-medium"
            )}>
              Sports
            </a>
          </Link>
          <Link href="/commercial">
            <a className={cn(
              "text-sm hover:text-[hsl(var(--brand-navy))] transition-colors",
              location === "/commercial" && "text-[hsl(var(--brand-navy))] font-medium"
            )}>
              Commercial
            </a>
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/#contact">
            <Button variant="ghost" size="sm" className="text-[hsl(var(--brand-navy))]">Contact</Button>
          </Link>
          <Link href="/#demo">
            <Button size="sm" className="bg-[hsl(var(--brand-magenta))] hover:bg-[hsl(var(--brand-magenta)_/_90%)] text-white">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}