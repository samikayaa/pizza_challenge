import React, { useState } from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
//import { useNavigate } from "react-router-dom";

export default function Header() {

    //   const navigate = useNavigate();

    //    const onClick = () => {
    //        navigate("https://pizzachallenge-wufx--5173--2e6e5e13.local-credentialless.webcontainer.io/order");
    //    }


    return (
        <header>
            <div style={{
                backgroundImage: 'url("images/iteration-1-images/home-banner.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '500px', // ya da ihtiyaca göre
                width: '100%'
            }}>
                <img src="images/iteration-1-images/logo.svg" />
                <h3>KOD ACIKTIRIR, PİZZA DOYURUR</h3>
                <Link style={{ color: "white", FontFamily: "Barlow" }} to="/order" className="button">ACIKTIM!!!</Link>
            </div>
        </header>
    )
}