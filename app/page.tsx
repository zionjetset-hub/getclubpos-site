export default function Home() {
  return (
    <main style={{
      backgroundColor: 'black', 
      color: 'white', 
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'row'
    }}>
      
      {/* LEFT: PRICING */}
      <div style={{width: '50%', padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
        <h1 style={{fontSize: '60px', fontWeight: 'bold', color: '#FFB800', marginBottom: '16px'}}>CLUBPOS</h1>
        <p style={{fontSize: '24px', marginBottom: '32px', color: '#ccc'}}>The Operating System for Bodegas</p>
        
        <div style={{border: '2px solid #FFB800', borderRadius: '12px', padding: '32px', backgroundColor: '#111'}}>
          <h2 style={{fontSize: '30px', fontWeight: 'bold', marginBottom: '8px', color: '#FFB800'}}>Model 1: Slice Club</h2>
          $14.99
<ul style={{fontSize: '18px', marginBottom: '32px', lineHeight: '1.6'}}>
  <li>✓ Unlimited arcade games in-store</li>
  <li>✓ Customer loyalty & rewards</li>
  <li>✓ Keep customers longer, sell more</li>
  <li>✓ New game every month</li>
</ul>
<a
  href="https://buy.stripe.com/aFa4gz2Ucgq06id0fo8IU02"
  target="_blank"
  style={{width: '100%', backgroundColor: '#FFB800', color: 'black'}}
>
  Join Slice Club-$14.99/mo
</a>          
      {/* RIGHT: GAME */}
      <div style={{width: '50%', backgroundColor: '#0a0a0a', display: 'flex', flexDirection: 'column'}}>
        <div style={{padding: '16px', textAlign: 'center', backgroundColor: '#FFB800', color: 'black'}}>
          <h3 style={{fontSize: '20px', fontWeight: 'bold', margin: 0}}>LIVE DEMO: Tap to Play Pizza Flap</h3>
        </div>
        <iframe
          src="/game/pizza-flap.html"
          style={{width: '100%', height: '100%', border: 'none', flex: 1}}
          title="Pizza Flap"
        />
      </div>

    </main>
  );
}