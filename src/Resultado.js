import React from 'react';
import { useParams } from 'react-router-dom';

export default function Resultado() {
    const {id} = useParams();

    return(
        <div>
            <h1>Resultado</h1>
            <p>O resultado é {id}</p>
        </div>
    );
};