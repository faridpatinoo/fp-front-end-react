import React from 'react';
import '../Footer/footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='copyright'>
        Copyright &copy; 2024 FaridPatinoo Inc. All rights reserved.
      </div>

      <div className='contact-info'>
        <a href='mailto:fc.patino5@gmail.com'>Email Me</a>
        <a href='tel:+573102155997'>Call Me</a>
      </div>
    </footer>
  )
}

export default Footer;