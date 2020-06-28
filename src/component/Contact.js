import React from 'react';
import Map from './Map';

const Contact = () => {
  return (
    <div>
      <section id='contact'>
        <div className='contact-form bg-primary p-2'>
          <h2 className='m-heading'>Contact Us</h2>
          <p>Please fill the form below to contact us</p>
          <form>
            <div className='form-group'>
              <label for='name'>Name</label>
              <input
                type='text'
                id='name'
                name='name'
                placeholder='Enter Name'
              ></input>
            </div>
            <div className='form-group'>
              <label for='email'>Email</label>
              <input
                type='email'
                id='email'
                name='email'
                placeholder='Enter Email'
              ></input>
            </div>
            <div className='form-group'>
              <label for='phone'>Phone</label>
              <input
                type='text'
                id='phone'
                name='phone'
                placeholder='Enter Phone'
              ></input>
            </div>
            <div className='form-group'>
              <label for='message'>Message</label>
              <textarea
                type='text'
                id='message'
                name='message'
                placeholder='Enter Message'
              ></textarea>
            </div>
            <input type='submit' value='Send' className='btn btn-dark'></input>
          </form>
        </div>
      </section>

      <div className='map'>
        <Map />
      </div>
      <footer id='main-footer' className='bg-dark text-center py-1'>
        <p>Copyright &copy; 2020, EdgeLedger, All Rights Reserved</p>
      </footer>
    </div>
  );
};
export default Contact;
