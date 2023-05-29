import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import React, {useEffect, useState} from 'react';

const alcohol = { id: 1, name: 'Cerveza Corona', 
price: 350, category: 'Cervezas', 
img: 'https://club23.com.ar/wp-content/uploads/2021/08/CoronaPorron-600x774.jpg', 
stock: 100,
description: 'Cerveza'
 
}

const ItemDetailContainer = () => {
    const [data,setData] = useState({});
    const { detalleId } = useParams();

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(alcohol);
                }, 1000);
                });

                getData.then(res => setData(res.find(alcohol => alcohol.id === parseInt(detalleId))));
            }, [])

    return (
         <ItemDetail data={data} />
    );
}

export default ItemDetailContainer;