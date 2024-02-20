// import React, { useEffect } from 'react';
// import axios from 'axios';
// import { useState } from 'react'
// import { API } from '../global';
// import { Button, Card } from 'antd';

// const { Meta } = Card;

// function Products({item}) {
    
//     //store the products data from server(backend), used empty array
//     const [itemData, setItemData] = useState([]);


//     useEffect(() => {
//         axios.get(`${API}/all-products`)
//         .then((res) => {
//             console.log("data response details:", res.data)
//             // setItemData(res.data)
//         })
//     }, []) //this is for use effect run only one time
//     return (
//         <div className='productDiv'>
//         {/* Mapping through itemData array and rendering Card components */}
//         {itemData.map((item) => (
//                 <div key={item._id} className="productCard">
//                     <Card cover={<img src={item.image} alt={item.productName}/>}>
//                         <Meta title={item.productName}/>
//                         <h3>Price Rs. {item.price}</h3>
//                         <Button type='primary'>Add to Cart</Button>
//                     </Card>
//                 </div>
//             ))}

//         </div>
//     )
// }

// export default Products



import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API } from '../global';
import { Button, Card } from 'antd';

const { Meta } = Card;

function Products() {
    // Store the products data from server(backend), initialize as empty array
    const [itemData, setItemData] = useState([]);

    useEffect(() => {
        axios.get(`${API}/all-products`)
        .then((res) => {
            console.log("data response details:", res.data);
            setItemData(res.data.All_Products_Details); // Update state with fetched data
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });
    }, []);

    console.log("itemData:", itemData);

    return (
        <div className='productDiv'>
            {/* Rendering Card components only if itemData is an array */}
            {Array.isArray(itemData) && itemData.map((item) => (
                <div key={item._id} className="card">
                    <Card hoverable style={{width: 250}} cover={<img src={item.image} alt={item.productName} style={{width: "100%", height: "250px", objectFit: "cover"}}/>}>
                        <Meta title={`Name: ${item.productName}`}/>
                        <h6>Description: {item.description}</h6>
                        <h5>Rating: {item.rating}</h5>
                        <h4>Price Rs. {item.price}/-</h4>
                        <h3>Offer Price. Rs. {item.offerPrice}/-</h3>
                        
                        <Button type='primary'>Add to Cart</Button>
                    </Card>
                </div>
            ))}
        </div>
    );
}

export default Products;
