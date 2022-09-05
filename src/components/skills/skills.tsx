import { SkillsProps } from "./skills.types";

export const Skills = (props: SkillsProps) => {
  const { skills } = props;
  return (
    <>
      <h1>These are List items</h1>
      <ul>
        {skills.map((skill) => {
          return <li key={skill}>{skill}</li>;
        })}
      </ul>
    </>
  );
};
