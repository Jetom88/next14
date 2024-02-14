import { Suspense } from "react";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

// Suspense는 component가 await되는 동안 표시할 메세지를 render할 수 있게 해줌

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <div>
      <h3>Movie detail page</h3>

      {/* suspense를 사용함에 따라 어느 부분이 로딩 상태여야 하는지 명시해줄 수 있게 됨*/}
      <Suspense fallback={<h1>Loding movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>

      <Suspense fallback={<h1>Loding movie videos</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
