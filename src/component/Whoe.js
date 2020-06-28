import React from 'react';

const Whoe = () => {
  return (
    <div>
      <section id='who'>
        <div className='who-img'></div>
        <div className='who-text bg-dark p-2'>
          <h2 className='m-heading'>
            <span className='text-primary'>Who</span> We Are
          </h2>
          <p className='lead'>
            {' '}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            voluptatibus debitis praesentium inventore, eum dese Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Quae voluptatibus
            debitis praesentium inventore, eum dese
          </p>
          <br></br>
          <h3>Our Team</h3>
          <ul className='list'>
            <li>Awais: CEO </li>
            <li>Musa: CFO</li>
            <li>Ali: Senior Manager</li>
            <li>Ahmad: Investment Manager</li>
            <li>Hassan: Accountant</li>
          </ul>
        </div>
      </section>
    </div>
  );
};
export default Whoe;
