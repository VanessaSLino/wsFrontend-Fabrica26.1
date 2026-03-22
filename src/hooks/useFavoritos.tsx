import { useState, useEffect } from "react";
import { Personagem } from "@/components/CardPersonagem";

const CHAVE_FAVORITOS = "rickmorty-favoritos";

export const useFavoritos = () => {
  const [favoritos, setFavoritos] = useState<Personagem[]>([]);

  useEffect(() => {
    const salvo = localStorage.getItem(CHAVE_FAVORITOS);
    if (salvo) {
      try {
        setFavoritos(JSON.parse(salvo));
      } catch (erro) {
        console.error("Erro ao carregar favoritos:", erro);
      }
    }
  }, []);

  const salvarFavoritos = (novosFavoritos: Personagem[]) => {
    setFavoritos(novosFavoritos);
    localStorage.setItem(CHAVE_FAVORITOS, JSON.stringify(novosFavoritos));
  };

  // Adiciona ou remove um personagem dos favoritos
  const alternarFavorito = (personagem: Personagem) => {
    const eFavorito = favoritos.some(fav => fav.id === personagem.id);

    if (eFavorito) {
      const novosFavoritos = favoritos.filter(fav => fav.id !== personagem.id);
      salvarFavoritos(novosFavoritos);
    } else {
      const novosFavoritos = [...favoritos, personagem];
      salvarFavoritos(novosFavoritos);
    }
  };

  // Verifica se um personagem já ta nos favoritos
  const eFavorito = (personagem: Personagem) => {
    return favoritos.some(fav => fav.id === personagem.id);
  };

  return {
    favoritos,
    alternarFavorito,
    eFavorito,
  };
};