import React, { useState } from 'react';
import { Container, Row, Col, Button, Modal, Form } from 'react-bootstrap';
import DatatablePage from '../Datatable';


function Diller({ handleOnChange, kayitliDiller }) {
    const [show, setShow] = useState(false);
    const [showEkle, setShowEkle] = useState(false);


    const [dilAdi, setdilAdi] = useState("");
    const [diller, setDiller] = useState(kayitliDiller);

    const handleDiller = () => {
        setShow(true);

    }
    const handleYeniDilEkle = () => {

        setShow(false);
        setShowEkle(true);
    }



    const handleDetay = (i) => {

    }

    const handleDelete = (index) => {
        let newData = diller.filter((_, i) => i !== index);
        setDiller(newData);
        handleOnChange(newData);
    }

    const handleDilKaydet = () => {


        if (dilAdi.length > 0 && dilAdi.trim().length > 0) {
            if (veriTest(dilAdi)) {
                setShowEkle(false);
                diller.push(dilAdi.toLocaleUpperCase());
                setShow(true);
                handleOnChange(diller);
            }
            else {
                alert("Bu Dil Adında Dil Kaydı Zaten Mevcut!");
            }
        }
        else {
            alert("Dil Adı Giriniz!");
            return false;
        }




    }
    const toUpper = function (x) {
        return x.toUpperCase();
    };
    const veriTest = (veri) => {
        if (diller.map(toUpper).includes(veri.toLocaleUpperCase())) {
            return false;
        }
        else {
            return true;
        }
    }

    return (
        <div>
            <Container className="mt-4">
                <Row className="justify-content-md-center">
                    <Col md={4}>
                        <Button variant="primary" className="w-100" onClick={handleDiller} >Kayıtlı Diller</Button>
                    </Col>
                </Row>
            </Container>
            <Modal show={show} size="lg" onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Kayıtlı Diller</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <DatatablePage {...{ diller }} onDelete={handleDelete} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={() => setShow(false)}>
                        Kapat
                    </Button>
                    <Button variant="success" onClick={handleYeniDilEkle}>
                        Yeni Dil Ekle
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal show={showEkle} onHide={() => setShowEkle(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Yeni Dil Ekle</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Dil Adı Giriniz</Form.Label>
                            <Form.Control type="text" placeholder="Dil Adı Giriniz..." onChange={(e) => setdilAdi(e.target.value)} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => { setShowEkle(false); setShow(true) }}>
                        Kapat
                    </Button>
                    <Button variant="success" onClick={handleDilKaydet}>
                        Kaydet
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>

    );


}

String.isNullOrEmpty = function (value) {
    return (!value && value !== undefined && value !== "" && value.length !== 0);
}

export default Diller;