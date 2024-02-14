import { API_URL } from "../../../(home)/page";

async function getMovie(id: string) {
  const res = await fetch(`${API_URL}/${id}`);
  return res.json();
}

async function getVideos(id: string) {
  const res = await fetch(`${API_URL}/${id}/videos`);
  return res.json();
}

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  // await이 여러개면 순차적으로 처리함 따라서 비동기적으로 동시에 실행하기 위해 Promise.all로 병렬 실행을 해줘야함
  const [movie, vidoes] = await Promise.all([getMovie(id), getVideos(id)]);

  return <h1>{movie.title}</h1>;
}
