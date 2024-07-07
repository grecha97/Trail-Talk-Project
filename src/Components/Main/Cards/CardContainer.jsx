import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Cards'
import '../Cards/Cards.scss';

const CardContainer = () => {
  const [words, setWords] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://itgirlschool.justmakeit.ru/api/words');
      setWords(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + words.length) % words.length);
  };

  if (words.length === 0) {
    return <div>No words available.</div>;
  }

  return (
    <div className="card-container">
      <div className="card-slider">
        <Card word={words[currentIndex]} />
      </div>
      <div className="nav-buttons">
        <button className="nav-button prev-button" onClick={handlePrev}></button>
        <button className="nav-button next-button" onClick={handleNext}></button>
      </div>
    </div>
  );
};

export default CardContainer;