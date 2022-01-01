import { useState } from 'react';

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { ListNivels } from './components/ListNivels';
import { NewRegisterModal } from './components/NewRegisterModal';
import { ViewDev } from './components/ViewDev';
import { GlobalStyle } from "./styles/global";

function App() {


  const [isNewRegisterOpen, setIsNewRegisterOpen] = useState(false);
  const [isListNivelsOpen, setIsListNivelsOpen] = useState(false);
  const [isViewDevsOpen, setIsViewDevsOpen] = useState(false);


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

  function handleOpenViewDevModal(){
    setIsViewDevsOpen(true);
  }

  function handleCloseViewDevModal(){
    setIsViewDevsOpen(false);
  }



  return (
    <>
      <Header 
        onOpenNewRegisterModal={handleOpenNewRegisterModal}
        onOpenListNivelsModal={handleOpenListNivelsModal}
      />
      <Dashboard 
        onOpenViewDevsModal={handleOpenViewDevModal}
      />

      <NewRegisterModal 
        isOpen={isNewRegisterOpen}
        onRequestClose={handleCloseNewRegisterModal}
      />

      <ListNivels 
        isOpen={isListNivelsOpen}
        onRequestClose={handleCloseListNivelsModal}
      />

      <ViewDev 
        isOpen={isViewDevsOpen}
        onRequestClose={handleCloseViewDevModal}
      />
      <GlobalStyle />
    </>
  );
}

export default App;
