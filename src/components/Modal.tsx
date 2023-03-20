import React from 'react';
import {useTypedDispatch, useTypedSelector} from "../hooks/useTypeSelector";
import {EDIT_MODAL} from "../store/reducers/cardReducer";
import {IList} from "../helpers/pizzaImg";

interface IListCounter extends IList{
    count:number
}
const Modal:React.FC = () => {
    const dispatch=useTypedDispatch()
    const {cardList}=useTypedSelector(state=>state.card)
    function handleCloseModal() {
        dispatch(EDIT_MODAL(false))
    }
    const data : IListCounter[]=[]
    cardList.forEach((el)=>{
        const result=data.find(e=>e.name===el.name)
        if(result){
            result.count=result.count+1
        }
        else{
            data.push({...el,count:1})
        }
    })
    let counter=0
    let pay=0
    data.forEach(el=>{
        counter+=el.count
        pay+=+el.pay*+el.count
    })
    console.log(data)
    return (
        <div className={'modal'} onClick={handleCloseModal}>
            <div className={'modal-wrapper'} onClick={(e)=>e.stopPropagation()}>
                <div>Корзина</div>
                {data.map(el=>
                    <div className={'modal-el'}>
                        <img src={el.uri}/>
                        <div>{el.name}</div>
                        <div>Цена: {el.pay}$</div>
                        <div className={'modal-count'}>Колличество: {el.count}</div>
                    </div>
                )}
                    <div className={'modal-el pl20'} style={{border:'none'}}>
                        <div>Итого</div>
                        <div>Цена: {pay}$</div>
                        <div className={'modal-count'}>Колличество: {counter}</div>
                </div>
                <div className={'modal-buy'}>
                    Перейти к оформлению
                </div>
            </div>
        </div>
    );
};

export default Modal;