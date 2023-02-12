import React from "react";

export function Counts() {
  return (
    <section id='counts' className='counts'>
      <div className='container' data-aos='fade-up'>
        <div className='row'>
          <div className='col-lg-3 col-md-6'>
            <div className='count-box'>
              <i className='bi bi-emoji-smile'></i>
              <span>6</span>
              <p>Sopranos</p>
            </div>
          </div>

          <div className='col-lg-3 col-md-6 mt-5 mt-md-0'>
            <div className='count-box'>
              <i className='bi bi-journal-richtext'></i>
              <span>6</span>
              <p>Alts</p>
            </div>
          </div>

          <div className='col-lg-3 col-md-6 mt-5 mt-lg-0'>
            <div className='count-box'>
              <i className='bi bi-headset'></i>
              <span>4</span>
              <p>Basses</p>
            </div>
          </div>

          <div className='col-lg-3 col-md-6 mt-5 mt-lg-0'>
            <div className='count-box'>
              <i className='bi bi-people'></i>
              <span>16</span>
              <p>Lucky people</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
