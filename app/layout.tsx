import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Club POS | Get Sliced Club",
  description:
    "Club POS — 7 redemptions per month, members only. Join the Club for $14.99/mo. Cancel anytime.",
  openGraph: {
    title: "Club POS | Get Sliced Club",
    description:
      "7 redemptions per month. Members only. $14.99/mo. Cancel anytime.",
    url: "https://www.getclubpos.com",
    siteName: "Club POS",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}