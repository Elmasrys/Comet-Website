import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Header() {
  const [location] = useLocation();

  return (
    <>
      {/* Enterprise Banner */}
      <div className="w-full bg-[hsl(var(--brand-navy)_/_5%)] py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-2 text-sm">
            <span>Boost member value and revenue using new Advanced CRM Package.</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="w-full bg-white border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/">
              <a className="text-2xl font-bold text-gradient-accent">
                Comet
              </a>
            </Link>

            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/products">
                <a className={cn(
                  "text-sm hover:text-[hsl(var(--brand-navy))] transition-colors",
                  location === "/products" && "text-[hsl(var(--brand-navy))] font-medium"
                )}>
                  Products
                </a>
              </Link>
              <Link href="/solutions">
                <a className={cn(
                  "text-sm hover:text-[hsl(var(--brand-navy))] transition-colors",
                  location === "/solutions" && "text-[hsl(var(--brand-navy))] font-medium"
                )}>
                  Solutions
                </a>
              </Link>
              <Link href="/pricing">
                <a className={cn(
                  "text-sm hover:text-[hsl(var(--brand-navy))] transition-colors",
                  location === "/pricing" && "text-[hsl(var(--brand-navy))] font-medium"
                )}>
                  Pricing
                </a>
              </Link>
              <Link href="/resources">
                <a className={cn(
                  "text-sm hover:text-[hsl(var(--brand-navy))] transition-colors",
                  location === "/resources" && "text-[hsl(var(--brand-navy))] font-medium"
                )}>
                  Resources
                </a>
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/search">
              <Button variant="ghost" size="sm" className="text-[hsl(var(--brand-navy))]">Search</Button>
            </Link>
            <Link href="/login">
              <Button variant="ghost" size="sm" className="text-[hsl(var(--brand-navy))]">Login</Button>
            </Link>
            <Link href="/#demo">
              <Button size="sm" className="bg-[hsl(var(--brand-gold))] hover:bg-[hsl(var(--brand-gold)_/_90%)] text-[hsl(var(--brand-navy))]">
                Get a Demo
              </Button>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}