import { getMovieByPath } from "@/utils/movieClient";
import React from "react";
import MediaCard from "../media-card/mediaCard";
import styles from "./Popular.module.scss";

const Popular = async () => {
  const { results } = await getMovieByPath("/movie/popular");
  const popularMovies = results.slice(0, 6);

  return (
    <div>
      <h2>Les Plus Populaires</h2>
      <div className={`${styles.container}`}>
        {results.map((movie) => (
            <MediaCard key={movie.id} media={movie} />
        ))}
      </div>
    </div>
  );
};

export default Popular;
