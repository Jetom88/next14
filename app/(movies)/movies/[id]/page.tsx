// dynamic routes를 사용 하는 방법

export default function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  // back-end에서 render되기 때문에 console.log(props)를 하면 터미널 창에서 어떤 props가 있는지 확인 가능
  // params의 id는 [id]에서 온 것
  console.log(id);
  return <h1>Movie {id}</h1>;
}
