import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Club POS | Get Sliced Club",
  description:
    "Membership pizza club — one slice per day for members only. Join Slice Club for $14.99/mo. Cancel anytime.",
  openGraph: {
    title: "Club POS | Get Sliced Club",
    description:
      "One slice per day, every day for members only. $14.99/mo.",
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