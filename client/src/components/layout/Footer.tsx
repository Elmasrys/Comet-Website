import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Comet</h3>
            <p className="text-sm text-gray-600">
              Transforming real estate technology with innovative solutions.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/residential">
                  <a className="text-sm text-gray-600 hover:text-primary">Residential</a>
                </Link>
              </li>
              <li>
                <Link href="/sports">
                  <a className="text-sm text-gray-600 hover:text-primary">Sports</a>
                </Link>
              </li>
              <li>
                <Link href="/commercial">
                  <a className="text-sm text-gray-600 hover:text-primary">Commercial</a>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/#about">
                  <a className="text-sm text-gray-600 hover:text-primary">About</a>
                </Link>
              </li>
              <li>
                <Link href="/#contact">
                  <a className="text-sm text-gray-600 hover:text-primary">Contact</a>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Get Started</h4>
            <Link href="/#demo">
              <a className="text-sm text-primary hover:underline">Request a Demo</a>
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} Comet. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
