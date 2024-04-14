export function FilterCompetencies({ competencies, filterLevel }) {
  return competencies.filter((item) => {
    if (filterLevel === null) {
      return true;
    } else if (filterLevel > 0) {
      return item.level >= filterLevel;
    } else {
      return item.level <= -filterLevel;
    }
  });
}