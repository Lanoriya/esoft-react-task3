export function PersonInfo({ name, photo }) {
  return (
    <div className='card-about'>
      <h1>{name}</h1>
      <img className='card-img' src={photo} alt={name} />
    </div>
  );
}
