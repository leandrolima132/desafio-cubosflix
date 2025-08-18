import IconChevronLeft from "/assets/icons/chevron-left.svg";
import IconChevronRight from "/assets/icons/chevron-right.svg";

interface Props {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  maxVisiblePages: number;
  loading?: boolean;
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  maxVisiblePages,
  loading,
}: Props) {
  const half = Math.floor((maxVisiblePages - 1) / 2);
  let startPage = Math.max(1, currentPage - half);
  let endPage = startPage + maxVisiblePages - 1;

  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }

  const pages = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i
  );

  const showEllipsis = maxVisiblePages === 3 && endPage < totalPages;

  return loading ? (
    <PaginationSkeleton />
  ) : (
    <div className="flex justify-center items-center gap-2 py-4 sm:py-6">
      {/* ← */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`flex justify-center items-center w-16 h-11 sm:w-12 sm:h-11 rounded text-white disabled:opacity-50 ${
          currentPage === 1 ? "bg-gray-dark-3" : "bg-purple-dark-9"
        }`}
      >
        <img src={IconChevronLeft} alt="Anterior" />
      </button>

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`w-[50px] h-11 sm:w-12 sm:h-11 rounded transition-colors ${
            page === currentPage
              ? "bg-gray-dark-3 text-white font-bold"
              : "bg-purple-dark-9 text-white hover:brightness-110"
          }`}
        >
          {page}
        </button>
      ))}

      {showEllipsis && (
        <button
          onClick={() => onPageChange(endPage + 1)}
          className="w-[50px] h-11 sm:w-12 sm:h-11 rounded bg-purple-dark-9 text-white"
        >
          ...
        </button>
      )}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex justify-center items-center w-16 h-11 sm:w-12 sm:h-11 rounded bg-purple-dark-9 text-white disabled:opacity-50"
      >
        <img src={IconChevronRight} alt="Próximo" />
      </button>
    </div>
  );
}

function PaginationSkeleton() {
  return (
    <div className="flex justify-center items-center gap-2 py-4 sm:py-6 animate-pulse">
      <div className="w-16 h-11 sm:w-12 sm:h-11 rounded bg-gray-dark-3" />

      {Array.from({ length: 3 }).map((_, index) => (
        <div
          key={index}
          className="w-[50px] h-11 sm:w-12 sm:h-11 rounded bg-gray-dark-3"
        />
      ))}

      <div className="w-[50px] h-11 sm:w-12 sm:h-11 rounded bg-gray-dark-3" />

      <div className="w-16 h-11 sm:w-12 sm:h-11 rounded bg-gray-dark-3" />
    </div>
  );
}
