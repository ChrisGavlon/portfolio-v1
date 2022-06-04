import React, {useState} from 'react';

import FormModal from './FormModal';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

    

function Contact(){

    const [modalShow, setModalShow] = useState(false);

    return (
        <>
        <Container>
            <Row className="icon-row">
                <Col xs="3">
                    <a target="_blank" href="https://www.linkedin.com/in/christopher-aguirre-21bb0b221/" className="contactLink">
                        <FontAwesomeIcon icon={faLinkedin} id="linkedInIcon" />
                        <br/>
                        <p className="iconSubtitle">LinkedIn</p>
                    </a>
                </Col>
                <Col xs="3">
                    <a target="_blank" href="https://github.com/ChrisGavlon" className="contactLink">
                        <FontAwesomeIcon icon={faGithub} id="githubIcon" />
                        <br/>
                        <p className="iconSubtitle">GitHub</p>
                    </a>
                </Col>
                <Col xs="3">
                    <FontAwesomeIcon onClick={() => setModalShow(true)} icon={faEnvelope} id="emailIcon" />
                    <br/>
                    <p onClick={() => setModalShow(true)} className="iconSubtitle">Email</p>
                </Col>
            </Row>
        </Container>
        <FormModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
    )
}

export default Contact;