import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Modal, Form } from 'react-bootstrap';

const Kelimeler = ({ kayitliDiller, veriler, onDataChanged }) => {

    const [show, setShow] = useState(false);
    const [keyword, setKeyword] = useState("");
    const handleAddKey = () => {
        setShow(true);
    }

    useEffect(() => {
        setKeyword(veriler.key);

        console.log(veriler.values);
    }, [veriler])


    const handleSave = (event) => {
        event.preventDefault();
        const data = {
            key: keyword,
            values: []
        };
        kayitliDiller.map((item, i) => {

            const response = {
                ["" + item + ""]: event.target[i + 1].value
            }
            data.values.push(response);
        });
        onDataChanged(data);
        setShow(false);

    }

    return (
        <div>
            <Container>
                <Row className="justify-content-md-center">
                    <Col md={4}>
                        <Button variant="success" className="w-100" onClick={handleAddKey} >Kelime Ekle</Button>
                    </Col>
                </Row>
            </Container>
            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Kelime ve Karşılıkları</Modal.Title>
                </Modal.Header>
                <Form onSubmit={handleSave} >
                    <Modal.Body>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label><b className="red">Kelime Giriniz</b></Form.Label>
                            <Form.Control type="text" placeholder="Kelime Giriniz.." value={keyword} onChange={(e) => { setKeyword(e.target.value) }} required />
                        </Form.Group>
                        {kayitliDiller.map((item, i) =>
                            <Form.Group key={i} controlId={i + "_txt"} >
                                <Form.Label><b>{item} KARŞILIĞI</b></Form.Label>
                                <Form.Control type="text" placeholder={item + " Karşılığı"} required />
                            </Form.Group>
                        )}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShow(false)}>
                            Kapat
                        </Button>
                        <Button variant="primary" type="submit" >
                            Kaydet
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </div >

    );
}
export default Kelimeler;