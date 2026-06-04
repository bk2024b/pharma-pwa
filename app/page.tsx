export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white flex flex-col">
      
      {/* HEADER */}
      <header className="p-6 flex justify-between items-center">
        <h1 className="text-xl font-bold text-green-700">
          PharmaLocator
        </h1>

        <a
          href="/login"
          className="px-4 py-2 bg-green-600 text-white rounded-lg"
        >
          Connexion
        </a>
      </header>

      {/* HERO */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-4xl font-bold text-gray-800 max-w-2xl">
          Trouvez une pharmacie ouverte et vos médicaments en quelques secondes
        </h2>

        <p className="mt-4 text-gray-600 max-w-xl">
          Géolocalisation des pharmacies, disponibilité des médicaments,
          et pharmacies de garde en temps réel.
        </p>

        <div className="mt-6 flex gap-4">
          <a
            href="/map"
            className="px-6 py-3 bg-green-600 text-white rounded-lg"
          >
            Voir la carte
          </a>

          <a
            href="/pharmacies"
            className="px-6 py-3 border border-green-600 text-green-700 rounded-lg"
          >
            Explorer
          </a>
        </div>
      </section>

      {/* FEATURES */}
      <section className="grid md:grid-cols-3 gap-6 p-10 bg-white">
        <div className="p-6 border rounded-xl">
          <h3 className="font-bold text-lg">📍 Géolocalisation</h3>
          <p className="text-gray-600 mt-2">
            Trouvez les pharmacies les plus proches de vous.
          </p>
        </div>

        <div className="p-6 border rounded-xl">
          <h3 className="font-bold text-lg">💊 Médicaments</h3>
          <p className="text-gray-600 mt-2">
            Vérifiez la disponibilité avant de vous déplacer.
          </p>
        </div>

        <div className="p-6 border rounded-xl">
          <h3 className="font-bold text-lg">🚨 Pharmacies de garde</h3>
          <p className="text-gray-600 mt-2">
            Accédez aux urgences pharmaceutiques 24/7.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="p-10 text-center bg-green-50">
        <h3 className="text-2xl font-bold">
          Une nouvelle façon d’accéder aux soins
        </h3>

        <p className="mt-2 text-gray-600">
          Rapide. Simple. Intelligent.
        </p>

        <a
          href="/register"
          className="mt-6 inline-block px-6 py-3 bg-green-600 text-white rounded-lg"
        >
          Commencer maintenant
        </a>
      </section>

      {/* FOOTER */}
      <footer className="p-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} PharmaLocator — Tous droits réservés
      </footer>
    </main>
  );
}