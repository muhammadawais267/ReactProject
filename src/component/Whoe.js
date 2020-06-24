import React from 'react';

const Whoe = () => {
  return (
    <div>
      <section id='who'>
        <div className='who-img'></div>
        <div className='who-text bg-dark p-2'>
          <h3 className='m-heading'>
            <span className='text-primary'>Who </span> We Are
          </h3>
          <p>
            {' '}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
            culpa harum voluptas ratione enim consequuntur illo, atque, aut
            doloribus unde repellendus sit delectus beatae aspernatur placeat
            corrupti. Ipsa, itaque quas.
          </p>
          <h3>Our Team</h3>
          <ul className='list'>
            <li>Awais: CEO</li>
            <li>Musa: CFO</li>
            <li>Ali: Senior Manager</li>
            <li>Hassan: Senior Accountant</li>
            <li>Uzair: Investment Manager</li>
          </ul>
        </div>
      </section>
    </div>
  );
};
export default Whoe;
