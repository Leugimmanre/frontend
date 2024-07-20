import { useDocumentTitle } from "../hooks/title";

export default function Contact() {
    // Título de la página Contacto
    useDocumentTitle("Contacto | Campamento Jóvenes");

  return (
    <div className="lg:w-3/4 p-7 mx-auto bg-slate-100">
      Contact
    </div>
  )
}
