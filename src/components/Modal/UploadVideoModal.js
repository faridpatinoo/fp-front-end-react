import React from 'react';
import '../Modal/uploadVideoModal.css'

const UploadVideoModal = ({ onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>

        <h2 className='modal-headline'>Upload Your Video</h2>
        <form>
          <input type="file" accept="video/*" />
          <button type="submit">Upload</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default UploadVideoModal;
