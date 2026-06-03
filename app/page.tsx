export default function Home() {
  return (
    <main style={{minHeight: '100vh', backgroundColor: '#000000', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '16px'}}>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%', textAlign: 'center'}}>
        <h1 style={{color: '#FFB800', fontSize: '48px', fontWeight: 'bold', marginBottom: '16px', lineHeight: '1.1'}}>
          Club POS
        </h1>
        <ul style={{color: '#FFFFFF', fontSize: '18px', marginBottom: '24px', maxWidth: '400px', lineHeight: '1.7', textAlign: 'left', listStyle: 'none', padding: 0}}>
          <li style={{marginBottom: '10px'}}>✓ 7 redemptions per month</li>
          <li style={{marginBottom: '10px'}}>✓ Members only</li>
          <li>✓ Cancel anytime</li>
        </ul>
        <p style={{color: '#FFB800', fontSize: '28px', fontWeight: 'bold', marginBottom: '24px'}}>
          $14.99<span style={{fontSize: '16px', color: '#CCCCCC', fontWeight: 'normal'}}>/mo</span>
        </p>
        
        <a
          href="https://buy.stripe.com/cNieVddyQ2zY4a58LU8IU03"
          style={{display: 'inline-block', backgroundColor: '#FFB800', color: '#000000', fontWeight: 'bold', fontSize: '20px', padding: '16px 32px', borderRadius: '8px', textDecoration: 'none'}}
        >
          Join the Club — $14.99/mo
        </a>

        <div style={{marginTop: '32px', width: '100%', maxWidth: '600px', padding: '0 16px'}}>
          <h3 style={{color: '#FFFFFF', fontSize: '20px', fontWeight: 'bold', marginBottom: '16px'}}>While you&apos;re here — play Pizza Flap 🍕</h3>
          <div style={{width: '100%', aspectRatio: '9/16', border: '2px solid #FFB800', borderRadius: '8px', overflow: 'hidden'}}>
            <iframe 
              src="/game/pizza-flap.html" 
              style={{width: '100%', height: '100%', border: 'none'}}
              title="Pizza Flap Game"
              allow="autoplay"
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  )
}
