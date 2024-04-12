export function CompetencyList({ competencies }) {
  return (
    <>
      {competencies.map((competency, index) => (
        <p key={index}>{competency}</p>
      ))}
    </>
  );
}