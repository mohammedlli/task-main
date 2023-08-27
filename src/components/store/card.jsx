import { useDispatch, useSelector } from "react-redux"
import { ActionCardSlice } from "./card-slice";

export default function Card(){

    const crditem = useSelector(state => state.card.items)
    const dispatch = useDispatch();
    function handleAdd(item){
        dispatch(ActionCardSlice.addItemToCard(
            {id:item.id,title:item.title,price:item.price}
        ))
    }
    function handleRemove(id){
        dispatch(ActionCardSlice.removeItemToCard(id))
        console.log(id,"id");
    }
    return<>
    <div >
        {crditem.map((item)=>(
        <div key={item.id} style={{width:"100px",height:"160px",backgroundColor:"gray"}}>
            <p>{item.id}</p>
            <p>{item.price}$</p>
            <p>{item.totalPrice}$ totalPrice</p>
            <p>{item.quantity}</p>
            <button onClick={()=>{handleAdd(item)}}>+</button>
            <button onClick={()=>{handleRemove(item.id)}}>-</button>
        </div>))}
    </div>
    </>
}