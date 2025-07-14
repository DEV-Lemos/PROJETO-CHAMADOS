//import { useRouter } from "next/router";
interface Chamado {
  titulo: string;
  descricao: string;
  prioridade: string;
}

export default function NovoChamado() {
  //const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // lógica de envio aqui
    const campos = new FormData(e.target as HTMLFormElement);
    const data: Chamado = {
      titulo: campos.get("titulo") as string,
      descricao: campos.get("descricao") as string,
      prioridade: campos.get("prioridade") as string
    };
    console.log(data);
    //alert("Chamado criado!");
    //router.push("/"); // redireciona de volta à lista
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <header className="w-full bg-[#007767]  py-6 shadow-md">
        <h1 className="text-center text-white text-3xl font-bold">
          ➕ Novo Chamado
        </h1>
      </header>

      <main className="w-full max-w-xl bg-white mt-6 rounded-xl shadow-md p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Título
            </label>
            <input name="titulo"
              type="text"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#007767]"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700 focus:ring-[#007767]">
              Descrição
            </label>
            <textarea name="descricao"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#007767]"
              rows={4}
              required
            ></textarea>
          </div>
          <div>
            <label htmlFor="prioridade" className="block mb-1 font-medium text-gray-700"> Prioridade</label>
            <select id="prioridade" name="prioridade" className="w-md border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#007767]">
              <option value="alta">🟥 | Alta</option>
              <option value="media">🟨 | Média</option>
              <option value="baixa">🟩 | Baixa</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-[#007767] text-white py-2 px-4 rounded-lg hover:bg-[#007767e0] transition cursor-pointer"
          >
            Criar Chamado
          </button>
        </form>
      </main>
    </div>
  );
}
