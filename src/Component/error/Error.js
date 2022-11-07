import React from "react";
import Button from "react-bootstrap/esm/Button";
import { useNavigate } from "react-router-dom";

function Error() {
    const navigate = useNavigate();
    return (
        <div variant="success">
            <header style={{ height: 100 }}>
                <br></br>
                <h1>404</h1>
            </header>
            <body style={{ height: '200%' }}>
                <h1>ERROR</h1>
                <br></br>
                <h2>La pagina solicitada no existe</h2>
                <br></br>
                <Button onClick={() => navigate("/")} variant = "secondary">
                    Regresar
                </Button>
            </body>
        </div>
    )
}
export default Error;