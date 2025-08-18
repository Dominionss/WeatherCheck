import { useState } from 'react';


const desserts = [
    {
        id: "1",
        title: "Cheesecake",
        description: "Rich and creamy New York style cheesecake",
        image: "https://www.onceuponachef.com/images/2017/12/cheesecake-1200x1393.jpg",
        price: "$5.50",
    },
    {
        id: "2",
        title: "Macarons",
        description: "Colorful and delicate French macarons",
        image: "https://www.allrecipes.com/thmb/6B1pOWWucSQqIPfe6IzxWFvKzmg=/0x512/filters:no_upscale():max_bytes(150000):strip_icc()/223232macaronsKim4x3-97e86da8c9e849218d5b70ac93bbe5f1.jpg",
        price: "$7.00",
    },
    {
        id: "3",
        title: "Pavlova",
        description: "Crispy meringue with fresh fruit topping",
        image: "https://thescranline.com/wp-content/uploads/2023/12/PAVLOVA-25-S-01.jpg",
        price: "$6.50",
    },
    {
        id: "4",
        title: "Brownie",
        description: "Fudgy chocolate brownie with walnuts",
        image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRqg1x3ob1GODVdjD72o85jC1kHEi_ucoWQYiX_ncI5MAJ7KDD5vSDWQnVoVkz2rBRl1pPL90TJPx1mxavRXRCtnhWXuAAnSFYORc-S0yw",
        price: "$4.00",
    },
    {
        id: "5",
        title: "Baklava",
        description: "Sweet and flaky pastry with nuts & honey",
        image: "https://www.simplyrecipes.com/thmb/3S8HtOSKvpoQmw4wgo5yCW2qjVE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Baklava-LEAD-11-b2a228e6db9f43d697ae3aed378d0b2a.jpg",
        price: "$5.75",
    }
];

const dessertsItems = desserts.map((dessert) => {
    return <div key={dessert.id}>
        <img src={dessert.image} alt={dessert.title} width="200px"/>
        <p>{dessert.title}</p>
        <p>{dessert.description}</p>
        <p>{dessert.price}</p>
    </div>
});

function ListComponent() {
    return(
        <div>
            <h2>Desserts</h2>

            <ul style={{display: "flex", justifyContent: "flex-start", gap: "10px"}}>
                {dessertsItems}
            </ul>

        </div>
    );
}

export default ListComponent;
