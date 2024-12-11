import React from 'react';
import '../Header/header.css';
import { Link } from 'react-router-dom';

const Header = ({ onUploadClick }) => { // Accept the prop
  return (
    <header className="fp-header">
      <div className="left-section">
        <Link to="/">
          <div className="logo-container">
            <img className="fp-logo" src="/imgs/logos/fp-logo.png" alt="logo" />
          </div>
        </Link>
        <div
          className="upload-icon-container"
          onClick={onUploadClick} // Attach the click event
        >
          <img className="fp-logo" src="/imgs/icons/upload.png" alt="upload-icon" />
        </div>
      </div>

      <div className="middle-section">
        <button className="search-button">
          <img src="/imgs/icons/search.png" alt="search-icon" />
        </button>

        <input
          className="search-bar"
          type="search"
          name="search"
          placeholder="Search"
        />
      </div>

      <div className="right-section">
        <Link
          to={
            "https://www.instagram.com/faridpatinoo/profilecard/?igsh=MTZ3NHM1bWo4ZnpvaQ=="
          }
          target="_blank"
        >
          <div className="instagram-icon-container">
            <img src="/imgs/icons/instagram.png" alt="instagram-icon" />
          </div>
        </Link>

        <Link
          to={
            "https://www.instagram.com/faridpatinoo/profilecard/?igsh=MTZ3NHM1bWo4ZnpvaQ=="
          }
          target="_blank"
        >
          <div className="profile-picture-container">
            <img
              src="/imgs/profile-picture/farid-picture.jpg"
              alt="farid-picture-profile"
            />
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
