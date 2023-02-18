export function Video() {
  return (
    <section id='services' className='services section-bg '>
      <div className='container' data-aos='fade-up'>
        <div className='section-title'>
          <h2>Listen</h2>
          <p>Here you can listen to some of our performances</p>
        </div>

        <div className='row'>
          <div className='col-md-6'>
            <div className='icon-box' data-aos='fade-up' data-aos-delay='100'>
              <i className='bi bi-briefcase'></i>
              <h4>
                <a href='/'>Charity performance in Interbok</a>
              </h4>
              <p>Link to YouTube</p>
            </div>
          </div>
          <div className='col-md-6 mt-4 mt-md-0'>
            <div className='icon-box' data-aos='fade-up' data-aos-delay='200'>
              <i className='bi bi-card-checklist'></i>
              <h4>
                <a href='/'>April in Saint Eugenia's Church</a>
              </h4>
              <p>Link to YouTube</p>
            </div>
          </div>
          <div className='col-md-6 mt-4 mt-md-0'>
            <div className='icon-box' data-aos='fade-up' data-aos-delay='300'>
              <i className='bi bi-bar-chart'></i>
              <h4>
                <a href='/'>April in Swedish History Museum</a>
              </h4>

              <iframe
                width='100%'
                height='315'
                src='https://www.youtube.com/embed/OeKTt7JiQKM'
                title='YouTube video player'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              ></iframe>
            </div>
          </div>
          <div className='col-md-6 mt-4 mt-md-0'>
            <div className='icon-box' data-aos='fade-up' data-aos-delay='400'>
              <i className='bi bi-binoculars'></i>
              <h4>
                <a href='/'>April in Sigtuna</a>
              </h4>
              <iframe
                width='100%'
                height='315'
                src='https://www.youtube.com/embed/wF4mOfuBc0w'
                title='YouTube video player'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              ></iframe>
            </div>
          </div>
          <div className='col-md-6 mt-4 mt-md-0'>
            <div className='icon-box' data-aos='fade-up' data-aos-delay='500'>
              <i className='bi bi-brightness-high'></i>
              <h4>
                <a href='/'>Next event</a>
              </h4>
              <p>Link to YouTube</p>
            </div>
          </div>
          <div className='col-md-6 mt-4 mt-md-0'>
            <div className='icon-box' data-aos='fade-up' data-aos-delay='600'>
              <i className='bi bi-calendar4-week'></i>
              <h4>
                <a href='/'>Next event</a>
              </h4>
              <p>Link to YouTube</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
