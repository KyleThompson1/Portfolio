import { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import connectImg from '../Assets/Img/icons8-connect-500.png';

export const Contact = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    };

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        });
    };

    const validateForm = () => {
        return formDetails.firstName && formDetails.lastName && formDetails.email && formDetails.phone && formDetails.message;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            setStatus({ success: false, message: 'Please fill in all fields.' });
            return;
        }

        setButtonText('Sending...');
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                access_key: '1c19e529-ac35-4db4-8f69-beef8c3ac5b1', //Access key provided by web3forms
                ...formDetails
            })
        });

        const result = await response.json();
        setButtonText('Send');
        setFormDetails(formInitialDetails);

        if (result.success) {
            setStatus({ success: true, message: 'Message sent successfully' });
        } else {
            setStatus({ success: false, message: 'Something went wrong, please try again later' });
        }
    };

    return (
        <section className='contact' id='connect'>
            <Container>
                <Row className='align-items-center'>
                    <Col md={6} className='contact-connect-img'>
                        <img src={connectImg} alt='Contact Us' />
                    </Col>
                    <Col md={6}>
                        <h2 className='center-text' style={{ fontSize: '72px' }}>Let's Connect!</h2>
                        <form onSubmit={handleSubmit}>
                            <Col>
                                <Row className='px-1'>
                                    <input type='text' value={formDetails.firstName} placeholder='First Name' onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                                </Row>
                                <Row className='px-1'>
                                    <input type='text' value={formDetails.lastName} placeholder='Last Name' onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                                </Row>
                                <Row className='px-1'>
                                    <input type='email' value={formDetails.email} placeholder='Email Address' onChange={(e) => onFormUpdate('email', e.target.value)} />
                                </Row>
                                <Row className='px-1'>
                                    <input type='tel' value={formDetails.phone} placeholder='Phone Number' onChange={(e) => onFormUpdate('phone', e.target.value)} />
                                </Row>
                                <Row className='px-1'>
                                    <textarea rows='6' value={formDetails.message} placeholder='Message' onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                                </Row>
                                <Row className='px-1 justify-content-center'>
                                    <button type='submit' style={{ width: '200px' }} ><span>{buttonText}</span></button>
                                </Row>
                                {
                                    status.message &&
                                    <Row className='px-1'>
                                        <p className={status.success === false ? 'danger' : 'success'}>{status.message}</p>
                                    </Row>
                                }
                            </Col>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};