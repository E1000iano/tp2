import React, { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css'
import { Link } from 'react-router-dom';



const ItemDetail = ({data}) => {
    const [goToCart, setGoToCart] = useState(false);

    const onAdd = (quantity) => {
        setGoToCart(true);
        }

        
    
    return (
        <div className="container">
            <div className="detail">
                <img className="detail__image" src={data.image} alt="" />
                <div className="content">
                    <h1>{data.name}</h1>
                    {
                        goToCart
                            ? <Link to='/Cart'>Terminar compra</Link>
                            : <ItemCount initial={3} stock={5} onAdd={onAdd} />
                    }

                    <ItemCount initial={1} stock={5} onAdd={onAdd}/>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;