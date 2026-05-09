export default function Home() {
  return (
    <main style={{minHeight: '100vh', backgroundColor: '#000000', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '16px'}}>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%', textAlign: 'center'}}>
        <h1 style={{color: '#FFB800', fontSize: '48px', fontWeight: 'bold', marginBottom: '8px'}}>
          GET SLICED CLUB
        </h1>
        <p style={{color: '#FFFFFF', fontSize: '20px', marginBottom: '8px', maxWidth: '600px'}}>
          One slice per day, every day for members only
        </p>
        <p style={{color: '#CCCCCC', fontSize: '16px', marginBottom: '32px'}}>
          $14.99/mo • Cancel anytime
        </p>
        
        <a
          href="https://buy.stripe.com/cNieVddyQ2zY4a58LU8IU03"
          style={{display: 'inline-block', backgroundColor: '#FFB800', color: '#000000', fontWeight: 'bold', fontSize: '20px', padding: '16px 32px', borderRadius: '8px', textDecoration: 'none'}}
        >
          Join Slice Club - $14.99/mo
        </a>

        <div style={{marginTop: '32px', width: '100%', maxWidth: '600px', padding: '0 16px'}}>
          <h3 style={{color: '#FFFFFF', fontSize: '20px', fontWeight: 'bold', marginBottom: '16px'}}>Play Pizza Flap 🍕</h3>
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
