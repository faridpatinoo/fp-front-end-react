import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import '../Utils/dropzone.css'

export function DropVideo({ onFileSelect }) {
  // State to track the icon
  const [icon, setIcon] = useState('/imgs/icons/video-icon.svg'); // Default icon

  const {
    getRootProps,
    getInputProps,
    acceptedFiles
  } = useDropzone({
    maxFiles: 1,
    accept: {
      'video/*': ['.mp4']
    },
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        setIcon('/imgs/icons/ok.png'); // Change to success icon
        onFileSelect(acceptedFiles);
      }
    },
    onDropRejected: (rejectedFiles) => {
      if (rejectedFiles.length > 0) {
        alert(`Only one file is allowed. You tried to upload ${rejectedFiles.length} files.`);
      }
    }
  });

  const files = acceptedFiles.map(file => (
    <div className='filename-dropzone' key={file.path}>
      {file.path} - {file.size} bytes
    </div>
  ));

  return (
    <section>
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} required />
        <img className="dropzone-icons" src={icon} alt="Dropzone Icon" />
        <p className='dropzone-file'>{files}</p>
      </div>
    </section>
  );
}

//--------------------

export function DropImage({ onFileSelect }) {
  const [icon2, setIcon2] = useState('/imgs/icons/image-icon.svg'); // Default icon

  const {
    getRootProps,
    getInputProps,
    acceptedFiles
  } = useDropzone({
    maxFiles: 1,
    accept: {
      'image/*': ['.png']
    },
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        setIcon2('/imgs/icons/ok.png'); // Change to success icon
        onFileSelect(acceptedFiles);
      }
    },
    onDropRejected: (rejectedFiles) => {
      if (rejectedFiles.length > 0) {
        alert(`Only one file is allowed. You tried to upload ${rejectedFiles.length} files.`);
      }
    }
  });

  const files = acceptedFiles.map(file => (
    <div className='filename-dropzone' key={file.path}>
      {file.path} - {file.size} bytes
    </div>
  ));

  return (
    <section>
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} required />
        <img className='dropzone-icons' src={icon2} />
        <p className='dropzone-file'>{files}</p>
      </div>
    </section>
  );
}