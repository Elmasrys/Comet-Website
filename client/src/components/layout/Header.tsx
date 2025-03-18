import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Header() {
  const [location] = useLocation();

  return (
    <header className="w-full bg-white border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/">
            <a className="text-2xl font-bold text-gradient-accent">
              Comet
            </a>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/features">
              <a className={cn(
                "text-sm hover:text-[hsl(var(--brand-navy))] transition-colors",
                location === "/features" && "text-[hsl(var(--brand-navy))] font-medium"
              )}>
                Features
              </a>
            </Link>
            <Link href="/communities">
              <a className={cn(
                "text-sm hover:text-[hsl(var(--brand-navy))] transition-colors",
                location === "/communities" && "text-[hsl(var(--brand-navy))] font-medium"
              )}>
                Communities
              </a>
            </Link>
            <Link href="/about">
              <a className={cn(
                "text-sm hover:text-[hsl(var(--brand-navy))] transition-colors",
                location === "/about" && "text-[hsl(var(--brand-navy))] font-medium"
              )}>
                About
              </a>
            </Link>
            <Link href="/contact">
              <a className={cn(
                "text-sm hover:text-[hsl(var(--brand-navy))] transition-colors",
                location === "/contact" && "text-[hsl(var(--brand-navy))] font-medium"
              )}>
                Contact
              </a>
            </Link>
          </nav>
        </div>

        <div className="flex items-center">
          <Link href="/#demo">
            <Button size="sm" className="bg-[hsl(var(--brand-gold))] hover:bg-[hsl(var(--brand-gold)_/_90%)] text-[hsl(var(--brand-navy))]">
              Get a Demo
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}