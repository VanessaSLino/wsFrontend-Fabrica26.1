import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import CardPersonagem from "@/components/CardPersonagem";
import { useFavoritos } from "@/hooks/useFavoritos";

const Favoritos = () => {
  const navegar = useNavigate();
  const { favoritos, alternarFavorito, eFavorito } = useFavoritos();

  // Mensagem quando não há favoritos
  if (favoritos.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <Button
            variant="outline"
            onClick={() => navegar("/")}
            className="mb-6 bg-gray-800 text-white border-gray-700 hover:bg-gray-950 hover:text-white"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar
          </Button>
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold gradient-hero bg-clip-text text-transparent mb-2">
              Favoritos
            </h1>
          </div>
          <div className="flex flex-col items-center justify-center py-16">
            <div className="card-personagem px-12 py-8">
              <p className="text-gray-700 text-lg">
                <strong>NENHUM PERSONAGEM FAVORITO ENCONTRADO.</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Button
          variant="outline"
          onClick={() => navegar("/")}
         className="mb-6 bg-gray-800 text-white border-gray-700 hover:bg-gray-950 hover:text-white"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar
        </Button>
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold gradient-hero bg-clip-text text-transparent mb-2">
            Favoritos
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {favoritos.map((personagem) => (
            <CardPersonagem
              key={personagem.id}
              personagem={personagem}
              eFavorito={eFavorito(personagem)}
              aoAlternarFavorito={alternarFavorito}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favoritos;