import React from 'react';
import {useTypedDispatch, useTypedSelector} from "../hooks/useTypeSelector";
import {SET_CATALOG} from "../store/reducers/catalogReducer";
import {Link} from "react-router-dom";
enum Provider{
    'Пицца'='/pizza',
    'Роллы'='/rolls',
    'Напитки'='/drinks'
}
const listProduct:Array<keyof typeof Provider> =[
    'Пицца','Роллы','Напитки'
]
const NavBar :React.FC = () => {
    const dispatch=useTypedDispatch()
    const {catalog}=useTypedSelector(state=>state.catalog)
    function handleMenu(el:string) {
        dispatch(SET_CATALOG(el))
    }

    return (
        <div className={'navbar'}>
            <div className={'navbar-title'}>Каталог:</div>
            {listProduct.map((el)=><Link to={Provider[el]} className={'navbar-title_el'} style={{color:catalog===el?'red':'black'}} onClick={()=>handleMenu(el)}>{el}</Link> )}
        </div>
    );
};

export default NavBar;