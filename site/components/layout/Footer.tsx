import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Clock, Linkedin, Twitter, Facebook } from "lucide-react";
import { companyInfo, services } from "@/lib/data";
import { getServiceUrl } from "engine";

const FOOTER_LOGO_WIDTH = 210;

const AREA_LINKS = [
  { label: "Hertfordshire", id: "hertfordshire" },
  { label: "Bedfordshire", id: "bedfordshire" },
  { label: "Buckinghamshire", id: "buckinghamshire" },
  { label: "London", id: "london" },
] as const;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const primarySlug = "drone-surveys";

  return (
    <footer className="bg-charcoal pb-14 text-neutral-50">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 md:gap-8">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4 flex items-center gap-2">
              <Image
                src="/logo_white.svg"
                alt="DroneGeo"
                width={FOOTER_LOGO_WIDTH}
                height={24}
                className="h-5 w-[175px] object-contain object-left sm:h-6 sm:w-[210px]"
              />
            </div>
            <p className="mb-6 text-sm text-neutral-300">
              Drone surveys, inspections, thermal imaging and aerial photography for property and construction projects.
            </p>
            <div className="flex gap-4">
              <a href={companyInfo.social.linkedin} className="text-neutral-400 transition-colors hover:text-white" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href={companyInfo.social.twitter} className="text-neutral-400 transition-colors hover:text-white" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href={companyInfo.social.facebook} className="text-neutral-400 transition-colors hover:text-white" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 font-display text-lg font-semibold">Our Services</h3>
            <ul className="space-y-2">
              {services.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link href={getServiceUrl(service.slug)} className="text-sm text-neutral-300 transition-colors hover:text-white">
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="text-sm font-medium text-neutral-300 transition-colors hover:text-white">
                  View All →
                </Link>
              </li>
            </ul>
          </div>

          {/* Areas we cover */}
          <div>
            <h3 className="mb-4 font-display text-lg font-semibold">Areas we cover</h3>
            <ul className="space-y-2">
              {AREA_LINKS.map((area) => (
                <li key={area.id}>
                  <Link href={`/${primarySlug}/${area.id}`} className="text-sm text-neutral-300 transition-colors hover:text-white">
                    {area.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/service-areas" className="text-sm font-medium text-neutral-300 transition-colors hover:text-white">
                  All service areas →
                </Link>
              </li>
            </ul>
          </div>

          {/* Guides & Resources */}
          <div>
            <h3 className="mb-4 font-display text-lg font-semibold">Guides & Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/survey-guides" className="text-sm text-neutral-300 transition-colors hover:text-white">
                  Drone Guides
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm text-neutral-300 transition-colors hover:text-white">
                  Drone FAQ
                </Link>
              </li>
              <li>
                <Link href="/guides" className="text-sm text-neutral-300 transition-colors hover:text-white">
                  All Guides
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-display text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-neutral-400" />
                <a href={`mailto:${companyInfo.email}`} className="text-sm text-neutral-300 transition-colors hover:text-white">
                  {companyInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-neutral-400" />
                <span className="text-sm text-neutral-300">{companyInfo.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-neutral-400" />
                <span className="text-sm text-neutral-300">{companyInfo.hours}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container flex flex-col gap-6 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-center text-sm text-neutral-400 sm:min-w-0 sm:text-left">
            © {currentYear} {companyInfo.name}. All rights reserved.
          </p>
          <nav className="flex flex-wrap items-center justify-center gap-x-1 gap-y-1 sm:justify-end" aria-label="Footer">
            <Link href="/about" className="inline-flex min-h-[44px] items-center px-2 text-sm text-neutral-400 transition-colors hover:text-white">
              About
            </Link>
            <Link href="/service-areas" className="inline-flex min-h-[44px] items-center px-2 text-sm text-neutral-400 transition-colors hover:text-white">
              Service Areas
            </Link>
            <Link href="/blog" className="inline-flex min-h-[44px] items-center px-2 text-sm text-neutral-400 transition-colors hover:text-white">
              Blog
            </Link>
            <Link href="/privacy" className="inline-flex min-h-[44px] items-center px-2 text-sm text-neutral-400 transition-colors hover:text-white">
              Privacy
            </Link>
            <Link href="/terms" className="inline-flex min-h-[44px] items-center px-2 text-sm text-neutral-400 transition-colors hover:text-white">
              Terms
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
