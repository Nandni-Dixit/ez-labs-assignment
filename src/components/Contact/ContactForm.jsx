import React, { useState } from 'react'; 
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';


import mandalaTopRight from '../../assets/mandala-top-right.png';
import mandalaBottomLeft from '../../assets/mandala-bottom-left.png';

import './ContactForm.css';

function ContactForm() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState({ type: '', msg: '' });

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    if (!formData.name || !formData.email || !formData.message) {
      setResponseMessage({ type: 'danger', msg: 'Name, Email, and Message are required.' });
      return;
    }
    if (!validateEmail(formData.email)) {
      setResponseMessage({ type: 'danger', msg: 'Please enter a valid email.' });
      return;
    }

    setLoading(true);
    setResponseMessage({ type: '', msg: '' }); 

    try {
      const response = await fetch('https://vernanbackend.ezlab.in/api/contact-us/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message
        }),
      });

      if (response.status === 200 || response.status === 201) {
       
        setResponseMessage({ type: 'success', msg: 'Form Submitted' });
 
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
  
        const data = await response.json();
        setResponseMessage({ type: 'danger', msg: `Error: ${data.message || 'Something went wrong'}` });
      }
    } catch (error) {
   
      setResponseMessage({ type: 'danger', msg: 'Can not connect to server.' });
    } finally {
     
      setLoading(false);
    }
  };

  return (
    
    <Container fluid className="contact-section position-relative">

      
      <img src={mandalaTopRight} alt="Mandala" className="mandala-top-right" />
      <img src={mandalaBottomLeft} alt="Mandala" className="mandala-bottom-left" />

      <Row className="justify-content-center align-items-center">

        <Col md={5} className="contact-text mb-5 mb-md-0">
          <p>
            Whether you have an idea, a question, or simply want
            to explore how V can work together, V're just a
            message away.
          </p>
          <p>Let's catch up over coffee.</p>
          <p>Great stories always begin with a good conversation.</p>
        </Col>

        <Col md={5}>
          <div className="form-wrapper">
            <h2 className="form-title">Join the Story</h2>
            <p className="form-subtitle">Ready to bring your vision to life? Let's talk.</p>
            
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-4" controlId="formName">
                <Form.Control 
                  type="text" 
                  placeholder="Your name*" 
                  className="form-field"
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                />
              </Form.Group>

              <Form.Group className="mb-4" controlId="formEmail">
                <Form.Control 
                  type="email" 
                  placeholder="Your email*" 
                  className="form-field"
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                />
              </Form.Group>

              <Form.Group className="mb-4" controlId="formPhone">
                <Form.Control 
                  type="text" 
                  placeholder="Phone" 
                  className="form-field"
                  name="phone" 
                  value={formData.phone} 
                  onChange={handleChange} 
                />
              </Form.Group>

              <Form.Group className="mb-5" controlId="formMessage">
                <Form.Control 
                  as="textarea" 
                  rows={4} 
                  placeholder="Your message*" 
                  className="form-field"
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                />
              </Form.Group>

              {responseMessage.msg && (
                <Alert variant={responseMessage.type} className="text-center">
                  {responseMessage.msg}
                </Alert>
              )}
            <div className="text-center">
              <Button 
                variant="danger" 
                type="submit" 
                className="submit-btn"
                disabled={loading} 
              >
                {loading ? 'Submitting...' : 'Submit'}
              </Button>
              </div>
            </Form>

            <div className="contact-info mt-5">
              <span>vernita@varnanfilms.co.in   |  +91 98716 84647</span>
              
            </div>
            
          </div>
        </Col>

      </Row>
    </Container>
  );
}

export default ContactForm;