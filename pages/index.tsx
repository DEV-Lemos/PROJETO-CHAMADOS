// eslint-disable-next-line @typescript-eslint/no-unused-vars
import ListaChamados from "../components/listaChamados";
export default function Home() {
  return (
    <div
      className={``}
    >

      <main className={`flex min-h-screen flex-col items-center justify-between p-24`}>
        <ListaChamados />
      </main>

    </div>
  );
}
