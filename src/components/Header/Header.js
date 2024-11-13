import React from 'react';
import '../Header/header.css'

const Header = () => {
  return (
    <header className='fp-header'>
      <div className='left-section'>

        <div className='logo-container'>
          <img className='fp-logo' src='/imgs/logos/fp-logo.png' alt='logo' />
        </div>

      </div>

      <div className='middle-section'>
        <button className='search-button'>
          <img src='/imgs/icons/search.png' alt='search-icon' />
        </button>

        <input className='search-bar' type='search' name='search' placeholder='Search' />
      </div>

      <div className='right-section'>

        <div className='instagram-icon-container'>
          <img src='/imgs/icons/instagram.png' alt='instagram-icon' />
        </div>


        <div className='profile-picture-container'>
          <img src='/imgs/profile-picture/farid-picture.jpg' alt='farid-picture-profile' />
        </div>

      </div>
    </header>
  );
};

export default Header;