import { useState, useEffect } from 'react';
import './styles/card.css';
import { PersonInfo } from './PersonInfo';
import { CompetencyList } from './CompetencyList';
import { FilterButtons } from './FilterButtons';
import { ButtonShow } from './ButtonShow';
import { FilterCompetencies } from './FilterCompetencies';
import { NewCompetency } from './NewCompetency';

export function Card({ about, }) {
  const { name, photo, competence } = about;
  const [showCompetencies, setShowCompetencies] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [filterLevel, setFilterLevel] = useState(null);
  const [competenceData, setCompetenceData] = useState(null);

  useEffect(() => {
    const storedCompetence = JSON.parse(localStorage.getItem('competence'));
    if (storedCompetence) {
      setCompetenceData(storedCompetence);
    } else {
      setCompetenceData(competence);
    }
  }, [competence]);

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

  const handleDeleteCompetency = (competencyId) => {
    const updatedCompetence = {
      canNow: competenceData.canNow.filter(competency => competency.id !== competencyId),
      canLater: competenceData.canLater.filter(competency => competency.id !== competencyId)
    };
    setCompetenceData(updatedCompetence);

    localStorage.setItem('competence', JSON.stringify(updatedCompetence));
  };

  const handleAddCompetence = (newCompetence, listName) => {
    const updatedCompetence = {
      canNow: competenceData.canNow,
      canLater: competenceData.canLater
    };

    if (listName === 'canNow') {
      updatedCompetence.canNow = [...competenceData.canNow, newCompetence];
    } else {
      updatedCompetence.canLater = [...competenceData.canLater, newCompetence];
    }

    setCompetenceData(updatedCompetence);

    localStorage.setItem('competence', JSON.stringify(updatedCompetence));
    setShowForm(false);
  };

  const filteredCanNow = FilterCompetencies({ competencies: competenceData?.canNow || [], filterLevel });
  const filteredCanLater = FilterCompetencies({ competencies: competenceData?.canLater || [], filterLevel });

  return (
    <div className='card-item'>
      <PersonInfo name={name} photo={photo} />
      <div className='competencies-container'>
        <button onClick={() => setShowForm(true)}>Добавить компетенцию</button>
        {showForm && <NewCompetency onAddCompetence={handleAddCompetence} setShowForm={setShowForm}/>}
        <FilterButtons handleFilter={handleFilter} />
        <ButtonShow onClick={toggleCompetencies} showCompetencies={showCompetencies} />
        {showCompetencies && 
          <CompetencyList 
            competence={{ canNow: filteredCanNow, canLater: filteredCanLater }} 
            onDeleteCompetency={handleDeleteCompetency} 
          />
        }
      </div>
    </div>
  );
}
