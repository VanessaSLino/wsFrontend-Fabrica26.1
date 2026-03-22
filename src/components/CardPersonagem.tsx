import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

//dados dos personagens
export interface Personagem {
  id: number;
  nome: string;
  status: string;
  especie: string;
  genero: string;
  imagem: string;
  origem: string;
  localizacao: string;
  episodios: string[];
}

interface CardPersonagemProps {
  personagem: Personagem;
  eFavorito: boolean;
  aoAlternarFavorito: (personagem: Personagem) => void;
}

const CardPersonagem = ({ personagem, eFavorito, aoAlternarFavorito }: CardPersonagemProps) => {
  const navegar = useNavigate();

  // Navega pras paginas
  const aoClicarNoCard = () => {
    navegar(`/detalhes/${personagem.id}`);
  };

  const corStatus = {
    Alive: "bg-green-500",
    Dead: "bg-red-500",
    unknown: "bg-gray-400",
  }[personagem.status] ?? "bg-gray-400";

  return (
    <div
      className="card-personagem relative group cursor-pointer"
      onClick={aoClicarNoCard}
    >
      <button
        onClick={(e) => {
          e.stopPropagation();
          aoAlternarFavorito(personagem);
        }}
        className={cn(
          "absolute top-3 right-3 z-10 p-1.5 rounded-full transition-all",
          eFavorito
            ? "bg-accent text-white shadow-glow"
            : "bg-white/80 text-muted-foreground hover:bg-accent hover:text-white"
        )}
      >
        <Star size={16} className={eFavorito ? "fill-current" : ""} />
      </button>

      <div className="text-center">
        <div className="mb-3">
          <img
            src={personagem.imagem}
            alt={personagem.nome}
            className="w-24 h-24 mx-auto object-contain group-hover:scale-110 transition-transform duration-300"
          />
        </div>

        <div className="space-y-2">
          <div className="text-sm text-muted-foreground font-medium">
            #{personagem.id.toString().padStart(3, '0')}
          </div>

          <h3 className="font-bold text-lg capitalize text-foreground">
            {personagem.nome}
          </h3>

          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <span className={cn("w-2 h-2 rounded-full", corStatus)} />
            {personagem.status} — {personagem.especie}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPersonagem;







