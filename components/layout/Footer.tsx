import Link from "next/link";
import { Phone, Mail, MapPin, Shield, Award, Clock } from "lucide-react";

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
  { label: "Clear Lake", href: "/service-areas/clear-lake" },
  { label: "Friendswood", href: "/service-areas/friendswood" },
  { label: "Webster", href: "/service-areas/webster" },
  { label: "League City", href: "/service-areas/league-city" },
  { label: "Tomball", href: "/service-areas/tomball" },
  { label: "Humble", href: "/service-areas/humble" },
  { label: "Spring", href: "/service-areas/spring" },
];

const company = [
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Financing", href: "/financing" },
  { label: "Maintenance", href: "/maintenance" },
];

export function Footer() {
  return (
    <footer className="bg-midnight text-white relative">
      {/* Top accent line */}
      <div className="h-1 bg-copper" />

      {/* Main Footer Content */}
      <div className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">

            {/* Column 1: Brand & Contact */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-copper flex items-center justify-center">
                  <span className="font-heading text-white text-2xl">A</span>
                </div>
                <div>
                  <span className="font-heading text-xl text-white block leading-none">
                    Allstar AC & Heating
                  </span>
                  <span className="text-copper text-sm">
                    Fair Pricing. Fast Service. No Surprises.
                  </span>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <a
                  href="tel:7139437283"
                  className="flex items-center gap-3 text-white hover:text-copper transition-colors group"
                >
                  <div className="w-10 h-10 bg-white/10 flex items-center justify-center group-hover:bg-copper transition-colors">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-lg font-semibold">713-943-7283</span>
                    <span className="text-white/60 text-sm">Call or Text</span>
                  </div>
                </a>
                <a
                  href="mailto:allstar.ac.heat@gmail.com"
                  className="flex items-center gap-3 text-white/80 hover:text-copper transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  <span className="text-sm">allstar.ac.heat@gmail.com</span>
                </a>
                <div className="flex items-center gap-3 text-white/60">
                  <MapPin className="h-5 w-5" />
                  <span className="text-sm">Houston, TX — South Houston Area</span>
                </div>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-white/60 text-sm">
                  <Shield className="h-4 w-4 text-copper" />
                  <span>Licensed</span>
                </div>
                <div className="flex items-center gap-2 text-white/60 text-sm">
                  <Award className="h-4 w-4 text-copper" />
                  <span>BBB Accredited</span>
                </div>
                <div className="flex items-center gap-2 text-white/60 text-sm">
                  <Clock className="h-4 w-4 text-copper" />
                  <span>Same-Day Service</span>
                </div>
              </div>
            </div>

            {/* Column 2: Services */}
            <div>
              <h3 className="font-heading text-lg text-copper mb-4 pb-2 border-b border-white/10">
                Services
              </h3>
              <ul className="space-y-3">
                {services.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-white/70 hover:text-copper transition-colors text-sm"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Service Areas */}
            <div>
              <h3 className="font-heading text-lg text-copper mb-4 pb-2 border-b border-white/10">
                Service Areas
              </h3>
              <ul className="space-y-3">
                {serviceAreas.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-white/70 hover:text-copper transition-colors text-sm"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/service-areas"
                    className="text-copper hover:text-copper-light transition-colors text-sm font-medium"
                  >
                    View All Areas →
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Company */}
            <div>
              <h3 className="font-heading text-lg text-copper mb-4 pb-2 border-b border-white/10">
                Company
              </h3>
              <ul className="space-y-3">
                {company.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-white/70 hover:text-copper transition-colors text-sm"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-4 border-t border-white/10">
                <p className="text-white/40 text-xs font-mono">
                  License: TACLB23470E
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-[hsl(220,60%,5%)]">
        <div className="py-6 px-4 md:px-8">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/50 text-center md:text-left">
              © {new Date().getFullYear()} Allstar AC & Heating. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-white/50">
              <Link href="#" className="hover:text-copper transition-colors">
                Privacy Policy
              </Link>
              <span className="text-white/20">|</span>
              <Link href="#" className="hover:text-copper transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
