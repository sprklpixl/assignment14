import React from 'react';

const Resources: React.FC = () => {
  return (
    <div>
      <h1>Resources</h1>
      <div className = "card-grid">
        <div className = "card">
          <h3>Visual Studio Code</h3>
          <img src="https://via.placeholder.com/100x100" alt="Resource Icon" />
          <p>Code editor with syntax highlighting for many languages. A variety of extensions available.</p>
          <a href="https://code.visualstudio.com/download">Download VS Code</a>
        </div>
        <div className = "card">
          <h3>Docker</h3>
          <img src="https://via.placeholder.com/100x100" alt="Resource Icon" />
          <p>Create and manage containers for development.</p>
          <a href="https://www.docker.com/products/docker-desktop/">Download Docker for Desktop</a>
        </div>
        <div className = "card">
          <h3>Oracle VM VirtualBox</h3>
          <img src="https://via.placeholder.com/100x100" alt="Resource Icon" />
          <p>Run different operating systems in virtual machines.</p>
          <a href="https://www.virtualbox.org/wiki/Downloads">Download VirtualBox</a>
        </div>
        <div className = "card">
          <h3>WinSCP</h3>
          <img src="https://via.placeholder.com/100x100" alt="Resource Icon" />
          <p>FTP Program for transferring files to and from servers/virtual machines.</p>
          <a href="https://winscp.net/eng/download.php">Download WinSCP</a>
        </div>
        <div className = "card">
          <h3>PostgreSQL</h3>
          <img src="https://via.placeholder.com/100x100" alt="Resource Icon" />
          <p>Helps you manage your data.</p>
          <a href="https://www.postgresql.org/download/">Download PostgreSQL</a>
        </div>
        <div className = "card">
          <h3>MySQL Manager Lite</h3>
          <img src="https://via.placeholder.com/100x100" alt="Resource Icon" />
          <p>Create and manage databases.</p>
          <a href="https://www.download.io/ems-sql-manager-lite-for-mysql-download-windows.html">Download MySQL Manager Lite</a>
        </div>
        <div className = "card">
          <h3>XAMPP</h3>
          <img src="https://via.placeholder.com/100x100" alt="Resource Icon" />
          <p>Apache distribution containing MariaDB, PHP, and Perl.</p>
          <a href="https://www.apachefriends.org/download.html">Download XAMPP</a>
        </div>
        <div className = "card">
          <h3>Postman</h3>
          <img src="https://via.placeholder.com/100x100" alt="Resource Icon" />
          <p>Facilitates API request sending from your browser version of Postman.</p>
          <a href="https://www.postman.com/downloads/">Download Postman</a>
        </div>
        <div className = "card">
          <h3>PyCharm</h3>
          <img src="https://via.placeholder.com/100x100" alt="Resource Icon" />
          <p>Python IDE.</p>
          <a href="https://www.jetbrains.com/pycharm/download">Download PyCharm Community Edition</a>
        </div>
      </div>
    </div>
  );
};

export default Resources;
