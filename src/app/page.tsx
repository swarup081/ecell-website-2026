import Navbar from "~/components/layout/Navbar";
import Hero from "~/components/home/Hero";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#030014] text-white">
      <Navbar />
      <Hero />
      {/* Placeholder for future sections */}
      <section className="h-screen w-full relative z-10 flex items-center justify-center border-t border-white/5">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-700">More content coming soon...</h2>
        </div>
      </section>
    </main>
  );
}
