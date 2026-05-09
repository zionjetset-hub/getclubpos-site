export default function Home() {
  return (
    <main style={{minHeight: '100vh', backgroundColor: '#000', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px'}}>
      <div style={{maxWidth: '600px', textAlign: 'center'}}>
        <h1 style={{fontSize: '48px', fontWeight: 'bold', marginBottom: '24px', lineHeight: '1.1'}}>
          Slice Club
        </h1>
        <p style={{fontSize: '20px', marginBottom: '32px', color: '#ccc'}}>
          One slice per day. Every day. For members only.
        </p>
        <h2 style={{fontSize: '30px', fontWeight: 'bold', marginBottom: '8px', color: '#FFB800'}}>
          $14.99
        </h2>
        <ul style={{fontSize: '18px', marginBottom: '32px', lineHeight: '1.6'}}>
          <li>1 slice per day. Every day.</li>
          <li>Cancel anytime</li>
        </ul>
         <a
          href="https://buy.stripe.com/cNieVddyQ2zY4a58LU8IU03"
          style={{display: 'inline-block', backgroundColor: '#FFB800', color: '#000', fontWeight: 'bold', fontSize: '20px', padding: '16px 32px', borderRadius: '8px', textDecoration: 'none'}}
        >
          Join Slice Club - $14.99/mo
        </a>

        <div className="mt-8 w-full max-w-2xl mx-auto px-4">
          <h3 className="text-white text-xl font-bold mb-4 text-center">Play Pizza Flap 🍕</h3>
          <div className="w-full aspect-[9/16] md:aspect-[4/3] border-2 border-yellow-400 rounded-lg overflow-hidden">
            <iframe 
              src="/game/pizza-flap.html" 
              className="w-full h-full"
              title="Pizza Flap Game"
              allow="autoplay"
            ></iframe>
          </div>
          <p className="text-gray-400 text-sm mt-2 text-center">Score 10+ to unlock a free slice deal</p>
        </div>

  </div>
      </div>
    </main>
  );
}
