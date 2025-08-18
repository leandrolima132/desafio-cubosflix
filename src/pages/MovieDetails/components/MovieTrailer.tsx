interface MovieTrailerProps {
  videoId: string;
}

export function MovieTrailer({ videoId }: MovieTrailerProps) {
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="w-full max-w-[1238px] mx-auto my-10 px-4">
      <h2 className="text-2xl font-semibold text-white mb-4">Trailer</h2>

      <div className="relative w-full pb-[56.25%] rounded-lg overflow-hidden shadow-lg">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={embedUrl}
          title="Trailer do Filme"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}
