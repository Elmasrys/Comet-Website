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
            <div className="text-2xl font-bold text-gradient-accent cursor-pointer">
              Comet
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/features">
              <div className={cn(
                "text-sm hover:text-[hsl(var(--brand-navy))] transition-colors cursor-pointer",
                location === "/features" && "text-[hsl(var(--brand-navy))] font-medium"
              )}>
                Features
              </div>
            </Link>
            <Link href="/communities">
              <div className={cn(
                "text-sm hover:text-[hsl(var(--brand-navy))] transition-colors cursor-pointer",
                location === "/communities" && "text-[hsl(var(--brand-navy))] font-medium"
              )}>
                Communities
              </div>
            </Link>
            <Link href="/about">
              <div className={cn(
                "text-sm hover:text-[hsl(var(--brand-navy))] transition-colors cursor-pointer",
                location === "/about" && "text-[hsl(var(--brand-navy))] font-medium"
              )}>
                About
              </div>
            </Link>
            <Link href="/contact">
              <div className={cn(
                "text-sm hover:text-[hsl(var(--brand-navy))] transition-colors cursor-pointer",
                location === "/contact" && "text-[hsl(var(--brand-navy))] font-medium"
              )}>
                Contact
              </div>
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