import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

export function Header() {
  const [location] = useLocation();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/residential", label: "Residential" },
    { href: "/sports", label: "Sports" },
    { href: "/commercial", label: "Commercial" },
  ];

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <a className="text-2xl font-bold text-primary">Comet</a>
        </Link>

        <NavigationMenu>
          <NavigationMenuList>
            {navItems.map((item) => (
              <NavigationMenuItem key={item.href}>
                <Link href={item.href}>
                  <NavigationMenuLink
                    className={cn(
                      "px-4 py-2 hover:text-primary transition-colors",
                      location === item.href && "text-primary font-medium"
                    )}
                  >
                    {item.label}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <Link href="/#demo">
          <Button>Request Demo</Button>
        </Link>
      </div>
    </header>
  );
}
