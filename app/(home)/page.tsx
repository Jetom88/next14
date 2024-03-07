import { Metadata } from "next";
import Movie from "../../components/movie";
import styles from "../../styles/home.module.css";

// next가 자동으로 fetch된 url을 캐싱해줌 (next가 어떤 데이터를 얻었는지 기억함)
// 브라우저는 fetch 하지 않은 상태!

export const metadata: Metadata = {
  title: "Home",
};

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
  const res = await fetch(API_URL);
  const json = await res.json();

  return json;
}

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          poster_path={movie.poster_path}
          title={movie.title}
        />
      ))}
    </div>
  );
}
