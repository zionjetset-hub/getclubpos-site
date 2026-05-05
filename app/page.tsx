export default function Home() {
  return (
    <main style={{minHeight: '100vh', backgroundColor: '#000', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px'}}>
      <div style={{maxWidth: '600px', textAlign: 'center'}}>
        <h1 style={{fontSize: '48px', fontWeight: 'bold', marginBottom: '24px', lineHeight: '1.1'}}>
          Mike's Pizza Slice Club
        </h1>
        <p style={{fontSize: '20px', marginBottom: '32px', color: '#ccc'}}>
          One slice per day. Every day. For members only.
        </p>
        <h2 style={{fontSize: '30px', fontWeight: 'bold', marginBottom: '8px', color: '#FFB800'}}>
          $14.99
        </h2>
        <ul style={{fontSize: '18px', marginBottom: '32px', lineHeight: '1.6'}}>
          <li>1 slice per day, every four hours</li>
          <li>Cancel anytime</li>
        </ul>
        <a 
        href="https://buy.stripe.com/aFa4gz2Ucgq06id0fo8IU02"
          style={{display: 'inline-block', backgroundColor: '#FFB800', color: '#000', fontWeight: 'bold', fontSize: '20px', padding: '16px 32px', borderRadius: '8px', textDecoration: 'none'}}
        >
          Join Slice Club-$14.99/mo
        </a>
      </div>
    </main>
  );
}