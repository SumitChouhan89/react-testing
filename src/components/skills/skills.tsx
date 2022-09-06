import { SkillsProps } from "./skills.types";
import { useState } from "react";

export const Skills = (props: SkillsProps) => {
  const { skills } = props;
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <h1>These are List items</h1>
      <ul>
        {skills.map((skill) => {
          return <li key={skill}>{skill}</li>;
        })}
      </ul>
      {isLoggedIn ? (
        <button>Start Learning</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </>
  );
};
