import { useState } from 'react';

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewRegisterModal } from './components/NewRegisterModal';
import { GlobalStyle } from "./styles/global";

function App() {


  const [isNewRegisterOpen, setIsNewRegisterOpen] = useState(false);


  function handleOpenNewRegisterModal(){
      setIsNewRegisterOpen(true);
  }

  function handleCloseNewRegisterModal(){
      setIsNewRegisterOpen(false);
  }

  return (
    <>
      <Header onOpenNewRegisterModal={handleOpenNewRegisterModal}/>
      <Dashboard />

      <NewRegisterModal 
        isOpen={isNewRegisterOpen}
        onRequestClose={handleCloseNewRegisterModal}
      />
      <GlobalStyle />
    </>
  );
}

export default App;
