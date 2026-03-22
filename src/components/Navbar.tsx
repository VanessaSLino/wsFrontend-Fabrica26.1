import { Link, useLocation } from "react-router-dom";
import { Home, Heart } from "lucide-react";

const Navbar = () => {
  const localizacao = useLocation();

  // menu de navegacao
  const itensNav = [
    { caminho: "/", rotulo: "Início", icone: Home },
    { caminho: "/favoritos", rotulo: "Favoritos", icone: Heart },
  ];

  return (
    <nav className="bg-gray-900/90 text-white shadow-lg">
      <div className="w-full mx-auto px-8 py-6 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <h1 className="text-xl font-bold">Rick and Morty</h1>
        </div>

        <div className="flex space-x-1">
          {itensNav.map(({ caminho, rotulo, icone: Icone }) => {
            const estaAtivo = localizacao.pathname === caminho;
            return (
              <Link
                key={caminho}
                to={caminho}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${estaAtivo ? "bg-white/20 text-white" : "text-white/80 hover:bg-white/10 hover:text-white"}`}
              >
                <Icone size={18} />
                <span className="font-medium">{rotulo}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;