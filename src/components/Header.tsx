import React from 'react';
import './styles.scss'
import {useTypedDispatch, useTypedSelector} from "../hooks/useTypeSelector";
import {EDIT_MODAL} from "../store/reducers/cardReducer";
const Header: React.FC= () => {
    const {cardList}=useTypedSelector(state=>state.card)
    const dispatch=useTypedDispatch()
    function handleCard() {
            dispatch(EDIT_MODAL(true))
    }
    return (
        <header className={'header'}>
            <div className={'header-info'}>
                <img className={'header-logo'} alt={'#'} src={'https://img.freepik.com/free-vector/flying-slice-of-pizza-cartoon-vector-illustration-fast-food-concept-isolated-vector-flat-cartoon-style_138676-1934.jpg?w=2000'}/>
                <div className={'header-name'}>PIZZA MARKET</div>
            </div>
            <div className={'header-title'}>
                <img onClick={handleCard} src={'https://cdn-icons-png.flaticon.com/512/4032/4032536.png'} alt={'#'} className={'header-card'}/>
                <span className={'header-count'}>{cardList.length}</span>
                <img src={'https://stihi.ru/pics/2015/04/13/71.jpg'} alt={'#'} className={'header-profile'}/>
                <span className={'header-person'}>Ekaterina Stark</span>
            </div>
       </header>
    );
};

export default Header;