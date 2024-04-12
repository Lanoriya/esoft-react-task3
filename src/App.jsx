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
            canNow: [
              {
                id: 0,
                name: "HTML",
                description: "Hypertext Markup Language",
                level: 80
              },
              {
                id: 1,
                name: "CSS",
                description: "Cascading Style Sheets",
                level: 80
              },
              {
                id: 2,
                name: "JavaScript",
                description: "High-level programming language",
                level: 40
              },
              {
                id: 3,
                name: "React",
                description: "JavaScript library for building user interfaces",
                level: 20
              },
              {
                id: 4,
                name: "Jest",
                description: "JavaScript Testing Framework",
                level: 20
              },
              {
                id: 5,
                name: "Git",
                description: "Distributed version control system",
                level: 40
              },
              {
                id: 6,
                name: "PostgreSQL",
                description: "Open-source relational database",
                level: 40
              },
              {
                id: 7,
                name: "NodeJS",
                description: "JavaScript runtime environment",
                level: 30
              },
              {
                id: 8,
                name: "Figma",
                description: "Collaborative interface design tool",
                level: 70
              },
              {
                id: 9,
                name: "Photoshop",
                description: "Raster graphics editor",
                level: 70
              },
              {
                id: 10,
                name: "Webpack",
                description: "Module bundler for JavaScript applications",
                level: 20
              }
            ],
            canLater: [
              {
                id: 0,
                name: "JavaScript",
                description: "High-level programming language",
                level: 70
              },
              {
                id: 1,
                name: "React",
                description: "JavaScript library for building user interfaces",
                level: 70
              },
              {
                id: 2,
                name: "NodeJS",
                description: "JavaScript runtime environment",
                level: 70
              },
              {
                id: 3,
                name: "TypeScript",
                description: "Typed superset of JavaScript",
                level: 30
              },
              {
                id: 4,
                name: "Postman",
                description: "Collaborative API development tool",
                level: 40
              },
              {
                id: 5,
                name: "Redux",
                description: "State management library for JavaScript apps",
                level: 30
              },
              {
                id: 6,
                name: "MobX",
                description: "Simple, scalable state management library",
                level: 30
              },
              {
                id: 7,
                name: "PostgreSQL",
                description: "Open-source relational database",
                level: 70
              },
              {
                id: 8,
                name: "Docker",
                description: "Open platform for building, shipping, and running applications",
                level: 30
              },
              {
                id: 9,
                name: "SCSS",
                description: "CSS preprocessor",
                level: 40
              },
              {
                id: 10,
                name: "UI/UX",
                description: "User Interface / User Experience design",
                level: 20
              }
            ]
          }
        }}
      />
    </>
  )
}
