import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
// import Resume from '../static/assets/files/cv.pdf'
import '../App.css'

// import { Document, Page, pdfjs } from 'react-pdf'; // Import pdfjs


const PdfViewer = ({ Resume }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const enterFullScreen = () => {
    setIsFullScreen(true);
    const docElement = document.documentElement;
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
    < div className={`pdf-viewer ${isFullScreen ? 'full-screen' : ''}`}>
      <button onClick={enterFullScreen}>Enter Full Screen</button>
      {isFullScreen && <button onClick={exitFullScreen}>Exit Full Screen</button>}
      <Document file={Resume}>
        <Page pageNumber={1} width={600} />
      </Document>
    </div>
  );
};

export default PdfViewer;

// import React, { useState } from 'react';
// import { Document, Page, pdfjs } from 'react-pdf';
// import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// const PDFViewer = ({ pdfUrl }) => {
//   const [numPages, setNumPages] = useState(null);
//   const [pageNumber, setPageNumber] = useState(1);
//   const [fullscreen, setFullscreen] = useState(false);

//   const handleFullsreenToggle = () => {
//     setFullscreen(!fullscreen);
//   };

//   const handleDocumentLoadSuccess = ({ numPages }) => {
//     setNumPages(numPages);
//   };

//   return (
//     <div className={`pdf-viewer ${fullscreen ? 'fullscreen' : ''}`}>
//       <div className="pdf-toolbar">
//         <button onClick={handleFullsreenToggle}>
//           {fullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
//         </button>
//         <a href={pdfUrl} download="document.pdf">
//           Download PDF
//         </a>
//       </div>
//       <div className="pdf-container">
//         <Document
//           file={pdfUrl}
//           onLoadSuccess={handleDocumentLoadSuccess}
//         >
//           <Page pageNumber={pageNumber} />
//         </Document>
//       </div>
//     </div>
//   );
// };

// export default PDFViewer;
