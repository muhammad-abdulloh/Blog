import React, { useState } from 'react';
import ModalComponent from './ModalComponent';
import { Document, Page } from 'react-pdf';
// import PdfViewer from './PdfViewer';
import Resume from '../static/assets/files/cv.pdf'


function Cv() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const enterFullScreen = () => {
    setIsFullScreen(true);
    const docElement = Resume;
    if (docElement.requestFullscreen) {
      docElement.requestFullscreen();
    }
  };

  const exitFullScreen = () => {
    setIsFullScreen(false);
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  };

  return (
    <div>
        <h1>PDF Viewer Modal</h1>
      <button className='btn-cv' onClick={openModal}>Open PDF Modal</button>

      {/* Option 1: Using iframe inside the modal */}
      <ModalComponent isOpen={isModalOpen} closeModal={closeModal} pdfUrl={Resume}
        />

      {/* Option 2: Using react-pdf */}
      {/* <PdfViewer pdfUrl={Resume} /> */}
    </div>
  )
}

export default Cv


// import React from 'react';
// import PdfViewer from './PdfViewer';

// const Cv = () => {
//   const pdfUrl = '../static/assets/files/cv.pdf'; // Replace with your actual PDF URL

//   return (
//     <div className="app">
//       <PdfViewer pdfUrl={pdfUrl} />
//     </div>
//   );
// };

// export default Cv;
