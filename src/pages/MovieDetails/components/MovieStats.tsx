import React from "react";
import ProgressCircle from "./ProgressCircle";
import { Badge } from "../../../components/Badge";

interface MovieStatsProps {
  popularity: number;
  voteCount: number;
  voteAverage: number;
}

export const MovieStats: React.FC<MovieStatsProps> = ({
  popularity,
  voteCount,
  voteAverage,
}) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <Badge title="Popularidade" description={popularity.toFixed(0)} />
      <Badge title="Votos" description={voteCount.toString()} />
      <div className="flex items-center justify-center h-full">
        <ProgressCircle percentage={Math.round(voteAverage * 10)} />
      </div>
    </div>
  );
};

export default MovieStats;
