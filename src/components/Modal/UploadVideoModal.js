import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import '../Modal/uploadVideoModal.css';

const UploadVideoModal = ({ onClose }) => {
  const onDrop = useCallback((acceptedFiles) => {
    // Handle files here
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: 'video/*',
  });

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>

        <h2>Upload Your Video</h2>
        <form>
          <div
            {...getRootProps()}
            className={`dropzone ${isDragActive ? 'dragging' : ''}`}
          >
            <input {...getInputProps()} />
            {isDragActive ? (
              <p>Drop the files here ...</p>
            ) : (
              <p>Drag and drop a video file here, or click to select one</p>
            )}
          </div>
          <button type="submit">Upload</button>
          <button type="button" onClick={onClose}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default UploadVideoModal;
