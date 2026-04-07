"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

const linkBaseCn =
  "block rounded-md p-2 text-sm font-medium transition-colors hover:bg-accent focus:bg-accent";
const sectionTitleCn = "mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground";

export function SurveysResourcesMenuContent({ linkClassName }: { linkClassName?: string }) {
  const linkCn = cn(linkBaseCn, linkClassName);
  return (
    <div className="w-[400px] p-4">
      <div className="mb-3">
        <p className={sectionTitleCn}>Guides</p>
        <ul className="space-y-1">
          <li>
            <Link href="/survey-guides" className={linkCn}>
              Survey guides
            </Link>
          </li>
          <li>
            <Link href="/faq" className={linkCn}>
              FAQ
            </Link>
          </li>
        </ul>
      </div>
      <div className="mb-3 border-t border-border pt-3">
        <p className={sectionTitleCn}>Services</p>
        <ul className="space-y-1">
          <li>
            <Link href="/services" className={linkCn}>
              All services
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

/** Flat links for mobile drawer — same destinations as desktop menu. */
export const surveysMobileResourceLinks: { href: string; label: string }[] = [
  { href: "/survey-guides", label: "Survey guides" },
  { href: "/faq", label: "FAQ" },
  { href: "/services", label: "All services" },
];
