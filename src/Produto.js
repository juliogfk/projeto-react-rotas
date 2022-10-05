import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Produto() {
    const [id, setId] = useState(0);
    const navigate = useNavigate();

    function handleClick() {
        navigate('/Produto/Resultado/'+id)
    };
    return(
        <div>
            <h1>Produto</h1>
            <input value={id} onChange={e => setId(e.target.value)} />
            <button onClick={handleClick}>Enviar</button>
        </div>
    );
};