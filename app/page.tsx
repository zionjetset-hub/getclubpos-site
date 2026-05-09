export default function Home() {
  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
      <div className="flex flex-col items-center justify-center w-full">
        <h1 className="text-yellow-400 text-4xl md:text-6xl font-bold mb-2 text-center">
          GET SLICED CLUB
        </h1>
        <p className="text-white text-lg md:text-xl mb-2 text-center max-w-2xl">
          One slice per day, every day for members only
        </p>
        <p className="text-gray-300 text-base mb-8 text-center">
          $14.99/mo • Cancel anytime
        </p>
        
        <a
          href="https://buy.stripe.com/cNieVdyQ2zY4a58LU8IU03"
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
    </main>
  )
}
