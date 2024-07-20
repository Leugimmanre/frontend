import { useDocumentTitle } from "../hooks/title";

export default function Home() {
  // Título de la página principal
  useDocumentTitle("Home | Campamento Jóvenes");

  return (
    <div className="lg:w-3/4 p-7 mx-auto bg-slate-100">Home</div>
  );
}
