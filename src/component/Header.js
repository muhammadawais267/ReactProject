import React from 'react';
const Header = () => {
  return (
    <div>
      <nav id='navbar'>
        <h1 className='logo'>
          <span className='text-primary'>
            {' '}
            <i className='fas fa-book-open'></i> Edge
          </span>{' '}
          Ledger
        </h1>
        <ul>
          <li>
            <a href='#home'>Home</a>
          </li>
          <li>
            <a href='#what'>What</a>
          </li>
          <li>
            <a href='#who'>Who</a>
          </li>
          <li>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
