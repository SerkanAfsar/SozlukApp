import React, { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';

function CiktiSonuc({ veriler }) {


    return (
        <div>
            <Container className="mt-4">
                <Row className="justify-content-md-center align-items-center">
                    <Col md={4} className="text-center bold">
                        <Form>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Kod Çıktısı</Form.Label>
                                <Form.Control as="textarea" value={Object.keys(veriler).length > 0 ? JSON.stringify(veriler, null, 2) : "Veri Yok"} rows="8" onChange={() => { }} />
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );

}
export default CiktiSonuc;