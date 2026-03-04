"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const services = [
  { label: "AC Repair", href: "/services/ac-repair" },
  { label: "AC Replacement", href: "/services/ac-installation" },
  { label: "AC Installation", href: "/services/ac-installation" },
  { label: "Heating Repair", href: "/services/heating-repair" },
  { label: "Heating Replacement", href: "/services/heating-installation" },
  { label: "Heating Installation", href: "/services/heating-installation" },
  { label: "Maintenance Plans", href: "/maintenance" },
];

const serviceAreas = [
  { label: "All Service Areas", href: "/service-areas" },
  { label: "Clear Lake", href: "/service-areas/clear-lake" },
  { label: "Friendswood", href: "/service-areas/friendswood" },
  { label: "Webster", href: "/service-areas/webster" },
  { label: "League City", href: "/service-areas/league-city" },
  { label: "Tomball", href: "/service-areas/tomball" },
  { label: "Humble", href: "/service-areas/humble" },
  { label: "Spring", href: "/service-areas/spring" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 w-full bg-white transition-all duration-300",
          isScrolled && "shadow-[0_2px_10px_rgba(10,22,40,0.1)]"
        )}
      >
        {/* Top Bar */}
        <div className="border-b-2 border-midnight/10">
          <div className="container mx-auto px-4 md:px-8 py-3 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-midnight flex items-center justify-center">
                <span className="font-heading text-copper text-xl">A</span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-lg md:text-xl text-midnight leading-none">
                  Allstar AC & Heating
                </span>
                <span className="text-xs text-steel hidden sm:block">
                  Fair Pricing. Fast Service. No Surprises.
                </span>
              </div>
            </Link>

            {/* Right Side - Desktop */}
            <div className="hidden md:flex items-center gap-6">
              <span className="text-xs text-steel font-mono bg-muted px-2 py-1">
                TACLB23470E
              </span>
              <a
                href="tel:7139437283"
                className="flex items-center gap-2 text-midnight font-semibold hover:text-copper transition-colors"
              >
                <Phone className="h-4 w-4" />
                713-943-7283
              </a>
              <Button asChild className="bg-copper hover:bg-copper/90 text-white border-0">
                <Link href="/contact">Get Free Quote</Link>
              </Button>
            </div>

            {/* Mobile - Phone & Menu */}
            <div className="flex md:hidden items-center gap-2">
              <a
                href="tel:7139437283"
                className="p-2 text-copper"
                aria-label="Call us"
              >
                <Phone className="h-5 w-5" />
              </a>
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" aria-label="Menu" className="text-midnight">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[350px] bg-white border-l-2 border-midnight" showCloseButton={false}>
                  <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                  <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between mb-6 pb-4 border-b-2 border-border">
                      <span className="font-heading text-xl text-midnight">
                        Menu
                      </span>
                      <SheetClose asChild>
                        <Button variant="ghost" size="icon" className="text-midnight">
                          <X className="h-5 w-5" />
                        </Button>
                      </SheetClose>
                    </div>

                    <nav className="flex-1 overflow-y-auto">
                      <div className="space-y-1">
                        <SheetClose asChild>
                          <Link
                            href="/"
                            className={cn(
                              "block py-3 px-3 transition-colors font-medium",
                              isActive("/")
                                ? "text-copper bg-copper/10 border-l-4 border-copper"
                                : "hover:bg-muted hover:text-midnight"
                            )}
                          >
                            Home
                          </Link>
                        </SheetClose>

                        <Accordion type="single" collapsible>
                          <AccordionItem value="services" className="border-none">
                            <AccordionTrigger className="py-3 px-3 hover:no-underline hover:bg-muted font-medium">
                              Services
                            </AccordionTrigger>
                            <AccordionContent>
                              <div className="pl-4 space-y-1 border-l-2 border-border ml-3">
                                {services.map((item) => (
                                  <SheetClose asChild key={item.label}>
                                    <Link
                                      href={item.href}
                                      className={cn(
                                        "block py-2 px-3 text-sm transition-colors",
                                        isActive(item.href)
                                          ? "text-copper font-semibold"
                                          : "text-muted-foreground hover:text-midnight"
                                      )}
                                    >
                                      {item.label}
                                    </Link>
                                  </SheetClose>
                                ))}
                              </div>
                            </AccordionContent>
                          </AccordionItem>

                          <AccordionItem value="areas" className="border-none">
                            <AccordionTrigger className="py-3 px-3 hover:no-underline hover:bg-muted font-medium">
                              Service Areas
                            </AccordionTrigger>
                            <AccordionContent>
                              <div className="pl-4 space-y-1 border-l-2 border-border ml-3">
                                {serviceAreas.map((item) => (
                                  <SheetClose asChild key={item.href}>
                                    <Link
                                      href={item.href}
                                      className={cn(
                                        "block py-2 px-3 text-sm transition-colors",
                                        isActive(item.href)
                                          ? "text-copper font-semibold"
                                          : "text-muted-foreground hover:text-midnight"
                                      )}
                                    >
                                      {item.label}
                                    </Link>
                                  </SheetClose>
                                ))}
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>

                        <SheetClose asChild>
                          <Link
                            href="/financing"
                            className={cn(
                              "block py-3 px-3 transition-colors font-medium",
                              isActive("/financing")
                                ? "text-copper bg-copper/10 border-l-4 border-copper"
                                : "hover:bg-muted"
                            )}
                          >
                            Financing
                          </Link>
                        </SheetClose>

                        <SheetClose asChild>
                          <Link
                            href="/about"
                            className={cn(
                              "block py-3 px-3 transition-colors font-medium",
                              isActive("/about")
                                ? "text-copper bg-copper/10 border-l-4 border-copper"
                                : "hover:bg-muted"
                            )}
                          >
                            About
                          </Link>
                        </SheetClose>

                        <SheetClose asChild>
                          <Link
                            href="/contact"
                            className={cn(
                              "block py-3 px-3 transition-colors font-medium",
                              isActive("/contact")
                                ? "text-copper bg-copper/10 border-l-4 border-copper"
                                : "hover:bg-muted"
                            )}
                          >
                            Contact
                          </Link>
                        </SheetClose>
                      </div>
                    </nav>

                    <div className="pt-6 border-t-2 border-border mt-6">
                      <p className="text-xs text-steel font-mono mb-3">
                        License: TACLB23470E
                      </p>
                      <SheetClose asChild>
                        <Button asChild className="w-full bg-copper hover:bg-copper/90 text-white">
                          <Link href="/contact">Get Free Quote</Link>
                        </Button>
                      </SheetClose>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>

        {/* Navigation Bar - Desktop Only */}
        <nav className="hidden md:block border-b border-border">
          <div className="container mx-auto px-4 md:px-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/"
                      className={cn(
                        "group inline-flex h-12 w-max items-center justify-center px-4 py-2 font-medium transition-colors hover:text-copper focus:text-copper focus:outline-none",
                        isActive("/") && "text-copper border-b-2 border-copper"
                      )}
                    >
                      Home
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={cn(
                      "h-12 font-medium hover:text-copper",
                      isActive("/services") && "text-copper"
                    )}
                  >
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[280px] gap-1 p-3 bg-white border-2 border-border shadow-[4px_4px_0px_0px_hsl(220,60%,8%)]">
                      {services.map((item) => (
                        <li key={item.label}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={item.href}
                              className={cn(
                                "block select-none p-3 leading-none no-underline outline-none transition-colors hover:bg-muted hover:text-copper",
                                isActive(item.href) && "text-copper font-semibold bg-copper/5"
                              )}
                            >
                              {item.label}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={cn(
                      "h-12 font-medium hover:text-copper",
                      isActive("/service-areas") && "text-copper"
                    )}
                  >
                    Service Areas
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[280px] gap-1 p-3 bg-white border-2 border-border shadow-[4px_4px_0px_0px_hsl(220,60%,8%)]">
                      {serviceAreas.map((item, index) => (
                        <li key={item.label}>
                          {index === 1 && (
                            <div className="my-2 h-px bg-border" />
                          )}
                          <NavigationMenuLink asChild>
                            <Link
                              href={item.href}
                              className={cn(
                                "block select-none p-3 leading-none no-underline outline-none transition-colors hover:bg-muted hover:text-copper",
                                isActive(item.href) && "text-copper font-semibold bg-copper/5"
                              )}
                            >
                              {item.label}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/financing"
                      className={cn(
                        "group inline-flex h-12 w-max items-center justify-center px-4 py-2 font-medium transition-colors hover:text-copper focus:text-copper focus:outline-none",
                        isActive("/financing") && "text-copper border-b-2 border-copper"
                      )}
                    >
                      Financing
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/about"
                      className={cn(
                        "group inline-flex h-12 w-max items-center justify-center px-4 py-2 font-medium transition-colors hover:text-copper focus:text-copper focus:outline-none",
                        isActive("/about") && "text-copper border-b-2 border-copper"
                      )}
                    >
                      About
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/contact"
                      className={cn(
                        "group inline-flex h-12 w-max items-center justify-center px-4 py-2 font-medium transition-colors hover:text-copper focus:text-copper focus:outline-none",
                        isActive("/contact") && "text-copper border-b-2 border-copper"
                      )}
                    >
                      Contact
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </nav>
      </header>

      {/* Mobile Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t-2 border-midnight shadow-[0_-4px_20px_rgba(10,22,40,0.15)]">
        <div className="grid grid-cols-2">
          <a
            href="tel:7139437283"
            className="flex items-center justify-center gap-2 py-4 bg-midnight text-white font-semibold"
          >
            <Phone className="h-5 w-5" />
            Call Now
          </a>
          <Link
            href="/contact"
            className="flex items-center justify-center gap-2 py-4 bg-copper text-white font-semibold"
          >
            Get Quote
          </Link>
        </div>
      </div>
    </>
  );
}
