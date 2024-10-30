import { AdmissionProvider } from "@/context/AdmissionContext";

import Router from "@/router";
import { Header } from "./components/Header";
import { UIProvider } from "./context/UIContext";

function App() {
  return (
    <UIProvider>
      <AdmissionProvider>
        <Header>
          <h1>Caju Front Teste</h1>
        </Header>
        <Router />
      </AdmissionProvider>
    </UIProvider>
  );
}

export default App;
