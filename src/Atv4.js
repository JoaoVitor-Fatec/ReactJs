import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { sculptureList } from './data.js';
import Button from './Button.js';
import AlertButton from './AlertButton.js';


export default function Atv4() {
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);

    function handleNextClick(){
        setIndex(index + 1);
    }

    function handleMoreClick(){
        setShowMore(!showMore);
    }

    let sculpture = sculptureList[index];

    return (
    <>
    <h1>Atv 4</h1>
    <Button />
    <AlertButton />
    <br/>
    <button onClick={handleNextClick}>
        Next
    </button>
    <h2>
        <i>{sculpture.name}</i>
        by {sculpture.artist}
    </h2>
    <h3>
        ({index + 1} of {sculptureList.length})
    </h3>
    <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
        {showMore && <p>{sculpture.description}</p>}
    </button>
    <br/>
    <img 
        src={sculpture.url}
        alt={sculpture.alt}
    />
    <br/>
    <br/>


    <Link to="/">Voltar</Link>
    </>
  );
}