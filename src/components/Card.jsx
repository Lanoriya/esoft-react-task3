import React, { useState } from 'react';
import './styles/card.css';
import { PersonInfo } from './PersonInfo';
import { CompetencyList } from './CompetencyList';
import { FilterButtons } from './FilterButtons';
import { ButtonShow } from './ButtonShow'
import { FilterCompetencies } from './FilterCompetencies';

export function Card({ about }) {
  const { name, photo, competence } = about;
  const [showCompetencies, setShowCompetencies] = useState(false);
  const [filterLevel, setFilterLevel] = useState(null);

  const toggleCompetencies = () => {
    setShowCompetencies(!showCompetencies);
  };

  const handleFilter = (level, type) => {
    if (type === 'over') {
      setFilterLevel(level);
    } else if (type === 'less') {
      setFilterLevel(-level);
    } else {
      setFilterLevel(null);
    }
  };

  const filteredCanNow = FilterCompetencies({ competencies: competence.canNow, filterLevel });
  const filteredCanLater = FilterCompetencies({ competencies: competence.canLater, filterLevel });

  return (
    <div className='card-item'>
      <PersonInfo name={name} photo={photo} />
      <div className='competencies-container'>
        <FilterButtons handleFilter={handleFilter} />
        <ButtonShow onClick={toggleCompetencies} showCompetencies={showCompetencies} />
        {showCompetencies && <CompetencyList competence={{ canNow: filteredCanNow, canLater: filteredCanLater }} />}
      </div>
    </div>
  );
};