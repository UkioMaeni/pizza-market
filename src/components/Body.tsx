import React, {useEffect} from 'react';
import NavBar from "./NavBar";
import ListProdact from "./ListProdact";
import { useNavigate} from "react-router-dom";
const Body :React.FC= () => {
    const navigation=useNavigate()
    useEffect(()=>{
       navigation('/pizza')
    },[])
    return (
        <div className={'body'}>
            <NavBar/>
            <ListProdact />
        </div>
    );
};

export default Body;