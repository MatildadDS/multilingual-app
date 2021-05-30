import React from "react";
import Contenu from './Components/Contenu/Contenu'
import Togglelangs from "./Components/ToggleLangs/ToggleLangs"
import ContextProvider from './context/langContext'


function App() {
  return (
    <ContextProvider>
      <Togglelangs />
      <Contenu />
    </ContextProvider>
  );
}

export default App;
