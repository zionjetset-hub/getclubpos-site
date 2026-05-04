export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen flex flex-col lg:flex-row">
      
      {/* LEFT: PRICING PITCH - 50% */}
      <div className="lg:w-1/2 p-8 flex flex-col justify-center">
        <h1 className="text-6xl font-bold text-[#FFB800] mb-4">CLUBPOS</h1>
        <p className="text-2xl mb-8 text-gray-300">The Operating System for Bodegas</p>
        
        <div className="border-2 border-[#FFB800] rounded-xl p-8 bg-gray-900">
          <h2 className="text-3xl font-bold mb-2 text-[#FFB800]">Model 1: Slice Club</h2>
          <p className="text-7xl font-bold mb-4">$12.99<span className="text-3xl text-gray-400">/mo</span></p>
          <ul className="text-lg mb-8 space-y-2 text-left">
            <li>✓ Unlimited arcade games in-store</li>
            <li>✓ Customer loyalty & rewards</li>
            <li>✓ Keep customers longer, sell more</li>
            <li>✓ New game every month</li>
          </ul>
          <button className="w-full bg-[#FFB800] text-black px-8 py-4 rounded-lg text-xl font-bold hover:bg-yellow-400">
            Start 14-Day Free Trial
          </button>
          <p className="text-sm text-gray-400 mt-4">No credit card required</p>
        </div>
      </div>

      {/* RIGHT: LIVE GAME DEMO - 50% */}
      <div className="lg:w-1/2 bg-gray-950 flex flex-col">
        <div className="p-4 text-center bg-[#FFB800] text-black">
          <h3 className="text-xl font-bold">LIVE DEMO: Tap to Play Pizza Flap</h3>
        </div>
        <iframe
          src="/game/pizza-flap.html"
          className="w-full h-screen border-0"
          title="Pizza Flap"
        />
      </div>

    </main>
  );
}
