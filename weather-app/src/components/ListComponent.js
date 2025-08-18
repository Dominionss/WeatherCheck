import { useState } from 'react';


const desserts = [
    {
        id: "1",
        title: "Cheesecake",
        description: "Rich and creamy New York style cheesecake",
        image: "https://picsum.photos/200/300?random=4",
        price: "$5.50",
    },
    {
        id: "2",
        title: "Macarons",
        description: "Colorful and delicate French macarons",
        image: "https://picsum.photos/200/300?random=5",
        price: "$7.00",
    },
    {
        id: "3",
        title: "Pavlova",
        description: "Crispy meringue with fresh fruit topping",
        image: "https://picsum.photos/200/300?random=6",
        price: "$6.50",
    },
    {
        id: "4",
        title: "Brownie",
        description: "Fudgy chocolate brownie with walnuts",
        image: "https://picsum.photos/200/300?random=7",
        price: "$4.00",
    },
    {
        id: "5",
        title: "Baklava",
        description: "Sweet and flaky pastry with nuts & honey",
        image: "https://picsum.photos/200/300?random=8",
        price: "$5.75",
    }
];

const dessertsItems = desserts.map((dessert) => {
    return <li key={dessert.id}>{dessert.title} - {dessert.price} - {dessert.description}</li>
});

function ListComponent() {
    return(
        <div>
            <h2>Desserts</h2>

            <ul>
                {dessertsItems}
            </ul>

        </div>
    );
}

export default ListComponent;
