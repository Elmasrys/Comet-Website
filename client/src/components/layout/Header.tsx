import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Header() {
  const [location] = useLocation();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
            <div
              onClick={() => scrollToSection('solutions')}
              className={cn(
                "text-sm hover:text-[hsl(var(--brand-navy))] transition-colors cursor-pointer",
                location === "/#solutions" && "text-[hsl(var(--brand-navy))] font-medium"
              )}>
              Solutions
            </div>
            <Link href="/about">
              <div className={cn(
                "text-sm hover:text-[hsl(var(--brand-navy))] transition-colors cursor-pointer",
                location === "/about" && "text-[hsl(var(--brand-navy))] font-medium"
              )}>
                About
              </div>
            </Link>
            <Link href="/partners">
              <div className={cn(
                "text-sm hover:text-[hsl(var(--brand-navy))] transition-colors cursor-pointer",
                location === "/partners" && "text-[hsl(var(--brand-navy))] font-medium"
              )}>
                Partners
              </div>
            </Link>
          </nav>
        </div>

        <div className="flex items-center">
          <div
            onClick={() => scrollToSection('contact')}
            className="cursor-pointer"
          >
            <Button size="sm" className="bg-[hsl(var(--brand-gold))] hover:bg-[hsl(var(--brand-gold)_/_90%)] text-[hsl(var(--brand-navy))]">
              Get a Demo
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}