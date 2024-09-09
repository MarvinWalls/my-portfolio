import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-100 text-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Data and Coding Projects</h2>
        <div className="bg-white shadow-lg rounded-lg p-6">
          {/* Friend Analyzer Project */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2">Friend Analyzer</h3>
            <p className="mb-2">
              <strong>Website:</strong> 
              <a href="https://marvinwalls.github.io/friend-list-analyzer/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline ml-1">
                https://marvinwalls.github.io/friend-list-analyzer/
              </a>
            </p>
            <p className="mb-2">
              <strong>Github:</strong> 
              <a href="https://github.com/MarvinWalls/friend-list-analyzer" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline ml-1">
                https://github.com/MarvinWalls/friend-list-analyzer
              </a>
            </p>
            <p>Description: Website where you can analyze your friend's list as discussed in my Substack Article: <i>If you had a different name, would your life be different?</i></p>
          </div>

          {/* Pinball Wizard Project */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Pinball Wizard</h3>
            <p className="mb-2">
              <strong>Github:</strong> 
              <a href="https://github.com/MarvinWalls/PinballWizard" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline ml-1">
                https://github.com/MarvinWalls/PinballWizard
              </a>
            </p>
            <p>Description: Work in progress! An ML program designed to independently play and learn the classic Windows Pinball Game uses only OCR score data and CNN to process the images. Please feel free to reach out with questions, hoping to have this fully hashed out with a video explaining how to set up and use it by the end of 2024.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
