import React, {LegacyRef, useEffect, useRef, useState} from 'react';
import {IList} from "../helpers/pizzaImg";
import {useTypedDispatch} from "../hooks/useTypeSelector";
import {SET_CARD} from "../store/reducers/cardReducer";
const Product:React.FC<IList>=({id,uri,name,pay}) => {
    const dispatch=useTypedDispatch()
    function handleClick():void {
        dispatch(SET_CARD({id,uri,name,pay}))
    }


    return (
        <div className={'product'}>
            <img className={'product-img'} src={uri}/>
            <div>Цена: {pay}$</div>
            <div className={'product-name'}>{name}</div>
            <button className={'product-add'} onClick={handleClick}>В корзину</button>
        </div>
    );
};

export default Product;