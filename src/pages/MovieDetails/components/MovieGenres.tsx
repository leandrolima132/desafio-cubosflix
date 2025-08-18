import { Badge } from "../../../components/Badge";
import type { Genre } from "../../../shared/types/movieDetails";

export function MovieGenres({ genres }: { genres: Genre[] }) {
  return (
    <Badge title="Gêneros" uppercaseTitle={false}>
      <div className="flex flex-wrap">
        {genres.map((genre) => (
          <span key={genre.id} className="mr-2 bg-[#C150FF2E] p-1 rounded-sm">
            {genre.name}
          </span>
        ))}
      </div>
    </Badge>
  );
}
