import React, { useState } from 'react';

export function NewCompetency({ onAddCompetence, setShowForm }) {
  const [newCompetence, setNewCompetence] = useState({
    name: '',
    description: '',
    level: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewCompetence({
      ...newCompetence,
      [name]: value
    });
  };

  const handleCreateCompetence = () => {
    if (newCompetence.name && newCompetence.description && newCompetence.level) {
      const newId = Date.now();
      const newCompetenceItem = {
        id: newId,
        name: newCompetence.name,
        description: newCompetence.description,
        level: parseInt(newCompetence.level)
      };

      // Вызываем колбэк, передавая новую компетенцию
      onAddCompetence(newCompetenceItem);

      setNewCompetence({
        name: '',
        description: '',
        level: ''
      });
    } else {
      alert('Пожалуйста, заполните все поля формы');
    }
  };

  return (
    <div className='form-container'>
      <form className='form-competency' onSubmit={(e) => { e.preventDefault(); handleCreateCompetence(); }}>
        <label>
          Название компетенции:
          <input type="text" name="name" value={newCompetence.name} onChange={handleInputChange} required />
        </label>
        <label>
          Описание компетенции:
          <input type="text" name="description" value={newCompetence.description} onChange={handleInputChange} required />
        </label>
        <label>
          Уровень компетенции (0-100%):
          <input type="number" name="level" min="0" max="100" value={newCompetence.level} onChange={handleInputChange} required />
        </label>
        <button type="submit">Создать</button>
        <span
          className='delete-competence'
          onClick={() => {setShowForm(false)}}>❌</span>
      </form>
    </div>
  );
}
