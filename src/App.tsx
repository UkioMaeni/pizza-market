import React from 'react';
import './App.scss';
import Header from "./components/Header";
import Body from "./components/Body";
import {BrowserRouter} from "react-router-dom";
import {useTypedSelector} from "./hooks/useTypeSelector";
import Modal from "./components/Modal";

const App:React.FC=()=> {
    const {view}=useTypedSelector(state=>state.card)
  return (
    <div className="App">
        {view&&<Modal/>}
        <BrowserRouter>
            <Header/>
            <Body/>
        </BrowserRouter>
    </div>
  );
}

export default App;
