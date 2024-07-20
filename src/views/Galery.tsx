import { useDocumentTitle } from "../hooks/title";

export default function Galery() {
  // Título de la página galería
  useDocumentTitle("Galería | Campamento Jóvenes");

  return <div className="lg:w-3/4 p-7 mx-auto bg-slate-100">Galery</div>;
}
