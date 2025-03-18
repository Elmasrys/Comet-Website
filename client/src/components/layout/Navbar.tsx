import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="border-b py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/">
          <a className="text-2xl font-bold text-primary">Comet</a>
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <Link href="/residential">
            <a className="text-muted-foreground hover:text-foreground transition-colors">
              Residential
            </a>
          </Link>
          <Link href="/sports">
            <a className="text-muted-foreground hover:text-foreground transition-colors">
              Sports
            </a>
          </Link>
          <Link href="/commercial">
            <a className="text-muted-foreground hover:text-foreground transition-colors">
              Commercial
            </a>
          </Link>
          <Button variant="default" asChild>
            <Link href="/#contact">Get Started</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
