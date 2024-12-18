import React, { useCallback, useState } from 'react';

import YearSelect from '../Utils/yearSelect';
import '../Modal/uploadVideoModal.css';

const UploadVideoModal = ({ onClose }) => {

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>

        <h2 className="form-header">Upload Your Video</h2>

        <form className="video-upload-form">


          {/* Required Info Form */}
          <div className="required-info-form">
            <div className="video-main-info">
              <div className="select-options">
                <p>Video Title <span className="form-required">*</span></p>
                <input className="video-title-input" type="text" required />
              </div>
              <div className="select-options">
                <p>Video Description <span className="form-required">*</span></p>
                <textarea className="video-description-input" required></textarea>
              </div>
            </div>

            <div className="input-select-options">
              {/* Brand Select */}
              <div className="select-options">
                <p>Select Brand <span className="form-required">*</span></p>
                <select required>
                  <option value="" disabled selected>Brand</option>
                  <option>Huski</option>
                  <option>HighScale</option>
                  {/* Add more brands here */}
                </select>
              </div>

              {/* Category Select */}
              <div className="select-options">
                <p>Select Category <span className="form-required">*</span></p>
                <select required>
                  <option value="" disabled selected>Category</option>
                  <option>Animation</option>
                  <option>Reel</option>
                  {/* Add more categories here */}
                </select>
              </div>

              {/* Year Select */}
              <div className="select-options">
                <p>Select Year <span className="form-required">*</span></p>
                <YearSelect />
              </div>
            </div>
          </div>

          <div className="form-buttons-container">
            <button className="upload-button" type="submit">Upload</button>
            <button className="cancel-button" type="button" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadVideoModal;
