import Link from "next/link";

const LEGAL_LINKS = [
  { href: "/terms", label: "Terms of Service" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/billing", label: "Billing & Refunds" },
] as const;

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <nav className="site-footer__links" aria-label="Legal">
        {LEGAL_LINKS.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>
      <p className="site-footer__contact">
        Questions?{" "}
        <a href="mailto:zionjetset@gmail.com">zionjetset@gmail.com</a>
      </p>
      <p className="site-footer__copy">
        © {new Date().getFullYear()} Club POS. All rights reserved.
      </p>
    </footer>
  );
}
