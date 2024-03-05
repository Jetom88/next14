import { API_URL } from "../app/(home)/page";

async function getVideos(id: string) {
  // const res = await fetch(`${API_URL}/${id}/videos`);
  // return res.json();

  await new Promise((res) => setTimeout(res, 3000));
  throw new Error("error");
}

//video만 render하는 component
export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);
  return <h6>{JSON.stringify(videos)}</h6>;
}
