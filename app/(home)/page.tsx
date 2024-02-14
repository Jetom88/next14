import { Metadata } from "next";

// next가 자동으로 fetch된 url을 캐싱해줌 (next가 어떤 데이터를 얻었는지 기억함)
// 브라우저는 fetch 하지 않은 상태!

export const metadata: Metadata = {
  title: "Home",
};

const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
  await new Promise((resolve) => setTimeout(resolve, 10000));

  // front에서 console.log가 찍히지않고, 백엔드에서 찍히는 console.log임
  console.log("fetching");

  //처음 fetch된 데이터만 api 요청, 그 후 메모리에서 데이터를 가져옴
  const res = await fetch(URL);
  const json = await res.json();

  return json;
}

export default async function HomePage() {
  const movies = await getMovies();
  return <div>{JSON.stringify(movies)}</div>;
}
