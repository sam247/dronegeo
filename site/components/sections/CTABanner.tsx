"use client";

import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { QuoteFormPrimaryCta } from "engine";
import { verticalConfig } from "@/config";

const CTABanner = () => {
  const pathname = usePathname();
  const pagePath = pathname && pathname.length > 0 ? pathname : "/";
  const ctaSeed = `${verticalConfig.verticalId}-${pagePath}`;
  const ctaLabel = "Get a quote";

  return (
    <section className="bg-highlight py-12 text-white md:py-20">
      <div className="container">
        <div className="mx-auto max-w-3xl space-y-3 text-center">
          <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
            Get a drone inspection quote
          </h2>
          <p className="text-lg text-white/90">Fast response. No obligation.</p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <QuoteFormPrimaryCta
              contactPath="/contact"
              size="lg"
              variant="outline"
              className="border-0 bg-white text-base font-semibold text-neutral-950 shadow-sm hover:bg-white/90 hover:text-neutral-950 focus-visible:ring-white/50"
              ctaText={ctaLabel}
              ctaSeed={ctaSeed}
            >
              <span className="inline-flex items-center">
                Get a quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </span>
            </QuoteFormPrimaryCta>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
