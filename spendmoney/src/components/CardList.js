import React, { useEffect } from "react";
import Cards from "./Cards";
import { useSelector,useDispatch} from "react-redux";
import { fetchCardItems } from "../actions/moneyActions";


function CardList() {
const dispatch=useDispatch()
useEffect(() =>{
  dispatch(fetchCardItems())
},[dispatch])
const { shopItems } = useSelector(state => state.moneyChange);
// console.log(shopItems);

return (
    <div className="cardList">
      <div className="columns">
        {shopItems.map((item) => {
          return <Cards key={item.id} {...item} />;
        })}
      </div>
    </div>
   
  );
}

export default CardList;
