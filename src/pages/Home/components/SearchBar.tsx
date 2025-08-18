interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function SearchBar({ value, onChange }: Props) {
  return (
    <div className="flex items-center gap-2 bg-gray-dark-3 border border-gray-dark-6 px-4 py-2 rounded-sm w-full max-w-md shadow-sm focus-within:ring-2 focus-within:ring-purple-dark-10">
      <input
        type="text"
        placeholder="Pesquise por filmes"
        value={value}
        onChange={onChange}
        className="flex-1 bg-transparent text-gray-dark-12 placeholder:text-gray-dark-9 outline-none"
      />
      <button
        aria-label="Buscar"
        className="text-gray-dark-9 hover:text-purple-dark-11 transition-colors"
      >
        <img src="/assets/search.svg" alt="Buscar" className="w-6 h-6" />
      </button>
    </div>
  );
}
