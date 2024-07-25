import React from 'react';

const DeveloperSetup: React.FC = () => {
  return (
    <div>
      <h1>Developer Setup</h1>
      <div className = "card-grid">
        <div id ="list">
          <h2>VSCode Setup</h2>
          <p>Preferred extensions for Visual Studio Code.
            <ul>
              <li>WSL</li>
              <li>VSCode rdbg Ruby Debugger</li>
              <li>Ruby Sorbet</li>
              <li>Ruby</li>
              <li>Remote Explorer</li>
              <li>Remote - SSH</li>
              <li>Remote - SSH: Editing Configuration Files</li>
              <li>Python</li>
              <li>Python Debugger</li>
              <li>Pylance</li>
              <li>Project Manager for Java</li>
              <li>PHP Intelephense</li>
              <li>Maven for Java</li>
              <li>Live Server</li>
              <li>Language Support for Java(TM) by Red Hat</li>
              <li>IntelliCode</li>
              <li>IntelliCode API Usage Examples</li>
              <li>Git History</li>
              <li>Extension Pack for Java</li>
              <li>ESLint</li>
              <li>Docker</li>
              <li>Dev Containers</li>
              <li>Debugger for Java</li>
              <li>Ruby LSP</li>
              <li>JavaScript and TypeScript Nightly</li>
            </ul>
          </p>
        </div>
        <div id = "list">
          <h2>Terminal Setup</h2>
          <p>Preferred terminal and settings.
            <ul>
              <li>bash</li>
              <li>Consolas font</li>
            </ul>
          </p><br />
          <h2>Preferred Editor Font</h2>
          <p>Preferred font for coding.
            <ul>
              <li>Consolas</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DeveloperSetup;
