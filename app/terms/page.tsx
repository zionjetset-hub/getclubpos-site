import type { Metadata } from "next";
import LegalPage from "../components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service | Club POS",
  description: "Terms of Service for Club POS membership subscriptions.",
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service">
      <p>
        <strong>Last updated:</strong> June 3, 2026
      </p>
      <p>
        These Terms of Service (&quot;Terms&quot;) govern your use of the Club POS
        membership program and website at{" "}
        <a href="https://www.getclubpos.com">getclubpos.com</a> (the
        &quot;Service&quot;), operated by Club POS (&quot;we,&quot; &quot;us,&quot; or
        &quot;our&quot;). By subscribing or using the Service, you agree to these
        Terms.
      </p>

      <h2>1. Membership overview</h2>
      <p>
        Club POS is a monthly membership that provides eligible members with up to{" "}
        <strong>7 redemptions per calendar month</strong> at participating local
        food and retail locations (&quot;Participating Locations&quot;). Membership is{" "}
        <strong>$14.99 per month</strong>, billed on a recurring basis until
        canceled.
      </p>

      <h2>2. Eligibility</h2>
      <ul>
        <li>You must be at least 18 years old, or the age of majority in your state.</li>
        <li>One membership per person. Accounts may not be shared or transferred.</li>
        <li>
          You must provide accurate contact and payment information when signing up
          through our checkout provider, Stripe.
        </li>
      </ul>

      <h2>3. Redemptions</h2>
      <ul>
        <li>
          Redemptions are limited to <strong>7 accepted redemptions per calendar
          month</strong> per member account.
        </li>
        <li>
          A <strong>4-hour cooldown</strong> applies between accepted redemptions for
          the same member.
        </li>
        <li>
          To redeem, you must be an active, paid member and verify membership at the
          counter (typically using the last 4 digits of the phone number on your
          account).
        </li>
        <li>
          Redemptions are subject to item availability, store hours, and each
          Participating Location&apos;s rules. We do not guarantee any specific menu
          item, portion size, or brand.
        </li>
        <li>
          Redemptions have no cash value, are non-transferable, and may not be sold,
          bartered, or combined with other offers unless explicitly allowed in store.
        </li>
        <li>
          Unused redemptions do not roll over to the next month and are not refunded
          or credited.
        </li>
      </ul>

      <h2>4. Participating Locations</h2>
      <p>
        Benefits are valid only at Participating Locations that honor Club POS
        membership. Locations may join or leave the program at any time. We are not
        responsible for the acts, omissions, food safety, or service quality of
        independent Participating Locations.
      </p>

      <h2>5. Subscription and billing</h2>
      <p>
        Your membership renews automatically each month until you cancel. Payment
        is processed by Stripe. By subscribing, you authorize recurring charges to
        your payment method. See our{" "}
        <a href="/billing">Billing &amp; Refunds</a> page for cancellation and
        refund details.
      </p>

      <h2>6. Cancellation</h2>
      <p>
        You may cancel anytime. Cancellation stops future billing but does not
        entitle you to a refund for the current billing period unless required by
        law. Access to member redemptions ends when your paid period ends or
        immediately if your account is terminated for violation of these Terms.
      </p>

      <h2>7. Prohibited conduct</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use another person&apos;s membership or share your membership credentials.</li>
        <li>Submit false redemption or fraud-check information.</li>
        <li>Attempt to exceed redemption limits through multiple accounts or fraud.</li>
        <li>Abuse, reverse engineer, or disrupt the Service or related systems.</li>
      </ul>
      <p>
        We may suspend or terminate membership without refund if we reasonably
        believe you violated these Terms or engaged in fraud or abuse.
      </p>

      <h2>8. Changes to the Service or Terms</h2>
      <p>
        We may update pricing, redemption limits, Participating Locations, or these
        Terms. Material changes will be posted on this page with an updated date.
        Continued use after changes constitutes acceptance. If you do not agree, cancel
        your membership before the next billing date.
      </p>

      <h2>9. Disclaimers</h2>
      <p>
        THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE.&quot; TO THE
        FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR
        IMPLIED, INCLUDING MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. WE
        DO NOT GUARANTEE UNINTERRUPTED ACCESS TO THE WEBSITE OR ANY PARTICIPATING
        LOCATION.
      </p>

      <h2>10. Limitation of liability</h2>
      <p>
        TO THE FULLEST EXTENT PERMITTED BY LAW, CLUB POS AND ITS OPERATORS WILL NOT
        BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE
        DAMAGES, OR FOR LOST PROFITS OR DATA. OUR TOTAL LIABILITY FOR ANY CLAIM
        RELATING TO THE SERVICE IS LIMITED TO THE AMOUNT YOU PAID US IN THE 12
        MONTHS BEFORE THE CLAIM.
      </p>

      <h2>11. Indemnification</h2>
      <p>
        You agree to indemnify and hold harmless Club POS from claims arising from
        your misuse of the Service or violation of these Terms.
      </p>

      <h2>12. Governing law</h2>
      <p>
        These Terms are governed by the laws of the State of New York, without
        regard to conflict-of-law rules. Disputes will be resolved in courts located
        in New York, unless applicable law requires otherwise.
      </p>

      <h2>13. Contact</h2>
      <p>
        Email: <a href="mailto:zionjetset@gmail.com">zionjetset@gmail.com</a>
        <br />
        Website: <a href="https://www.getclubpos.com">getclubpos.com</a>
      </p>
    </LegalPage>
  );
}
