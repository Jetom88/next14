"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [isLoding, setIsLoding] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const res = await fetch(
      "https://nomad-movies.nomadcoders.workers.dev/movies"
    );

    const json = await res.json();

    setMovies(json);
    setIsLoding(false);
  };

  useEffect(() => {
    getMovies();
  }, []);
  return <div>{isLoding ? "Loding..." : JSON.stringify(movies)}</div>;
}
