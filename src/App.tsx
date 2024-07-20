import { useDocumentTitle } from "./hooks/title";
import PrincipalNavbar from "./components/Header";

function App() {
  // Título de l página principal
  useDocumentTitle("Home | Campamento Jóvenes");

  return (
    <>
      <PrincipalNavbar />
    </>
  );
}

export default App;
