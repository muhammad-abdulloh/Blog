import React,{useState} from 'react';
import Modal from 'react-modal';
import Resume from '../static/assets/files/cv.pdf';
import PdfViewer from './PdfViewer';

const ModalComponent = ({ isOpen, closeModal }) => {

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="PDF Modal"
    >
      <button onClick={closeModal}>Close Modal</button>
      <iframe src={Resume} title="PDF Viewer" width="100%" height="500px"></iframe>
      <PdfViewer/>
    </Modal>
  );
};

export default ModalComponent;

