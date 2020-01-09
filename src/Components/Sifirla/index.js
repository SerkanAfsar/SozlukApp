import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function Sifirla({ veriler, onReset }) {

    const handleReset = (veriler) => {
        veriler = {};
        onReset(veriler);

    }
    return (
        <div>
            <Container>
                <Row className="justify-content-md-center">
                    <Col md={4}>
                        <Button variant="danger" className="w-100" onClick={handleReset} >Verileri Temizle</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default Sifirla;