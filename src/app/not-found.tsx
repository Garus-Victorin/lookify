import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#050505] flex items-center justify-center px-6">
      <div className="text-center">
        <div className="text-8xl font-black text-[#FF6B00]/20 mb-4">404</div>
        <h1 className="text-2xl font-bold text-white mb-3">Page introuvable</h1>
        <p className="text-[#A1A1AA] mb-8">
          La page que vous recherchez n&apos;existe pas.
        </p>
        <Link href="/"
          className="px-6 py-3 bg-[#FF6B00] text-white font-semibold rounded-xl hover:bg-[#FF6B00]/90 transition-colors">
          Retour à l&apos;accueil
        </Link>
      </div>
    </main>
  );
}
