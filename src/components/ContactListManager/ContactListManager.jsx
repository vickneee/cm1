/* eslint-disable no-unused-vars */
import React from 'react'
import './ContactListManager.css'
import { useState } from 'react'

function ContactListManager() {

  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleNameChange = (e) => {
    setName(prevName => prevName = e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(prevEmail => prevEmail = e.target.value);
  };
  const handlePhoneChange = (e) => {
    setPhone(prevPhone => prevPhone = e.target.value);
  };
  function addContact() {
    if (name.trim() !== "" && email.trim() !== "" && phone.trim() !== "") {
      setContacts((c) => [...c, { name, email, phone }]);
      setName("");
      setEmail("");
      setPhone(""); // Clear the input fields
    }
  }
  function deleteContact(index) {
    const updatedContacts = contacts.filter((_, i) => i !== index);
    setContacts(updatedContacts);
  }

  return (
    <div className='contact_container'>
      <h2>Contact List Manager</h2>
      <div className='input-container'>
        <input className='input-field' type="text" placeholder='Enter your name...' value={name} onChange={handleNameChange} />
        <input className='input-field' type="text" placeholder='Enter your email...' value={email} onChange={handleEmailChange} />
        <input className="input-field" type="tel" placeholder="Enter your phone number..." value={phone} onChange={handlePhoneChange} />
        <button className='add-button' onClick={addContact}>Add</button>
      </div>
      <div className='contact_container'>
        <ol>
          {contacts.map((contact, index) => (
            <li key={index}>
              <div className="contact-info">
                <div className="contact-details">
                  <p><span>Name:</span> {contact.name}</p>
                  <p><span>Email:</span> {contact.email}</p>
                  <p><span>Phone:</span> {contact.phone}</p>
                </div>
                <button className="action-button" onClick={() => deleteContact(index)}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

export default ContactListManager
