import React from 'react';

function Deletebutton({ id, onDelete }) {
    return <button className='contact__item delete' onClick={() => onDelete ({id})} >X</button>
}

export default Deletebutton;