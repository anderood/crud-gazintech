import { useState, useEffect } from 'react';

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { ListNivels } from './components/ListNivels';
import { NewRegisterModal } from './components/NewRegisterModal';
import { ViewDev } from './components/ViewDev';
import api from './services/api';
import { GlobalStyle } from "./styles/global";

interface DashboardProps{
    id:number;
    name:string;
    gender:string;
    birthday:number;
    hobby:string;
    urlimg:string;
    Level: {
      id:number;
      level:string;
    }
}

interface ViewsDevProps {
  id:number;
  name:string;
  gender:string;
  birthday:number;
  hobby:string;
  urlimg:string;
  Level: {
    id:number;
    level:string;
  }
}

function App() {

  const [isNewRegisterOpen, setIsNewRegisterOpen] = useState(false);
  const [isListNivelsOpen, setIsListNivelsOpen] = useState(false);
  const [isViewDevsOpen, setIsViewDevsOpen] = useState(false);


  const [listdevs, setListdevs] = useState<DashboardProps[]>([]);
  const [selectedId, setSelectedId] = useState(1);
  const [modalview, setModalView] = useState<ViewsDevProps>({} as ViewsDevProps);

  useEffect(()=>{
    api.get<DashboardProps[]>('/devs').then(response => {
      setListdevs(response.data);
    })
  }, []);

  useEffect(()=>{

    async function loadViewDevs(){
      const response = await api.get<ViewsDevProps>('/devs/'+selectedId);
      const result = response.data;
      setModalView(result);
    }
    loadViewDevs();
  }, [selectedId]);

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

  function handleOpenViewDevModal(id: number){
    setIsViewDevsOpen(true);
    setSelectedId(id);
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
      

      {listdevs.map(user => (
        <Dashboard 
          key={user.id} 
          listdevs={user}
          onOpenViewDevsModal={handleOpenViewDevModal}
        />
      ))}

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
        items={modalview}
      />
      <GlobalStyle />
    </>
  );
}

export default App;
