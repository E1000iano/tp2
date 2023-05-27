import Item from "../Item/Item";
import React from "react";

const ItemList = ({data = []}) => {
    return(
        data.map(alcohol => <Item key={alcohol.id} info={alcohol}/>)
    )
};

export default ItemList;
