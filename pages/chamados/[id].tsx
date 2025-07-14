import { useRouter } from 'next/router';
import { useState } from 'react';

interface Comentario {
  id: string;
  texto: string;
  data: string;
  autor: string;
}

interface Chamado {
  id: string;
  titulo: string;
  descricao: string;
  prioridade: string;
  status: string;
  comentarios: Comentario[];
}

export default function DetalhesChamado() {
  const router = useRouter();
  const { id } = router.query;
  
  const [chamado, setChamado] = useState<Chamado>({
    id: id as string,
    titulo: "Título do Chamado",
    descricao: "Descrição do chamado",
    prioridade: "Alta",
    status: "Aberto",
    comentarios: []
  });
  
  const [novoComentario, setNovoComentario] = useState("");

  const handleSalvar = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica para salvar as alterações do chamado
    console.log("Salvando alterações:", chamado);
  };

  const handleAdicionarComentario = (e: React.FormEvent) => {
    e.preventDefault();
    if (!novoComentario.trim()) return;

    const comentario: Comentario = {
      id: Date.now().toString(),
      texto: novoComentario,
      data: new Date().toISOString(),
      autor: "Usuário" // Substituir pelo usuário real
    };

    setChamado(prev => ({
      ...prev,
      comentarios: [...prev.comentarios, comentario]
    }));
    setNovoComentario("");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <header className="w-full bg-[#007767] py-6 shadow-md">
        <h1 className="text-center text-white text-3xl font-bold">
          📝 Editar Chamado
        </h1>
      </header>

      <main className="w-full max-w-4xl p-6 space-y-6">
        <div className="bg-white rounded-xl shadow-md p-6">
          <form onSubmit={handleSalvar}>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Título</label>
                <input
                  type="text"
                  value={chamado.titulo}
                  onChange={e => setChamado({...chamado, titulo: e.target.value})}
                  className="mt-1 w-full rounded-md border border-gray-300 p-2"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">Descrição</label>
                <textarea
                  value={chamado.descricao}
                  onChange={e => setChamado({...chamado, descricao: e.target.value})}
                  className="mt-1 w-full rounded-md border border-gray-300 p-2"
                  rows={4}
                />
              </div>

              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700">Prioridade</label>
                  <select
                    value={chamado.prioridade}
                    onChange={e => setChamado({...chamado, prioridade: e.target.value})}
                    className="mt-1 w-full rounded-md border border-gray-300 p-2"
                  >
                    <option value="Baixa">Baixa</option>
                    <option value="Média">Média</option>
                    <option value="Alta">Alta</option>
                  </select>
                </div>

                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700">Status</label>
                  <select
                    value={chamado.status}
                    onChange={e => setChamado({...chamado, status: e.target.value})}
                    className="mt-1 w-full rounded-md border border-gray-300 p-2"
                  >
                    <option value="Aberto">Aberto</option>
                    <option value="Em Andamento">Em Andamento</option>
                    <option value="Concluído">Concluído</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#007767] text-white py-2 px-4 rounded-lg hover:bg-[#007767e0] transition"
              >
                Salvar Alterações
              </button>
            </div>
          </form>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Linha do Tempo</h2>
          
          <form onSubmit={handleAdicionarComentario} className="mb-6">
            <textarea
              value={novoComentario}
              onChange={e => setNovoComentario(e.target.value)}
              placeholder="Adicione um comentário..."
              className="w-full rounded-md border border-gray-300 p-2"
              rows={3}
            />
            <button
              type="submit"
              className="mt-2 bg-[#007767] text-white py-2 px-4 rounded-lg hover:bg-[#007767e0] transition"
            >
              Adicionar Comentário
            </button>
          </form>

          <div className="space-y-4">
            {chamado.comentarios.map(comentario => (
              <div key={comentario.id} className="border-l-4 border-[#007767] pl-4 py-2">
                <p className="text-gray-700">{comentario.texto}</p>
                <div className="text-sm text-gray-500 mt-1">
                  {new Date(comentario.data).toLocaleDateString()} - {comentario.autor}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}