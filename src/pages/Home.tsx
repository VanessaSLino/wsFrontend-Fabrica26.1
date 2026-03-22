import { useState } from "react";
import { Search, LayoutGrid, List as ListIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import CardPersonagem from "@/components/CardPersonagem";
import Paginacao from "@/components/Paginacao";
import { useFavoritos } from "@/hooks/useFavoritos";
import { useDadosPersonagem } from "@/hooks/useDadosPersonagem";

const Home = () => {
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [termoBusca, setTermoBusca] = useState("");
  const [modoVisualizacao, setModoVisualizacao] = useState<"grid" | "list">("grid");
  const { alternarFavorito, eFavorito } = useFavoritos();

  // Busca os personagens da API com paginas e busca pelo mnome
  const { personagens, carregando, totalPaginas } = useDadosPersonagem(paginaAtual, termoBusca);

  if (carregando) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg text-muted-foreground">Carregando personagens...</p>
      </div>
    );
  }

  // volta para primeira pagina ao mudar a buscar
  const aoMudarBusca = (valor: string) => {
    setTermoBusca(valor);
    setPaginaAtual(1);
  };

  const estiloLista = "grid grid-cols-1 gap-4 mb-8";
  const estiloGrade = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8";

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold gradient-hero bg-clip-text text-transparent mb-2">
            Personagens
          </h1>

          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="text"
              placeholder="Buscar personagem..."
              value={termoBusca}
              onChange={(e) => aoMudarBusca(e.target.value)}
              className="pl-10 bg-gray-800 text-white placeholder:text-gray-400 border-gray-950"
            />
          </div>

          <div className="flex items-center justify-center gap-2 mt-4">
            <button
              type="button"
              aria-label="Visualização em grade"
              aria-pressed={modoVisualizacao === "grid"}
              onClick={() => setModoVisualizacao("grid")}
              className={`inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm transition-colors ${
                modoVisualizacao === "grid"
                  ? "bg-gray-950 text-white border-gray-700"
                  : "bg-gray-800 text-white border-gray-700 hover:bg-gray-950"
              }`}
            >
              <LayoutGrid className="h-4 w-4" />
              Grade
            </button>
            <button
              type="button"
              aria-label="Visualização em lista"
              aria-pressed={modoVisualizacao === "list"}
              onClick={() => setModoVisualizacao("list")}
              className={`inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm transition-colors ${
                modoVisualizacao === "list"
                  ? "bg-gray-950 text-white border-gray-700"
                  : "bg-gray-800 text-white border-gray-700 hover:bg-gray-950"
              }`}
            >
              <ListIcon className="h-4 w-4" />
              Lista
            </button>
          </div>
        </div>

        <div className={modoVisualizacao === "grid" ? estiloGrade : estiloLista}>
          {personagens.map((personagem) => (
            <CardPersonagem
              key={personagem.id}
              personagem={personagem}
              eFavorito={eFavorito(personagem)}
              aoAlternarFavorito={alternarFavorito}
            />
          ))}
        </div>

        {totalPaginas > 1 && (
          <div className="flex justify-center">
            <Paginacao
              currentPage={paginaAtual}
              totalPages={totalPaginas}
              onPageChange={setPaginaAtual}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;