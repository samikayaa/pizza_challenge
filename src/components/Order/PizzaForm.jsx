import React from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";

export default function PizzaForm() {

    const toppings = [
        "Pepperoni",
        "Sosis",
        "Jambon",
        "Tavuk",
        "Soğan",
        "Domates",
        "Mısır",
        "Sucuk",
        "Jalapeno",
        "Sarımsak",
        "Biber",
        "Ananas",
        "Kabak",
        "Sosis",
    ];

    return (
        <Form>
            <FormGroup className="pizza-sizes">
                <div className="boyut-cevap">
                    <p>Boyut Seç *</p>
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
                <div className="hamur-cevap">
                    <Label>Hamur Seç</Label>
                    <select
                        name="hamur"
                        onChange={(e) => updateOrder("selectedDough", e.target.value)}
                        data-cy="dough-select"
                    >
                        <option value="ince" data-cy="dough-option-ince">İnce</option>
                        <option value="normal" data-cy="dough-option-normal">Normal</option>
                        <option value="kalin" data-cy="dough-option-kalin">Kalın</option>
                    </select>

                </div>
            </FormGroup>
            <FormGroup className="extras">
                <Label className="extras-header">Ek Malzemeler</Label>
                <p>(En fazla 10 malzeme seçmelisiniz. 5 Para!)</p>
                <div className="extra-elements">
                    {toppings.map((topping) => (
                        <Label key={topping} className="extra-item">
                            <input
                                type="checkbox"
                                value={topping}
                                className="extra-checkbox"
                            />
                            {topping}
                        </Label>
                    ))}
                </div>
            </FormGroup>
        </Form>
    )
}