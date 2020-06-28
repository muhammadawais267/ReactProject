import React from 'react';
import map from './map';

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
      <div className='map'></div>
      <footer id='main-footer' className='bg-dark text-center py-1'>
        <p>Copyright &copy; 2020, EdgeLedger, All Rights Reserved</p>
      </footer>

      {/* <!-- JQuery CDN --> */}
      <script
        src='https://code.jquery.com/jquery-3.3.1.min.js'
        integrity='sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8='
        crossorigin='anonymous'
      ></script>

      {/* <!-- Google Maps --> */}
      <script
        src='https://maps.googleapis.com/maps/api/js?key=AIzaSyDoZg2Es_GrQHZf_52j2-xZ3cTfBCR0HII&callback=initMap'
        async
        defer
      ></script>
    </div>
  );
};
export default Contact;
