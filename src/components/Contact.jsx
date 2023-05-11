import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ContactImg from "../assets/img/contact-img.svg"

export const Contact = () => {
    const formInitialDetails = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState("Enviar mensaje");
    const [status, setStatus] = useState("send");

    //Forma de crear un formulario que modifica sus datos de manera escalable
    const onFormUpdate = (category, value) => {
        setFormDetails({ 
            ...formDetails,
            [category]: value,
        });
    }

    const handleSubmit = async (e) =>  {
        e.preventDefault();
        setButtonText("Enviando...");
        let response = await fetch("http://localhost:3001/contact", {
            method: "POST",
            headers: {
                "Content-Type": "Application/json; charset=utf-8",
            },
            body: JSON.stringify(formDetails),
        });
        setButtonText("Mensaje enviado");
        let result = response.json();
        setFormDetails(formInitialDetails);
        if (result.code === 200) {
            setStatus({ success: true, message: "Mensaje enviado correctamente" });
        } else {
            setStatus({ success: false, message: "Error al enviar el mensaje" });
        }



    }


    return (

        <section className="contact" id="connect"> 
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={ContactImg} alt="Contact Us" />
                    </Col>
                    <Col md={6}>
                        <h2>Contáctame</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col md={6} className="px-1">
                                    <input type="text" placeholder="Nombre" value={formDetails.firstName} onChange={(e) => onFormUpdate("firstName", e.target.value)} />
                                </Col>
                                <Col md={6} className="px-1">
                                    <input type="text" placeholder="Apellido" value={formDetails.lastName} onChange={(e) => onFormUpdate("lastName", e.target.value)} />

                                </Col>
                                <Col md={6} className="px-1">
                                    <input type="email" placeholder="Email" value={formDetails.email} onChange={(e) => onFormUpdate("email", e.target.value)} />

                                </Col>
                                <Col md={6} className="px-1">
                                    <input type="tel" placeholder="Teléfono" value={formDetails.phone} onChange={(e) => onFormUpdate("phone", e.target.value)} />

                                </Col>
                                <Col >
                                    <textarea row="6" placeholder="Mensaje" value={formDetails.message} onChange={(e) => onFormUpdate("message", e.target.value)} />
                                    <button type="submit">{buttonText}</button>
                                </Col>
                                {
                                    status.message && (
                                        <Col>
                                            <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                        </Col>
                                    )
                                }

                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )


}

