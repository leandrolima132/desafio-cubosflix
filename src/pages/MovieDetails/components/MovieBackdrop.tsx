export function MovieBackdrop({ backdropUrl }: { backdropUrl: string }) {
  return (
    <>
      <div
        className="absolute top-0 left-0 w-full h-[606px] bg-cover bg-center"
        style={{ backgroundImage: `url(${backdropUrl})` }}
      />
      <div className="absolute inset-0 bg-gray-dark-1/80 bg-opacity-70" />
    </>
  );
}
