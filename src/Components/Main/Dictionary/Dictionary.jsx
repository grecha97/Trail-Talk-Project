import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Dictionary.scss';
import DeleteButton from '../../Buttons/DeleteButton/DeleteButton';
import EditButton from '../../Buttons/EditButtons/EditButton';

const Dictionary = () => {
  const [words, setWords] = useState([]);
  const [editingWordId, setEditingWordId] = useState(null);
  const [editedWord, setEditedWord] = useState({});

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

  const handleEditToggle = (word) => {
    setEditingWordId(word.id);
    setEditedWord(word);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedWord({ ...editedWord, [name]: value });
  };

  const handleSave = () => {
    setWords((prevWords) =>
      prevWords.map((word) =>
        word.id === editedWord.id ? editedWord : word
      )
    );
    setEditingWordId(null);
  };

  const handleCancel = () => {
    setEditedWord({});
    setEditingWordId(null);
  };

  const handleDelete = (id) => {
    setWords((prevWords) => prevWords.filter(word => word.id !== id));
  };

  return (
    <div className="dictionary">
      <h1>Dictionary</h1>
      <div className="word-list">
        {words.map((word) => (
          <div key={word.id} className="word">
            {editingWordId === word.id ? (
              <>
                <input
                  type="text"
                  name="english"
                  value={editedWord.english}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="russian"
                  value={editedWord.russian}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="transcription"
                  value={editedWord.transcription}
                  onChange={handleChange}
                />
              </>
            ) : (
              <>
                <div className="word-item">{word.english}</div>
                <div className="word-item">{word.russian}</div>
                <div className="word-item">{word.transcription}</div>
              </>
            )}
            <div className="buttons">
              <EditButton
                isEditing={editingWordId === word.id}
                handleEditToggle={() => handleEditToggle(word)}
                handleSave={handleSave}
                editedWord={editedWord}
                handleChange={handleChange}
                handleCancel={handleCancel}
              />
              <DeleteButton onDelete={() => handleDelete(word.id)} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dictionary;
