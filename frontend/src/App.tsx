import { useState } from 'react';

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { ListNivels } from './components/ListNivels';
import { NewRegisterModal } from './components/NewRegisterModal';
import { GlobalStyle } from "./styles/global";

function App() {


  const [isNewRegisterOpen, setIsNewRegisterOpen] = useState(false);
  const [isListNivelsOpen, setIsListNivelsOpen] = useState(false);


  function handleOpenNewRegisterModal(){
      setIsNewRegisterOpen(true);
  }

  function handleCloseNewRegisterModal(){
      setIsNewRegisterOpen(false);
  }

  function handleOpenListNivelsModal(){
    setIsListNivelsOpen(true);
  }

  function handleCloseListNivelsModal(){
    setIsListNivelsOpen(false);
  }


  return (
    <>
      <Header 
        onOpenNewRegisterModal={handleOpenNewRegisterModal}
        onOpenListNivelsModal={handleOpenListNivelsModal}
      />
      <Dashboard />

      <NewRegisterModal 
        isOpen={isNewRegisterOpen}
        onRequestClose={handleCloseNewRegisterModal}
      />

      <ListNivels 
        isOpen={isListNivelsOpen}
        onRequestClose={handleCloseListNivelsModal}
      />
      <GlobalStyle />
    </>
  );
}

export default App;
