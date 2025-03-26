import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-[hsl(var(--brand-navy)_/_5%)] border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[hsl(var(--brand-navy))]">Comet</h3>
            <p className="text-sm text-[hsl(var(--brand-navy)_/_70%)]">
              Transforming property management with innovative solutions.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 text-[hsl(var(--brand-navy))]">Solutions</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/#residential">
                  <div className="text-sm text-[hsl(var(--brand-navy)_/_70%)] hover:text-[hsl(var(--brand-navy))] cursor-pointer">
                    Residential
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/#sports">
                  <div className="text-sm text-[hsl(var(--brand-navy)_/_70%)] hover:text-[hsl(var(--brand-navy))] cursor-pointer">
                    Sports
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/#commercial">
                  <div className="text-sm text-[hsl(var(--brand-navy)_/_70%)] hover:text-[hsl(var(--brand-navy))] cursor-pointer">
                    Commercial
                  </div>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 text-[hsl(var(--brand-navy))]">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about">
                  <div className="text-sm text-[hsl(var(--brand-navy)_/_70%)] hover:text-[hsl(var(--brand-navy))] cursor-pointer">
                    About Us
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/partners">
                  <div className="text-sm text-[hsl(var(--brand-navy)_/_70%)] hover:text-[hsl(var(--brand-navy))] cursor-pointer">
                    Partners
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/about#company-profile">
                  <div className="text-sm text-[hsl(var(--brand-navy)_/_70%)] hover:text-[hsl(var(--brand-navy))] cursor-pointer">
                    Get Company Profile
                  </div>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 text-[hsl(var(--brand-navy))]">Get Started</h4>
            <Link href="/#contact">
              <div className="text-sm text-[hsl(var(--brand-gold))] hover:text-[hsl(var(--brand-gold)_/_80%)] cursor-pointer">
                Request a Demo
              </div>
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-sm text-[hsl(var(--brand-navy)_/_70%)]">
          <p>&copy; {new Date().getFullYear()} Comet. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}