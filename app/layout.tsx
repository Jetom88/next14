import { Metadata } from "next";
import Navigation from "../components/navigation";

// 메타데이터는 꼭 문자열이 아니여도 됨!
// %s는 문자열 형식지정자임(실제 제목으로 대체될 자리를 나타냄)
export const metadata: Metadata = {
  title: {
    template: "%s | Next Movies",
    default: "Next Movies",
  },
  description: "The best movies on the best framework",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
