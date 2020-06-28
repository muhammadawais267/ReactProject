import React from 'react';

const What = () => {
  return (
    <div>
      <section id='what' className='bg-light py-1'>
        <div className='container'>
          <h3 className='m-heading text-center'>
            <span className='text-primary'>What</span> We do
          </h3>
          <div className='items'>
            <div className='item'>
              <i className='fas fa-university fa-2x'></i>
              <div>
                <h3>Investment Banking</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                  voluptatibus debitis praesentium inventore, eum dese
                </p>
              </div>
            </div>
            <div className='item'>
              <i className='fas fa-book-reader fa-2x'></i>
              <div>
                <h3>Portfolio Management</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                  voluptatibus debitis praesentium inventore, eum dese
                </p>
              </div>
            </div>
            <div className='item'>
              <i className='fas fa-pencil-alt fa-2x'></i>
              <div>
                <h3>Tax & Custidlo</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                  voluptatibus debitis praesentium inventore, eum dese
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default What;
