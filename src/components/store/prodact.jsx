import { useDispatch } from "react-redux";
import { ActionCardSlice } from "./card-slice";

const ProdactItem = (props)=>{
    const dispatch = useDispatch()
    const {id , title , des , price}=props;

    const handleAdd = () =>{
        dispatch(ActionCardSlice.addItemToCard(
            {id,title,price}
        ))
    }
    return<>
    <div>
    <div
    style={{width:"100px",height:"100px",backgroundColor:"#A435F0"}}
    key={id}>
        <h3>{title}</h3>
        <h3>{price}</h3>
        <h3>{des}</h3>
    </div>
    <button onClick={handleAdd}>Add</button>
    </div>
    </>
}

export default ProdactItem;