"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/data";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { SurveysResourcesMenuContent, surveysMobileResourceLinks } from "@/components/layout/SurveysResourcesMenu";
import {
  getServiceUrl,
  isServiceHubPath,
  TrackablePhoneLink,
  QuoteFormPrimaryCta,
  getCtaVariant,
  inferServiceSlugForCtaBias,
} from "engine";
import { verticalConfig } from "@/config";
import { stickyCtaConfig } from "@/lib/stickyCtaConfig";
import { cn } from "@/lib/utils";

const HEADER_LOGO_WIDTH = 210;

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const pathname = usePathname();

  const headerQuoteSeed = `${verticalConfig.verticalId}-header-${pathname && pathname.length > 0 ? pathname : "/"}`;
  const headerQuoteLabel = getCtaVariant(headerQuoteSeed, verticalConfig.ctaVariants, {
    serviceSlug: inferServiceSlugForCtaBias(pathname, services),
  });

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between md:h-20">
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <Image
            src="/logo_black.svg"
            alt="DroneGeo"
            width={HEADER_LOGO_WIDTH}
            height={24}
            className="h-6 w-[210px] object-contain object-left"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex lg:items-center lg:gap-1">
          <Link
            href={getServiceUrl("drone-surveys")}
            className={cn(
              "px-3 py-2 text-sm font-medium transition-colors hover:text-primary",
              isServiceHubPath(pathname, "drone-surveys") ? "text-primary" : "text-muted-foreground"
            )}
          >
            Drone Surveys
          </Link>
          <Link
            href={getServiceUrl("drone-inspections")}
            className={cn(
              "px-3 py-2 text-sm font-medium transition-colors hover:text-primary",
              isServiceHubPath(pathname, "drone-inspections") ? "text-primary" : "text-muted-foreground"
            )}
          >
            Drone Inspections
          </Link>
          <Link
            href={getServiceUrl("thermal-drone-imaging")}
            className={cn(
              "px-3 py-2 text-sm font-medium transition-colors hover:text-primary",
              isServiceHubPath(pathname, "thermal-drone-imaging") ? "text-primary" : "text-muted-foreground"
            )}
          >
            Thermal Imaging
          </Link>
          <Link
            href={getServiceUrl("aerial-photography")}
            className={cn(
              "px-3 py-2 text-sm font-medium transition-colors hover:text-primary",
              isServiceHubPath(pathname, "aerial-photography") ? "text-primary" : "text-muted-foreground"
            )}
          >
            Aerial Photography
          </Link>
          {/* Resources Dropdown */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-muted-foreground hover:text-primary">
                  Resources
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <SurveysResourcesMenuContent />
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

        </nav>

        {/* Desktop CTAs — match sticky bar: green Call + dark quote CTA */}
        <div className="hidden items-center gap-2 lg:flex">
          <Button variant="highlight" size="default" asChild className="shrink-0 gap-2">
            <TrackablePhoneLink
              phone={verticalConfig.companyInfo.phone}
              vertical={verticalConfig.verticalId}
              serviceSlug={null}
              locationSlug={null}
              source="header"
              className="inline-flex min-h-[44px] items-center justify-center px-4 py-2 text-sm font-semibold"
            >
              <Phone className="h-4 w-4 shrink-0" aria-hidden />
              {stickyCtaConfig.ctaPrimary}
            </TrackablePhoneLink>
          </Button>
          <QuoteFormPrimaryCta
            contactPath="/contact"
            variant="default"
            size="default"
            ctaText={headerQuoteLabel}
            ctaSeed={headerQuoteSeed}
          >
            <span className="inline-flex items-center gap-2">
              {headerQuoteLabel}
              <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
            </span>
          </QuoteFormPrimaryCta>
        </div>

        {/* Mobile: green Call (same as sticky bar) + menu */}
        <div className="flex shrink-0 items-center gap-2 lg:hidden">
          <Button variant="highlight" size="sm" asChild className="gap-1.5 px-3">
            <TrackablePhoneLink
              phone={verticalConfig.companyInfo.phone}
              vertical={verticalConfig.verticalId}
              serviceSlug={null}
              locationSlug={null}
              source="header"
              className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center gap-1.5 text-xs font-semibold sm:text-sm"
            >
              <Phone className="h-4 w-4 shrink-0" aria-hidden />
              <span className="max-w-[5.5rem] truncate sm:max-w-none">{stickyCtaConfig.ctaPrimary}</span>
            </TrackablePhoneLink>
          </Button>
          <button
            type="button"
            className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-md border border-border bg-background"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="container py-4">
            
            <Link href={getServiceUrl("drone-surveys")} className="flex min-h-[44px] items-center text-sm font-medium text-foreground" onClick={() => setMobileMenuOpen(false)}>Drone Surveys</Link>
            <Link href={getServiceUrl("drone-inspections")} className="flex min-h-[44px] items-center text-sm font-medium text-foreground" onClick={() => setMobileMenuOpen(false)}>Drone Inspections</Link>
            <Link href={getServiceUrl("thermal-drone-imaging")} className="flex min-h-[44px] items-center text-sm font-medium text-foreground" onClick={() => setMobileMenuOpen(false)}>Thermal Imaging</Link>
            <Link href={getServiceUrl("aerial-photography")} className="flex min-h-[44px] items-center text-sm font-medium text-foreground" onClick={() => setMobileMenuOpen(false)}>Aerial Photography</Link>
            {/* Mobile Resources Accordion */}
            <div>
              <button
                className="flex min-h-[44px] w-full items-center justify-between text-sm font-medium text-foreground"
                onClick={() => setResourcesOpen(!resourcesOpen)}
              >
                Resources
                <ChevronDown className={cn("h-4 w-4 transition-transform", resourcesOpen && "rotate-180")} />
              </button>
              {resourcesOpen && (
                <div className="ml-4 border-l border-border pl-4">
                  {surveysMobileResourceLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block py-2 text-sm text-muted-foreground"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            

            <div className="mt-4 flex flex-col gap-3 border-t border-border pt-4">
              <Button variant="highlight" asChild className="w-full">
                <TrackablePhoneLink
                  phone={verticalConfig.companyInfo.phone}
                  vertical={verticalConfig.verticalId}
                  serviceSlug={null}
                  locationSlug={null}
                  source="header"
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 font-semibold"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Phone className="h-4 w-4 shrink-0" aria-hidden />
                  {stickyCtaConfig.ctaPrimary}
                </TrackablePhoneLink>
              </Button>
              <QuoteFormPrimaryCta
                contactPath="/contact"
                variant="default"
                size="default"
                className="w-full"
                ctaText={headerQuoteLabel}
                ctaSeed={headerQuoteSeed}
                onAfterNavigate={() => setMobileMenuOpen(false)}
              >
                <span className="inline-flex items-center justify-center gap-2">
                  {headerQuoteLabel}
                  <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
                </span>
              </QuoteFormPrimaryCta>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
