import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Club POS | Staff",
  description: "In-store redemption and member lookup for Club POS staff.",
  robots: { index: false, follow: false },
};

const LINKS = {
  redemption:
    "https://docs.google.com/forms/d/e/1FAIpQLSdjY_3bvQsSJI1SLo0WqFgWLfVMnuNq3L2S6n6CSdGzQL-GUw/viewform",
  fraudCheck:
    "https://docs.google.com/forms/d/e/1FAIpQLSfoQPWBqJ_wopbPiz_s_AOSr-tgRNSVBlvAM2xymGwRPb4bng/viewform",
  customerSignup: "https://www.getclubpos.com",
  responsesSheet:
    "https://docs.google.com/spreadsheets/d/1AZCxQ13A579JT87DszcTVe8htIFcRwT5UyI40LJeMn4/edit#gid=398899636",
} as const;

const buttonStyle = {
  display: "block",
  width: "100%",
  maxWidth: "360px",
  backgroundColor: "#FFB800",
  color: "#000000",
  fontWeight: "bold" as const,
  fontSize: "18px",
  padding: "16px 24px",
  borderRadius: "8px",
  textDecoration: "none",
  textAlign: "center" as const,
  marginBottom: "12px",
};

const secondaryButtonStyle = {
  ...buttonStyle,
  backgroundColor: "transparent",
  color: "#FFB800",
  border: "2px solid #FFB800",
};

export default function StaffPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#000000",
        color: "#FFFFFF",
        padding: "24px 16px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={{ width: "100%", maxWidth: "480px" }}>
        <p style={{ marginBottom: "8px" }}>
          <Link href="/" style={{ color: "#CCCCCC", fontSize: "14px" }}>
            ← Back to signup page
          </Link>
        </p>

        <h1
          style={{
            color: "#FFB800",
            fontSize: "36px",
            fontWeight: "bold",
            marginBottom: "8px",
            lineHeight: 1.1,
          }}
        >
          Club POS Staff
        </h1>
        <p style={{ color: "#CCCCCC", fontSize: "16px", marginBottom: "24px" }}>
          Register only — bookmark this page on the shop tablet.
        </p>

        <section style={{ marginBottom: "28px" }}>
          <h2
            style={{
              color: "#FFFFFF",
              fontSize: "20px",
              fontWeight: "bold",
              marginBottom: "12px",
            }}
          >
            Redeem a member
          </h2>
          <ol
            style={{
              color: "#CCCCCC",
              fontSize: "15px",
              lineHeight: 1.6,
              paddingLeft: "20px",
              marginBottom: "16px",
            }}
          >
            <li>Ask for the last 4 digits of their phone.</li>
            <li>Confirm they are an active member (Stripe / your sheet).</li>
            <li>Max <strong style={{ color: "#FFB800" }}>7 redemptions per month</strong>.</li>
            <li>Open the form below and submit after each redemption.</li>
          </ol>
          <a href={LINKS.redemption} style={buttonStyle}>
            Open redemption form
          </a>
          <p style={{ color: "#888", fontSize: "13px", textAlign: "center" }}>
            Last 4 of phone + cashier name → saves to Google Sheets
          </p>
        </section>

        <section style={{ marginBottom: "28px" }}>
          <h2
            style={{
              color: "#FFFFFF",
              fontSize: "20px",
              fontWeight: "bold",
              marginBottom: "12px",
            }}
          >
            Fraud check
          </h2>
          <p
            style={{
              color: "#CCCCCC",
              fontSize: "15px",
              marginBottom: "16px",
              lineHeight: 1.5,
            }}
          >
            Use when something looks off — wrong person, too many visits, or a
            dispute at the counter.
          </p>
          <a href={LINKS.fraudCheck} style={secondaryButtonStyle}>
            Open fraud check form
          </a>
          <p style={{ color: "#888", fontSize: "13px", textAlign: "center" }}>
            Member last 4 + cashier name
          </p>
        </section>

        <section style={{ marginBottom: "28px" }}>
          <h2
            style={{
              color: "#FFFFFF",
              fontSize: "20px",
              fontWeight: "bold",
              marginBottom: "12px",
            }}
          >
            New signup (customer)
          </h2>
          <a href={LINKS.customerSignup} style={secondaryButtonStyle}>
            getclubpos.com — join page
          </a>
        </section>

        <section style={{ marginBottom: "28px" }}>
          <h2
            style={{
              color: "#FFFFFF",
              fontSize: "20px",
              fontWeight: "bold",
              marginBottom: "12px",
            }}
          >
            Responses sheet
          </h2>
          <p
            style={{
              color: "#CCCCCC",
              fontSize: "15px",
              marginBottom: "16px",
              lineHeight: 1.5,
            }}
          >
            After each submit, refresh the sheet: green row = give the item. Red row = deny (7/month used).
          </p>
          <a href={LINKS.responsesSheet} style={secondaryButtonStyle}>
            Open redemption responses
          </a>
        </section>

        <section
          style={{
            borderTop: "1px solid #333",
            paddingTop: "20px",
            color: "#888",
            fontSize: "13px",
            lineHeight: 1.5,
          }}
        >
          Status column: ACCEPTED (green) or DENIED (red). Max 7 accepted redemptions per phone per month.
        </section>
      </div>
    </main>
  );
}
