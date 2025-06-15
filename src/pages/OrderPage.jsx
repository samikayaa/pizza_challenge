import React, { useState } from "react";

import Header from "../components/Order/Header.jsx";
import Pizza from "../components/Order/Pizza.jsx";
import PizzaForm from "../components/Order/PizzaForm.jsx";
import OrderNotes from "../components/Order/OrderNotes.jsx";
import "./OrderPage.css";

export default function OrderPage() {

    const [order, setOrder] = useState({
        pizzaName: "Position Absolute Acı Pizza",
        price: "85.50₺",
        rating: "4.9",
        review: "(200)",
        info: "Frontend Dev olarak hala position: absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir.",
    })

    const [value, setValue] = useState("");

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div>
            <Header />
            <Pizza order={order} />
            <PizzaForm />
            <OrderNotes handleChange={handleChange} value={value} />
        </div>
    )

}