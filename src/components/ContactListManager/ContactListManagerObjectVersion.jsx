/* eslint-disable no-unused-vars */
import React from 'react'
import './ContactListManager.css'
import { useState } from 'react'


function ContactListManagerObjectVersion() {

  const [contacts, setContacts] = useState([]);
  const [contact, setContact] = useState({ name: "", email: "", phone: '' });

  const handleNameChange = (e) => setContact(c => ({ ...c, name: e.target.value }));
  const handleEmailChange = (e) => setContact(c => ({ ...c, email: e.target.value }));
  const handlePhoneChange = (e) => setContact(c => ({ ...c, phone: e.target.value }));
  const addContact = () => {
    if (contact.name.trim() === "" || contact.email.trim() === "" || contact.phone.trim() === "") {
      alert("Please fill out all fields.");
      return;
    }
    setContacts(c => [...c, contact])
    setContact({ name: '', email: '', phone: '' });
  };

  const removeContact = (index) => {
    const newContacts = contacts.filter((_, i) => i !== index);
    setContacts(newContacts)
  }

  return (
    <div className='contact_container'>
      <h2>Contact List Manager</h2>
      <div className='input-container'>
        <input className='input-field' type="text" placeholder='Enter your name...' value={contact.name} onChange={handleNameChange} />
        <input className='input-field' type="text" placeholder='Enter your email...' value={contact.email} onChange={handleEmailChange} />
        <input className="input-field" type="tel" placeholder="Enter your phone number..." value={contact.phone} onChange={handlePhoneChange} />
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
                <button className="action-button" onClick={() => removeContact(index)}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
export default ContactListManagerObjectVersion;