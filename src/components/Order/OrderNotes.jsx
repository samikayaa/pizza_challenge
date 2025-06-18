import React from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";


export default function OrderNotes({ name, not, handleChange }) {

    return (
        <Form>
            <FormGroup className="name-surname">
                <Label style={{ textAlign: "left", width: "40vw", margin: "0 auto", fontFamily: "Barlow", fontWeight: 700 }} for="name" className="adınız">Adınız Soyadınız *</Label>
                <Input style={{ textAlign: "left", width: "40vw", margin: "0 auto", fontFamily: "Barlow" }} id="name" name="name" type="text" minLength={3} value={name} onChange={handleChange} />
            </FormGroup>
            <FormGroup className="siparis-notu">
                <Label style={{ textAlign: "left", width: "40vw", margin: "0 auto", fontFamily: "Barlow", fontWeight: 700 }} for="name" >Sipariş Notu</Label>
                <Input style={{ textAlign: "left", width: "40vw", margin: "0 auto", fontFamily: "Barlow", gap: "40 px", padding: "40 px" }} id="name" name="name" type="textarea" minLength={5} value={not} onChange={handleChange} className="siparis" />
            </FormGroup>
        </Form>
    )

}