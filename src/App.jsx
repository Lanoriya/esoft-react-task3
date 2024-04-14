import { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { Card } from './components/Card.jsx';
import './App.css';

export function App() {
  const [dataLoaded, setDataLoaded] = useState(false)

  const generateUniqueId = () => {
    return uuid();
  };

  useEffect(() => {
    const savedData = localStorage.getItem('about');

    if (!savedData) {
      const aboutData = {
        name: 'Shastin Andrew Alexandrovich',
        photo: 'https://sun9-51.userapi.com/impg/PUwD3x71B3HTq6uSjNp36eVauhBW9AiVslFP3g/5zlz2Cxmq-0.jpg?size=1081x1081&quality=96&sign=0aebe614a2bb75280cca574921f80fd7&type=album',
        competence: {
          canNow: [
            {
              id: generateUniqueId(),
              name: "HTML",
              description: "Hypertext Markup Language",
              level: 80
            },
            {
              id: generateUniqueId(),
              name: "CSS",
              description: "Cascading Style Sheets",
              level: 80
            },
            {
              id: generateUniqueId(),
              name: "JavaScript",
              description: "High-level programming language",
              level: 40
            },
            {
              id: generateUniqueId(),
              name: "React",
              description: "JavaScript library for building user interfaces",
              level: 20
            },
            {
              id: generateUniqueId(),
              name: "Jest",
              description: "JavaScript Testing Framework",
              level: 20
            },
            {
              id: generateUniqueId(),
              name: "Git",
              description: "Distributed version control system",
              level: 40
            },
            {
              id: generateUniqueId(),
              name: "PostgreSQL",
              description: "Open-source relational database",
              level: 40
            },
            {
              id: generateUniqueId(),
              name: "NodeJS",
              description: "JavaScript runtime environment",
              level: 30
            },
            {
              id: generateUniqueId(),
              name: "Figma",
              description: "Collaborative interface design tool",
              level: 70
            },
            {
              id: generateUniqueId(),
              name: "Photoshop",
              description: "Raster graphics editor",
              level: 70
            },
            {
              id: generateUniqueId(),
              name: "Webpack",
              description: "Module bundler for JavaScript applications",
              level: 20
            }
          ],
          canLater: [
            {
              id: generateUniqueId(),
              name: "JavaScript",
              description: "High-level programming language",
              level: 70
            },
            {
              id: generateUniqueId(),
              name: "React",
              description: "JavaScript library for building user interfaces",
              level: 70
            },
            {
              id: generateUniqueId(),
              name: "NodeJS",
              description: "JavaScript runtime environment",
              level: 70
            },
            {
              id: generateUniqueId(),
              name: "TypeScript",
              description: "Typed superset of JavaScript",
              level: 30
            },
            {
              id: generateUniqueId(),
              name: "Postman",
              description: "Collaborative API development tool",
              level: 40
            },
            {
              id: generateUniqueId(),
              name: "Redux",
              description: "State management library for JavaScript apps",
              level: 30
            },
            {
              id: generateUniqueId(),
              name: "MobX",
              description: "Simple, scalable state management library",
              level: 30
            },
            {
              id: generateUniqueId(),
              name: "PostgreSQL",
              description: "Open-source relational database",
              level: 70
            },
            {
              id: generateUniqueId(),
              name: "Docker",
              description: "Open platform for building, shipping, and running applications",
              level: 30
            },
            {
              id: generateUniqueId(),
              name: "SCSS",
              description: "CSS preprocessor",
              level: 40
            },
            {
              id: generateUniqueId(),
              name: "UI/UX",
              description: "User Interface / User Experience design",
              level: 20
            }
          ]
        }
      }
      localStorage.setItem('about', JSON.stringify(aboutData));
    }
    setDataLoaded(true);
  }, []);

  return (
    <>
      {dataLoaded && <Card about={JSON.parse(localStorage.getItem('about'))} />}
    </>
  )
}
