import React, { useState } from 'react';
import '../Cards/Cards.scss';


const Card = ({ word }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleToggleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className='card-container'>
    <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleToggleFlip}>
      <div className="card-front">
        <div className="card-content">
          <h2 className="card-title">{word.english}</h2>
          <p className="card-transcription">{word.transcription}</p>
        </div>
      </div>
      <div className="card-back">
        <div className="card-content">
          <h2 className="card-title">{word.russian}</h2>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Card;

