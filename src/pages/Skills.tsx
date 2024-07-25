import React from 'react';

const Skills: React.FC = () => {
  return (
    <div id = "skills">
      <h1>Skills</h1>
      <p>Things I should know how to do and use based on my education<br /> at Red River College in the Full Stack Web Development program.</p>
      <div className = "card-grid">
        <div id = "list">
          <h2>Languages &<br />Frameworks</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>TypeScript</li>
            <li>Styled-Components</li>
            <li>Ruby on Rails</li>
            <li>Python</li>
          </ul>
        </div>
        <div id = "list">
          <h2>Tools</h2>
          <ul>
            <li>Visual Studio Code</li>
            <li>Git</li>
            <li>Docker</li>
            <li>Oracle VM VirtualBox</li>
            <li>WinSCP</li>
            <li>PostgreSQL</li>
            <li>MySQL Manager Lite</li>
            <li>XAMPP</li>
            <li>Postman</li>
            <li>PyCharm</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
