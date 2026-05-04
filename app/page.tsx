export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="h-screen flex flex-col items-center justify-center px-4">
        <h1 className="text-6xl md:text-9xl font-black text-center">
          <span className="text-[#FFB800]">SLICE</span> GAMES
        </h1>
        <p className="text-xl text-gray-300 mt-6 text-center max-w-2xl">
          The home of Pizza Flap and the future of indie games
        </p>
      </section>
      
      <section className="py-20 px-4">
        <h2 className="text-4xl font-bold text-center mb-8">PIZZA FLAP</h2>
        <div className="max-w-4xl mx-auto">
        <div className="w-full h-[600px] border-2 border-[#FFB800] flex items-center justify-center">
  <p className="text-2xl">Pizza Flap - Coming Soon</p>
</div>

        </div>
      </section>
    </main>
  )
}