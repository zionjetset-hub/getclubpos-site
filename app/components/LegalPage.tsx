import Link from "next/link";
import type { ReactNode } from "react";

type LegalPageProps = {
  title: string;
  children: ReactNode;
};

export default function LegalPage({ title, children }: LegalPageProps) {
  return (
    <main className="legal-page">
      <div className="legal-page__inner">
        <p className="legal-page__back">
          <Link href="/">← Back to Club POS</Link>
        </p>
        <h1 className="legal-page__title">{title}</h1>
        <div className="legal-prose">{children}</div>
      </div>
    </main>
  );
}
