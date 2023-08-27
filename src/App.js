
import { useDispatch, useSelector } from "react-redux";
import InfiniteScroll from "./components/InfinteScroll.jsx";
import Card from "./components/store/card.jsx";
import "./components/task.css"
import { uiActions } from "./components/store/ui-slice.js";
import AllProdact from "./components/store/AllProdacts.jsx";
function App() {
  const toggle = useSelector(state => state)
  const cardQuantity = useSelector(state => state.card.totalQuantity)
  console.log(cardQuantity);
  const dispatch = useDispatch(); 
  const handletoogle =()=>{
    dispatch(uiActions.toggle())
  }
    return (  
      <div className="">
        <button onClick={handletoogle}>items - {cardQuantity}</button>
        {toggle&&<Card/>}
        <AllProdact/> 
      </div>
    );
  }
export default App;



        {/* <InfiniteScroll/> */}