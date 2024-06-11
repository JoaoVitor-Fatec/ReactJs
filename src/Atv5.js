import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FormQuiz from './FormQuiz';
import FormTicket from './FormTicket';
import Accordion from './Accordion';
import Chat from './Chat.js';
import ContactList from './ContactList.js'


export default function Atv5() {
    const [to, setTo] = useState(contacts[0]);
  return (
    <>
        <h1>Atividade 5</h1>
        <FormQuiz />
        <FormTicket />
        <Accordion />
        <br />
        <div>
            <ContactList
                contacts={contacts}
                selectedContact={to}
                onSelect={contact => setTo(contact)}
            />
            <Chat key={to.email} contact={to} />
        </div>
        <br />
        <Link to="/">Voltar</Link>
        
    </>
  );
}

const contacts = [
    { name: 'Taylor', email: 'taylor@gmail.com' },
    { name: 'Alice', email: 'alice@gmail.com' },
    { name: 'Bob', email: 'bob@gmail.com' }
];