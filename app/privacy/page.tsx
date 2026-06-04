import type { Metadata } from "next";
import LegalPage from "../components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy | Club POS",
  description: "How Club POS collects, uses, and protects your information.",
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <p>
        <strong>Last updated:</strong> June 3, 2026
      </p>
      <p>
        This Privacy Policy explains how Club POS (&quot;we,&quot; &quot;us,&quot; or
        &quot;our&quot;) collects, uses, and shares information when you use{" "}
        <a href="https://www.getclubpos.com">getclubpos.com</a>, subscribe to
        membership, or redeem benefits at Participating Locations.
      </p>

      <h2>1. Information we collect</h2>
      <h3>Information you provide</h3>
      <ul>
        <li>
          <strong>Account and billing:</strong> Name, email address, and payment
          details submitted at checkout. Payment card data is collected and processed
          by Stripe, not stored directly on our servers.
        </li>
        <li>
          <strong>Membership verification:</strong> Phone number (or last 4 digits
          used at redemption), and information needed to confirm active membership.
        </li>
        <li>
          <strong>Redemption records:</strong> When staff process a redemption, we
          may record timestamp, last 4 digits of phone, cashier name, redemption
          status (accepted or denied), and related operational fields in Google
          Forms and Google Sheets.
        </li>
        <li>
          <strong>Support communications:</strong> Information you send when
          contacting <a href="mailto:zionjetset@gmail.com">zionjetset@gmail.com</a>.
        </li>
      </ul>

      <h3>Information collected automatically</h3>
      <ul>
        <li>
          <strong>Device and usage data:</strong> IP address, browser type, pages
          visited, and general analytics needed to operate and secure the website.
        </li>
        <li>
          <strong>Cookies and similar technologies:</strong> We may use essential
          cookies for site functionality. Third-party services (such as Stripe) may
          set their own cookies when you interact with checkout.
        </li>
      </ul>

      <h2>2. How we use information</h2>
      <p>We use information to:</p>
      <ul>
        <li>Provide, bill, and manage your membership subscription.</li>
        <li>Verify eligibility and enforce redemption limits (7/month, cooldown rules).</li>
        <li>Prevent fraud and abuse at Participating Locations.</li>
        <li>Respond to support requests and communicate about your account.</li>
        <li>Improve the Service, troubleshoot issues, and comply with legal obligations.</li>
      </ul>

      <h2>3. How we share information</h2>
      <p>We may share information with:</p>
      <ul>
        <li>
          <strong>Stripe</strong> — payment processing and subscription management.{" "}
          <a
            href="https://stripe.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Stripe Privacy Policy
          </a>
        </li>
        <li>
          <strong>Google (Forms &amp; Sheets)</strong> — redemption logging and
          operational records used by Participating Locations.{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Privacy Policy
          </a>
        </li>
        <li>
          <strong>Hosting providers</strong> — such as Vercel, to serve the website.
        </li>
        <li>
          <strong>Participating Locations</strong> — limited redemption verification
          data needed to honor or deny a visit.
        </li>
        <li>
          <strong>Legal and safety</strong> — when required by law, court order, or
          to protect rights, safety, and security.
        </li>
      </ul>
      <p>We do not sell your personal information.</p>

      <h2>4. Data retention</h2>
      <p>
        We retain information as long as needed to provide the Service, enforce
        redemption rules, resolve disputes, and meet legal or accounting requirements.
        Redemption logs may be kept for operational and fraud-prevention purposes.
      </p>

      <h2>5. Security</h2>
      <p>
        We use reasonable administrative, technical, and organizational measures to
        protect information. No method of transmission or storage is 100% secure.
        Payment processing is handled by Stripe using industry-standard security
        practices.
      </p>

      <h2>6. Your choices and rights</h2>
      <ul>
        <li>
          <strong>Access and correction:</strong> Contact us to request access to or
          correction of personal information we hold about you.
        </li>
        <li>
          <strong>Deletion:</strong> You may request deletion of personal information,
          subject to legal and operational retention needs (for example, billing
          records).
        </li>
        <li>
          <strong>Marketing:</strong> We do not currently send promotional emails
          unless you opt in. You may opt out of non-essential communications at any
          time.
        </li>
        <li>
          <strong>California residents:</strong> You may have additional rights under
          the CCPA/CPRA, including the right to know, delete, and opt out of certain
          sharing. Contact us to exercise these rights.
        </li>
      </ul>

      <h2>7. Children&apos;s privacy</h2>
      <p>
        The Service is not directed to children under 13. We do not knowingly collect
        personal information from children under 13. If you believe a child provided
        us information, contact us so we can delete it.
      </p>

      <h2>8. International users</h2>
      <p>
        The Service is operated in the United States. If you access the Service from
        outside the U.S., you understand that information may be processed in the U.S.
      </p>

      <h2>9. Changes to this policy</h2>
      <p>
        We may update this Privacy Policy from time to time. The &quot;Last
        updated&quot; date at the top will change when we do. Continued use after
        updates means you accept the revised policy.
      </p>

      <h2>10. Contact</h2>
      <p>
        Privacy questions:{" "}
        <a href="mailto:zionjetset@gmail.com">zionjetset@gmail.com</a>
        <br />
        Website: <a href="https://www.getclubpos.com">getclubpos.com</a>
      </p>
    </LegalPage>
  );
}
