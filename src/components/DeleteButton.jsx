import React from 'react';

function Deletebutton({ id, onDelete }) {
    return <button className='contact-item delete' onClick={() => onDelete ({id})} >X</button>
}

export default Deletebutton;