import Link from "next/link";

export default function ListaChamados() {
  const chamados = [
    { id: 1, titulo: "Impressora não liga" },
    { id: 2, titulo: "Sistema fora do ar" },
    { id: 3, titulo: "Luz do setor piscando" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <header className="w-full bg-[#007767] py-6 shadow-md">
        <h1 className="text-center text-white text-3xl font-bold">
          📋 Chamados
        </h1>
      </header>

      <main className="w-full min-w-6xl bg-white mt-6 rounded-xl shadow-md p-6 space-y-4">
        <Link href="/chamados/novo">
          <button className="bg-[#007767] hover:bg-[#007767d8] text-white font-semibold py-2 px-6 rounded-xl shadow-md transition duration-300 cursor-pointer">
            ➕ Novo Chamado
          </button>
        </Link>
        <br />
        {chamados.map((chamado) => (
          <Link key={chamado.id} href={`/chamados/${chamado.id}`}>
            <div className="p-4 rounded-lg border border-gray-200 hover:bg-purple-50 hover:shadow transition duration-200 cursor-pointer ">
              <span className="text-gray-800">{chamado.titulo}</span>
            </div>
          </Link>
        ))}
      </main>
      <footer className="mt-6"></footer>
    </div>
  );
}
