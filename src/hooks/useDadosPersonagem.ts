import { useEffect, useState } from "react";
import { Personagem } from "./components/CardPersonagem";

const CHAVE_STORAGE = "dadosPersonagem";

export function useDadosPersonagem(pagina: number = 1, nomeBusca: string = "") {
  const [personagens, setPersonagens] = useState<Personagem[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [totalPaginas, setTotalPaginas] = useState(1);

  useEffect(() => {
    const dadosSalvos = localStorage.getItem(CHAVE_STORAGE);

    if (dadosSalvos) {
      setPersonagens(JSON.parse(dadosSalvos));
      setCarregando(false);
    } else {
      const buscarPersonagens = async () => {
        try {
          const resultados: Personagem[] = [];

          const paramNome = nomeBusca ? `&name=${encodeURIComponent(nomeBusca)}` : "";
    const resposta = await fetch(`https://rickandmortyapi.com/api/character?page=${pagina}${paramNome}`);

    if (!resposta.ok) {
      setPersonagens([]);
      setTotalPaginas(1);
    return;
    }

    const dados = await resposta.json();

    const mapeados: Personagem[] = dados.results.map((p: any) => ({
      id: p.id,
      nome: p.name,
      status: p.status,
      especie: p.species,
      genero: p.gender,
      imagem: p.image,
      origem: p.origin.name,
      localizacao: p.location.name,
      episodios: p.episode,
    }));

setPersonagens(mapeados);
setTotalPaginas(dados.info.pages);

          
        } catch (err) {
          console.error("Erro ao buscar personagens:", err);
        } finally {
          setCarregando(false);
        }
      };

      buscarPersonagens();
    }
  }, [pagina, nomeBusca]);

  return { personagens, carregando, totalPaginas };
}
