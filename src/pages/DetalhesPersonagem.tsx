import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Star } from "lucide-react";
import { useFavoritos } from "@/hooks/useFavoritos";
import { useDadosPersonagem } from "@/hooks/useDadosPersonagem";

const DetalhesPersonagem = () => {
  const { id } = useParams();
  const navegar = useNavigate();
  const { alternarFavorito, eFavorito } = useFavoritos();

  const { personagens, carregando } = useDadosPersonagem();

  if (carregando) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-lg text-muted-foreground">Carregando personagem...</p>
      </div>
    );
  }

  const personagem = personagens.find((p) => p.id === parseInt(id || "0"));

      if (!personagem) {
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
          <div className="flex items-center justify-center py-16">
            <div className="card-personagem px-12 py-8 text-center">
              <h1 className="text-4xl font-bold mb-4 text-gray-800">ERROR 404</h1>
              <p className="text-gray-700">
                <strong>PERSONAGEM NÃO ENCONTRADO.</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Define cor do status do personagem
  const corStatus: Record<string, string> = {
    Alive: "bg-green-500",
    Dead: "bg-red-500",
    unknown: "bg-gray-400",
  };

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

        <Card className="max-w-2xl mx-auto">
          <CardHeader className="text-center pb-4">
            <div className="flex justify-between items-start mb-4">
              <CardTitle className="text-3xl font-bold capitalize">
                {personagem.nome}
              </CardTitle>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => alternarFavorito(personagem)}
                className="shrink-0"
              >
                <Star
                  className={`h-5 w-5 ${
                    eFavorito(personagem)
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-muted-foreground"
                  }`}
                />
              </Button>
            </div>
            <div className="text-lg text-muted-foreground font-mono">
              #{personagem.id.toString().padStart(3, "0")}
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="flex justify-center">
              <img
                src={personagem.imagem}
                alt={personagem.nome}
                className="w-48 h-48 object-contain rounded-full"
                loading="lazy"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Informações</h3>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Status:</span>
                    <span className="flex items-center gap-1 font-mono">
                      <span className={`w-2 h-2 rounded-full ${corStatus[personagem.status] ?? "bg-gray-400"}`} />
                      {personagem.status}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Espécie:</span>
                    <span className="font-mono">{personagem.especie}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Gênero:</span>
                    <span className="font-mono">{personagem.genero}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Origem:</span>
                    <span className="font-mono">{personagem.origem}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Localização:</span>
                    <span className="font-mono">{personagem.localizacao}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Episódios</h3>
                <p className="text-sm text-muted-foreground">
                  Aparece em {personagem.episodios.length} episódio(s)
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DetalhesPersonagem;