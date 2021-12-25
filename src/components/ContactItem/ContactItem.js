import React from 'react';

const ContactItem = ({ contact: { id, name, phone }, onRemoveContact }) => {
  return (
    <li>
      <p>
        {name}: {phone}
      </p>
      <button onClick={() => onRemoveContact(id)} type="button">
        Remove
      </button>
    </li>
  );
};

export default ContactItem;
