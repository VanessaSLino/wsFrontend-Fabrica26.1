import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PaginacaoProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Paginacao = ({ currentPage, totalPages, onPageChange }: PaginacaoProps) => {
  // Calcula quais páginas mostrar na paginação
  const obterPaginasVisiveis = () => {
    const paginas = [];
    const mostrarReticencias = totalPages > 7;

    if (!mostrarReticencias) {
      for (let i = 1; i <= totalPages; i++) {
        paginas.push(i);
      }
    } else {
      paginas.push(1);

      if (currentPage > 3) {
        paginas.push('...');
      }

      const inicio = Math.max(2, currentPage - 1);
      const fim = Math.min(totalPages - 1, currentPage + 1);

      for (let i = inicio; i <= fim; i++) {
        if (!paginas.includes(i)) {
          paginas.push(i);
        }
      }

      if (currentPage < totalPages - 2) {
        paginas.push('...');
      }

      if (!paginas.includes(totalPages)) {
        paginas.push(totalPages);
      }
    }

    return paginas;
  };

  return (
    <div className="flex items-center justify-center space-x-2">
      {/* Botão página anterior */}
      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="h-9 w-9 p-0 bg-gray-800 text-white border-gray-700 hover:bg-gray-950 hover:text-white"
      >
        <ChevronLeft size={16} />
      </Button>

      {obterPaginasVisiveis().map((pagina, indice) => (
        <div key={indice}>
          {pagina === '...' ? (
            <span className="px-3 py-2 text-white drop-shadow">...</span>
          ) : (
            <Button
              variant={currentPage === pagina ? "default" : "outline"}
              size="sm"
              onClick={() => onPageChange(pagina as number)}
              className={cn(
                "h-9 w-9 p-0",
                currentPage === pagina
                  ? "bg-gray-950 text-white border-gray-700"
                  : "bg-gray-800 text-white border-gray-700 hover:bg-gray-950 hover:text-white"
              )}
            >
              {pagina}
            </Button>
          )}
        </div>
      ))}

      {/* Botão próxima página */}
      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="h-9 w-9 p-0 bg-gray-800 text-white border-gray-700 hover:bg-gray-950 hover:text-white"
      >
        <ChevronRight size={16} />
      </Button>
    </div>
  );
};

export default Paginacao;