import React from 'react';
import logo1 from '../img/logos/logo1.png';
import logo2 from '../img/logos/logo2.png';
import logo3 from '../img/logos/logo3.png';
import logo4 from '../img/logos/logo4.png';
import logo5 from '../img/logos/logo5.png';

const Clients = () => {
  return (
    <div>
      <section id='clients' className='py-1'>
        <div className='container'>
          <h2 className='m-heading text-center'>
            <span className='text-primary'>Our</span> Clients
          </h2>
          <div className='items py-1'>
            <div>
              <img src={logo1} alt='Clients'></img>
            </div>
            <div>
              <img src={logo2} alt='Clients'></img>
            </div>
            <div>
              <img src={logo3} alt='Clients'></img>
            </div>
            <div>
              <img src={logo4} alt='Clients'></img>
            </div>
            <div>
              <img src={logo5} alt='Clients'></img>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Clients;
