interface MovieBackdropProps {
  backdropUrl: string;
  shadowLevel?: "none" | "light" | "medium" | "dark";
}

export function MovieBackdrop({
  backdropUrl,
  shadowLevel = "medium",
}: MovieBackdropProps) {
  const shadowMap: Record<typeof shadowLevel, string> = {
    none: "hidden",
    light:
      "bg-gradient-to-b from-gray-1/30 via-gray-1/40 to-gray-1/50 dark:from-gray-dark-1/30 dark:via-gray-dark-1/40 dark:to-gray-dark-1/50",
    medium:
      "bg-gradient-to-b dark:from-gray-dark-1/60 dark:via-gray-dark-1/70 dark:to-gray-dark-1/80",
    dark: "bg-gradient-to-b from-gray-1/80 via-gray-1/90 to-gray-1 dark:from-gray-dark-1/80 dark:via-gray-dark-1/90 dark:to-gray-dark-1",
  };

  return (
    <>
      <div
        className="absolute top-0 left-0 w-full h-[606px] bg-cover bg-center"
        style={{ backgroundImage: `url(${backdropUrl})` }}
      />
      <div
        className={`absolute inset-0 transition-colors ${shadowMap[shadowLevel]}`}
      />
    </>
  );
}
