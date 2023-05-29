import React, { useEffect, useState } from "react";

import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const alcohol = [
    { id: 1, name: 'Cerveza Corona', 
price: 350, category: 'Cervezas', 
image: 'https://club23.com.ar/wp-content/uploads/2021/08/CoronaPorron-600x774.jpg', 
stock: 100,
description: 'Cerveza'
 
},
 {id: 2, name: 'Vodka Smirnoff', price: 2000, category: 'Destilados', image: 'http://d2r9epyceweg5n.cloudfront.net/stores/001/107/356/products/vodka-smirnoff-botella-de-750-ml-1-21-73ad137d7122c3a00816260585951637-640-0.png',stock: 50,
   description: 'Vodka'
},
 { id: 3, name: 'Ron Bacardi', price: 4575, category: 'Destilados', image: 'https://statics.dinoonline.com.ar/imagenes/full_600x600_ma/3070090_f.jpg', stock: 30,
   description: 'Ron '
 }
]





const ItemListContainer = ({ greeting }) => {
    const [data, setData] = useState([]);

    const { categoriaId } = useParams();

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(alcohol);
                }, 1000);
            });
            if (categoriaId) {
                getData.then(res => setData(res.filter(alcohol.category === categoriaId)));
            } else {
            getData.then(res => setData(res));
        }
        }, [categoriaId])

    const onAdd = (quantity) => {
        console.log(`Compraste ${quantity} unidades`);
        }


    return (
        <div>
            <h1>{'buenas'}</h1>
            
            <ItemList data={data}/>
            

        </div>

    )
}

export default ItemListContainer;