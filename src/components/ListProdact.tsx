import React from 'react';
import {useParams,useLocation} from "react-router";
import {pizzaImg} from "../helpers/pizzaImg";
import Product from "./Product";
const ListProdact :React.FC= () => {
    const navigate=useLocation();
    console.log(navigate)
    switch (navigate.pathname){
        case '/pizza':
            return (
                <div className={'listproduct'}>
                    {pizzaImg.map(el=><Product uri={el.uri} id={el.id} name={el.name} pay={el.pay}/>)}
                </div>
            )
        break
        default: return <div className={'listproduct'}>Список пуст</div>
    }
};

export default ListProdact;