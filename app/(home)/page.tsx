// page의 head 부분에 표시되는 내용
// 메타데이터는 중첩이 되는것이 아니라 합쳐짐
// 클라이언트 컴포넌트에서는 메타데이터를 내보낼 수 없고, 서버 컴포넌트에서만 있을 수 있음
export const metadata = {
  title: "Home",
};

export default function Page() {
  return (
    <div>
      <h1>Hello!</h1>
    </div>
  );
}
