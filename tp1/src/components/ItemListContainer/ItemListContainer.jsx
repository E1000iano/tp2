import React, { useEffect, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";

const alcohol = [
    { id: 1, name: 'Cerveza Corona', 
price: 350, category: 'Cervezas', 
img: 'https://club23.com.ar/wp-content/uploads/2021/08/CoronaPorron-600x774.jpg', 
stock: 100,
description: 'Cerveza'
 
},
 {id: 2, name: 'Vodka Smirnoff', price: 2000, category: 'Destilados', img: 'http://d2r9epyceweg5n.cloudfront.net/stores/001/107/356/products/vodka-smirnoff-botella-de-750-ml-1-21-73ad137d7122c3a00816260585951637-640-0.png',stock: 50,
   description: 'Vodka'
},
 { id: 3, name: 'Ron Bacardi', price: 4575, category: 'Destilados', img: 'https://statics.dinoonline.com.ar/imagenes/full_600x600_ma/3070090_f.jpg', stock: 30,
   description: 'Ron '
 }
]



const ItemListContainer = ({greeting}) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(alcohol);
                }, 3000);
            });
            getData.then(res => setData(res))
        }, [])

    const onAdd = (quantity) => {
        console.log(`Compraste ${quantity} unidades`);
        }


    return (
        <div>
            <h1>{'buenas'}</h1>
            <ItemCount initial={1} stock={5} onAdd={onAdd}/>
            <ItemList data={data}/>

        </div>

    )
}

export default ItemListContainer;