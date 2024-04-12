import { Card } from './components/Card.jsx'
import './App.css'

export function App() {

  return (
    <>
      <Card
        about={{
          name: 'Shastin Andrew Alexandrovich',
          photo: 'https://sun9-51.userapi.com/impg/PUwD3x71B3HTq6uSjNp36eVauhBW9AiVslFP3g/5zlz2Cxmq-0.jpg?size=1081x1081&quality=96&sign=0aebe614a2bb75280cca574921f80fd7&type=album',
          competence: {
            canNow: ['HTML', 'CSS', 'JavaScript', 'React', 'Jest', 'Git', 'PostgreSQL', 'NodeJS', 'Figma', 'Photoshop', 'Webpack'],
            canLater: ['JavaScript', 'React', 'NodeJS', 'TypeScript', 'Postman', 'Redux', 'MobX', 'PostgreSQL', 'Docker', 'SCSS', 'UI/UX'],
          }
        }}
      />
    </>
  )
}
