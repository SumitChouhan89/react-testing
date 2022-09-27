import { SkillsProps } from './skills.types'
import { useState, useEffect } from 'react'

export const Skills = (props: SkillsProps) => {
  const { skills } = props
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setIsLoggedIn(true)
    }, 1001)
  }, [])
  return (
    <>
      <h1>These are List items</h1>
      <ul>
        {skills.map((skill) => {
          return <li key={skill}>{skill}</li>
        })}
      </ul>
      {isLoggedIn ? (
        <button>Start Learning</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </>
  )
}
