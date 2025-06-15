import React from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";

export default function PizzaForm() {


    return (
        <Form>
            <p>Boyut Seç</p>
            <div className="boyut-cevap">
                <Label>
                    <input type="radio" name="boyut">
                    </input>
                    Küçük
                </Label>
                <Label>
                    <input type="radio" name="boyut">
                    </input>
                    Orta
                </Label>
                <Label>
                    <input type="radio" name="boyut">
                    </input>
                    Büyük
                </Label>
            </div>
        </Form>
    )
}