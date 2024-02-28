import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [showModal, setShowModal] = useState(false); // State to manage modal visibility

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5001/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        console.log('Form submitted successfully');
        // Optionally, reset the form fields
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        setShowModal(true); // Show modal on successful form submission
      } else {
        console.error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <section id='contact-us'>
      <section className='contact-overlay'>
        <div className='form-container'>
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder='NAME' required/>
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder='EMAIL' required />
            <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder='SUBJECT' required />
            <textarea name="message" value={formData.message} onChange={handleChange} cols="30" rows="10" placeholder='MESSAGE' required></textarea>
            <input type="submit" value="SEND MESSAGE" />
          </form>
        </div>
        <div className='our-details'>
          <div className='detail-item'>
            <span className='icon location' ><FontAwesomeIcon icon={faMapMarkerAlt} /></span>
            <div>
              <h3>Location: </h3>
              <p>Visakhapatnam, Andhra Pradesh - 530026</p>
            </div>
          </div>
          <div className='detail-item'>
            <span className='icon'> <FontAwesomeIcon icon={faEnvelope} /></span>
            <div>
              <h3>Email: </h3>
              <p>dinudasari12@gmail.com</p>
            </div>
          </div>
          <div className='detail-item'>
            <span className='icon'>  <FontAwesomeIcon icon={faPhone} /></span>
            <div>
              <h3>Phone: </h3>
              <p>+91-9779868855</p>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            {/* <span className="close" onClick={closeModal}>&times;</span> */}
            <p>Thank you for contacting! We'll get back to you</p>
            <button onClick={closeModal}>OK</button>
          </div>
        </div>
      )}
    </section>
  );
}

export default ContactUs;
