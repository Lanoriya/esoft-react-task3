export function CompetencyList({ competencies }) {
  return (
    <>
      {competencies.map((competency) => (
        <div key={competency.id} className="competency-list">
          <h3>{competency.name}</h3>
          <p>{competency.description}</p>
          <p>Level: {competency.level}%</p>
        </div>
      ))}
    </>
  );
}