export function MoviePoster({
  posterUrl,
  title,
}: {
  posterUrl: string;
  title: string;
}) {
  return (
    <img
      src={posterUrl}
      alt={`Poster de ${title}`}
      className="w-[382px] h-[582px] sm:w-[354px] sm:h-[542px] rounded-lg shadow-lg"
    />
  );
}
