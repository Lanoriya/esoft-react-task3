import { useState } from 'react';
import { PersonInfo } from './PersonInfo';
import './styles/card.css';
import { ButtonShow } from './ButtonShow';
import { CompetencyBlock } from './CompetencyBlock';

export function Card({ about }) {
  const { name, photo, competence } = about;
  const [showCompetencies, setShowCompetencies] = useState(false);

  const toggleCompetencies = () => {
    setShowCompetencies(!showCompetencies);
  };

  return (
    <>
      <div className='card-item'>
        <PersonInfo name={name} photo={photo} />
        <div className='competencies-container'>
          <ButtonShow onClick={toggleCompetencies} showCompetencies={showCompetencies} />
          {showCompetencies && <CompetencyBlock competence={competence} />}
        </div>
      </div>
    </>
  )
}
