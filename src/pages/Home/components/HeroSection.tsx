import { SearchBar } from "./SearchBar";

interface Props {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}

export function HeroSection({ searchTerm, setSearchTerm }: Props) {
  return (
    <section className="relative h-[564px] overflow-hidden">
      <div className="absolute inset-0 bg-gray-dark-1/90 bg-[url('/assets/home-background.svg')] bg-cover bg-center bg-no-repeat z-0" />
      <div className="relative z-10 flex py-6 flex-col items-center h-full px-6 text-center gap-4">
        <SearchBar
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </section>
  );
}
