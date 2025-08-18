import * as Popover from "@radix-ui/react-popover";
import type { Genre } from "../../../services/getGenres";

interface Props {
  language: string;
  setLanguage: (value: string) => void;
  genres: number[];
  setGenres: (value: number[]) => void;
  availableGenres: Genre[];
  loadingGenres: boolean;
}

export function FilterPopover({
  language,
  setLanguage,
  genres,
  setGenres,
  availableGenres,
  loadingGenres,
}: Props) {
  const handleGenreChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = Array.from(e.target.selectedOptions).map((opt) =>
      parseInt(opt.value)
    );
    setGenres(selected);
  };

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button
          className="bg-purple-dark-9 text-white px-4 py-2 rounded hover:bg-purple-dark-10 transition-colors flex items-center gap-2"
          aria-label="Abrir filtros"
        >
          <img
            src="/assets/icons/filter.svg"
            alt="Filtros"
            className="w-5 h-5"
          />
        </button>
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content
          side="bottom"
          align="end"
          className="bg-gray-dark-2 border border-gray-dark-6 rounded-md shadow-lg p-4 w-[320px] z-[999] data-[state=open]:animate-fadeIn"
          sideOffset={8}
        >
          <div className="flex flex-col gap-4">
            {/* Idioma */}
            <div className="flex flex-col gap-1">
              <label htmlFor="language" className="text-sm text-gray-dark-10">
                Idioma
              </label>
              <select
                id="language"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="bg-gray-dark-3 border border-gray-dark-6 rounded-md p-2 text-gray-dark-12"
              >
                <option value="pt-BR">Português</option>
                <option value="en-US">Inglês</option>
              </select>
            </div>

            {/* Gêneros */}
            <div className="flex flex-col gap-1">
              <label htmlFor="genres" className="text-sm text-gray-dark-10">
                Gêneros
              </label>
              {loadingGenres ? (
                <p className="text-sm text-gray-dark-8">
                  Carregando gêneros...
                </p>
              ) : (
                <select
                  id="genres"
                  multiple
                  value={genres.map(String)}
                  onChange={handleGenreChange}
                  className="bg-gray-dark-3 border border-gray-dark-6 rounded-md p-2 text-gray-dark-12 h-32"
                >
                  {availableGenres.map((genre: Genre) => (
                    <option key={genre.id} value={genre.id}>
                      {genre.name}
                    </option>
                  ))}
                </select>
              )}
            </div>
          </div>
          <Popover.Arrow className="fill-gray-dark-6" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
