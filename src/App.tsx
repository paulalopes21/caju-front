import { AdmissionProvider } from "@/context/AdmissionContext";

import Router from "@/router";
import { Header } from "./components/Header";

function App() {
  return (
    <AdmissionProvider>
      <Header>
        <h1>Caju Front Teste</h1>
      </Header>
      <Router />
    </AdmissionProvider>
  );
}

export default App;
