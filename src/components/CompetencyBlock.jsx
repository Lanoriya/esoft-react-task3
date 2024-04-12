import React from 'react';
import { CompetencyList } from './CompetencyList';
import './styles/card.css';

export function CompetencyBlock({ competence }) {
  return (
    <div className='competencies-block'>
      <div className='competencies-item'>
        <h2>I kinda know my way around</h2>
        <CompetencyList title="I kinda know my way around" competencies={competence.canNow} />
      </div>
      <div className='competencies-item'>
        <h2>Wanna learn or improve</h2>
        <CompetencyList title="Wanna learn or improve" competencies={competence.canLater} />
      </div>
    </div>
  );
}