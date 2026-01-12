
import React from 'react';
import './Resume.css';


function Resume() {
    return (
      <div>
  <h2>My Resume</h2>
  <a
    href="https://drive.google.com/file/d/1lBeEfw-gi1Sif_y2nGTgGNSUyVNs_Nx5/view"
    target="_blank"
    rel="noopener noreferrer"
  >
    <button>View Resume</button>
  </a>
   <h2>My LinkedIn</h2>
  <a
    href="https://www.linkedin.com/in/yub32484/"

    target="_blank"
    rel="noopener noreferrer"
  >
    <button>View LinkedIn</button>
  </a>
   <h2>My GitHub</h2>
  <a
    href="https://github.com/Uddin32484?tab=repositories"
    target="_blank"
    rel="noopener noreferrer"
  >
    <button>View GitHub</button>

   
  </a>

  <a href="/contact" class="info-button">Further Information – Click Here</a>
</div>

    );
}

export default Resume;
