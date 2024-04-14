export function ButtonShow({ onClick, showCompetencies }) {
  return (
    <button className='btnShow' onClick={onClick}>
      {showCompetencies ? 'Убрать компетенции' : 'Показать компетенции'}
    </button>
  );
}
