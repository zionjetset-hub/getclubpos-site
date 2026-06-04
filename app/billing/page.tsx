import type { Metadata } from "next";
import LegalPage from "../components/LegalPage";

export const metadata: Metadata = {
  title: "Billing & Refunds | Club POS",
  description:
    "Subscription billing, cancellation, and refund policy for Club POS membership.",
};

export default function BillingPage() {
  return (
    <LegalPage title="Billing & Refunds">
      <p>
        <strong>Last updated:</strong> June 3, 2026
      </p>
      <p>
        This page describes how Club POS membership billing, renewal, cancellation,
        and refunds work. By subscribing at{" "}
        <a href="https://www.getclubpos.com">getclubpos.com</a>, you agree to this
        policy and our <a href="/terms">Terms of Service</a>.
      </p>

      <h2>1. Subscription price</h2>
      <p>
        Club POS membership is <strong>$14.99 USD per month</strong>, plus applicable
        taxes where required. The current price is shown at checkout before you pay.
      </p>

      <h2>2. Automatic renewal</h2>
      <p>
        Membership is a <strong>recurring monthly subscription</strong>. Unless you
        cancel before your renewal date, your payment method will be charged $14.99
        (plus tax) each billing cycle. You authorize us and our payment processor,
        Stripe, to charge your payment method on a recurring basis.
      </p>

      <h2>3. Payment processing</h2>
      <p>
        All payments are processed securely by{" "}
        <a
          href="https://stripe.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Stripe
        </a>
        . We do not store full payment card numbers on our servers. Your billing
        receipt and payment history are available through Stripe checkout and any
        customer portal links provided in your subscription confirmation email.
      </p>

      <h2>4. What you receive</h2>
      <p>
        An active paid membership includes up to <strong>7 redemptions per calendar
        month</strong> at Participating Locations, subject to store rules, item
        availability, and our redemption cooldown policy (4 hours between accepted
        redemptions for the same member).
      </p>
      <p>
        Unused redemptions expire at the end of each calendar month and do not carry
        over.
      </p>

      <h2>5. How to cancel</h2>
      <p>You may cancel anytime. To cancel:</p>
      <ul>
        <li>
          Use the subscription management link in your Stripe receipt or confirmation
          email, if provided; or
        </li>
        <li>
          Email{" "}
          <a href="mailto:zionjetset@gmail.com">zionjetset@gmail.com</a> from the
          email address on your account with the subject line &quot;Cancel
          membership.&quot;
        </li>
      </ul>
      <p>
        Cancellation takes effect at the end of your current paid billing period
        unless we confirm an earlier date. You will not be charged for future periods
        after cancellation is processed.
      </p>

      <h2>6. Refund policy</h2>
      <p>
        <strong>All sales are generally final.</strong> We do not provide refunds or
        credits for:
      </p>
      <ul>
        <li>Partial months after a billing cycle has started.</li>
        <li>Unused or expired redemptions.</li>
        <li>Membership terminated for violation of our Terms (including fraud).</li>
        <li>Dissatisfaction with a specific Participating Location or menu item.</li>
      </ul>
      <p>
        If you believe you were charged in error (duplicate charge, charge after
        cancellation, etc.), contact{" "}
        <a href="mailto:zionjetset@gmail.com">zionjetset@gmail.com</a> within
        14 days of the charge. We will review and, where appropriate, issue a refund
        through Stripe.
      </p>
      <p>
        Nothing in this policy limits refund rights that cannot be waived under
        applicable consumer protection law in your state or country.
      </p>

      <h2>7. Failed payments</h2>
      <p>
        If a payment fails, Stripe may retry the charge. If payment cannot be
        collected, your membership may be suspended until payment is successful.
        Redemptions may be denied while your account is not in good standing.
      </p>

      <h2>8. Price changes</h2>
      <p>
        We may change the subscription price with advance notice posted on our
        website or sent to the email on your account. Price changes apply to future
        billing cycles after notice. If you do not agree to a new price, cancel
        before your next renewal date.
      </p>

      <h2>9. Chargebacks</h2>
      <p>
        If you dispute a charge with your bank without contacting us first, we may
        suspend or terminate your membership while the dispute is investigated.
        Please email support before filing a chargeback so we can help resolve the
        issue.
      </p>

      <h2>10. Contact</h2>
      <p>
        Billing support:{" "}
        <a href="mailto:zionjetset@gmail.com">zionjetset@gmail.com</a>
        <br />
        Website: <a href="https://www.getclubpos.com">getclubpos.com</a>
      </p>
    </LegalPage>
  );
}
