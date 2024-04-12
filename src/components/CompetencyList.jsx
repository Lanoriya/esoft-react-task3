import React from 'react';
import './styles/card.css';

export function CompetencyList({ competence }) {
  const { canNow, canLater } = competence;
  
  return (
    <div className='competencies-block'>
      <div className='competencies-item'>
        <h2>I kinda know my way around</h2>
        {canNow.map((competency) => (
          <div key={competency.id} className="competency-list">
            <h3>{competency.name}</h3>
            <p>{competency.description}</p>
            <p>Level: {competency.level}%</p>
          </div>
        ))}
      </div>
      <div className='competencies-item'>
        <h2>Wanna learn or improve</h2>
        {canLater.map((competency) => (
          <div key={competency.id} className="competency-list">
            <h3>{competency.name}</h3>
            <p>{competency.description}</p>
            <p>Level: {competency.level}%</p>
          </div>
        ))}
      </div>
    </div>
  );
}
