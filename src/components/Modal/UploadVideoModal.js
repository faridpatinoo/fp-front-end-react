import { useState } from 'react';
import { DropImage, DropVideo } from '../Utils/dropzones';
import YearSelect from '../Utils/yearSelect';
import '../Modal/uploadVideoModal.css';

const UploadVideoModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    videoFile: null,
    imageFile: null,
    title: '',
    description: '',
    category: '',
    brand: '',
    type: '',
    year: '',
    heroCarrousel: false,
    top10: false
  });

  // Handle input changes (text inputs, select options, checkboxes)
  const handleInputChange = (event) => {
    const { name, value, type, checked, files } = event.target;

    if (type === 'file') {
      // Handle file input (video and image drag and drop)
      setFormData((prevData) => ({
        ...prevData,
        [name]: files[0],  // Store the first selected file
      }));
    } else if (type === 'checkbox') {
      // Handle checkbox inputs
      setFormData((prevData) => ({
        ...prevData,
        [name]: checked,
      }));
    } else {
      // Handle text inputs and select options
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleFileSelect = (acceptedFiles, fileType) => {
    if (fileType === 'video') {
      setFormData({ ...formData, video: acceptedFiles[0] });
    } else if (fileType === 'image') {
      setFormData({ ...formData, image: acceptedFiles[0] });
    }
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();  // Prevent default form submission

    // Prepare FormData to send, including files
    const dataToSend = new FormData();
    dataToSend.append('title', formData.title);
    dataToSend.append('description', formData.description);
    dataToSend.append('category', formData.category);
    dataToSend.append('type', formData.type);
    dataToSend.append('brand', formData.brand);
    dataToSend.append('year', formData.year);

    if (formData.image) dataToSend.append('image', formData.image);
    if (formData.video) dataToSend.append('video', formData.video);

    dataToSend.append('heroCarrousel', formData.heroCarrousel);
    dataToSend.append('top10', formData.top10);

    dataToSend.forEach((value, key) => {
      console.log(`${key}:`, value);
    });

    try {
      const response = await fetch('your-endpoint-url', {
        method: 'POST',
        body: dataToSend,  // Send FormData (including files)
      });

      const result = await response.json();
      console.log('Success:', result);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>

        <h2 className="form-header">Upload Video (pre-Alfa)</h2>

        <form onSubmit={handleSubmit} className="video-upload-form">
          <div className='dropzones-container'>
            <DropVideo onFileSelect={(files) => handleFileSelect(files, 'video')} />
            <DropImage onFileSelect={(files) => handleFileSelect(files, 'image')} />
          </div>

          {/* Required Info Form */}
          <div className="required-info-form">
            <div className="video-main-info">
              <div className="select-options">
                <p>Video Title <span className="form-required">*</span></p>
                <input
                  name='title'
                  value={formData.title}
                  onChange={handleInputChange}
                  className="video-title-input"
                  type="text"
                  required
                />
              </div>
              <div className="select-options">
                <p>Video Description <span className="form-required">*</span></p>
                <textarea
                  name='description'
                  value={formData.description}
                  onChange={handleInputChange}
                  className="vide-description-title"
                  required>
                </textarea>
              </div>
            </div>

            <div className="input-select-options">
              {/* Category Select */}
              <div className="select-options">
                <p>Select Category <span className="form-required">*</span></p>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  required
                >
                  <option value="" disabled selected>Category</option>
                  <option>Animation</option>
                  <option>Reel</option>
                  <option>Facebook</option>
                  <option>Originals</option>
                  <option>Youtube</option>
                  <option>TV</option>
                  <option>End-Card</option>
                </select>
              </div>

              {/* Brand Select */}
              <div className="select-options">
                <p>Select Brand <span className="form-required">*</span></p>
                <select
                  name="brand"
                  value={formData.brand}
                  onChange={handleInputChange}
                  requiredrequired
                >
                  <option value="" disabled selected>Brand</option>
                  <option>Huski</option>
                  <option>HighScale</option>
                  {/* Add more brands here */}
                </select>
              </div>

              {/* Type Select */}
              <div className="select-options">
                <p>Select Type <span className="form-required">*</span></p>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleInputChange}
                  requiredrequired
                >
                  <option value="" disabled selected>Type</option>
                  <option>horizontal</option>
                  <option>square</option>
                  <option>vertical</option>
                  <option>animation</option>
                </select>
              </div>

              {/* Year Select */}
              <div className="select-options">
                <p>Select Year <span className="form-required">*</span></p>
                <YearSelect
                  name='year'
                  value={formData.year}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>

          <div>
            <div>
              <input
                type="checkbox"
                id="hero"
                name="heroCarrousel"
                checked={formData.heroCarrousel}
                onChange={handleInputChange}
              />
              <label className='form-checkbox' for="Hero">Show in the Hero Carrousel</label>
            </div>

            <div>
              <input
                type="checkbox"
                id="top"
                name="top10"
                checked={formData.top10}
                onChange={handleInputChange}
              />
              <label className='form-checkbox' for="top">Show in the TOP 10</label>
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
