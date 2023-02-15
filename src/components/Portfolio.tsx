export function Portfolio() {
  return (
    <section id='portfolio' className='portfolio'>
      <div className='container' data-aos='fade-up'>
        <div className='section-title'>
          <h2>Portfolio</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
          </p>
        </div>

        <div className='row' data-aos='fade-up' data-aos-delay='100'>
          <div className='col-lg-12 d-flex justify-content-center'>
            <ul id='portfolio-flters'>
              <li data-filter='*' className='filter-active'>
                All
              </li>
              <li data-filter='.filter-app'>Casuel</li>
              <li data-filter='.filter-card'>Repetitions</li>
              <li data-filter='.filter-web'>Performances</li>
            </ul>
          </div>
        </div>

        <div
          className='row portfolio-container'
          data-aos='fade-up'
          data-aos-delay='200'
        >
          <div className='col-lg-4 col-md-6 portfolio-item filter-app'>
            <div className='portfolio-wrap'>
              <img
                src='assets/img/portfolio/one.jpeg'
                className='img-fluid'
                alt=''
              />
              <div className='portfolio-info'>
                <h4>App 1</h4>
                <p>App</p>
                <div className='portfolio-links'>
                  <a
                    href='assets/img/portfolio/one.jpeg'
                    data-gallery='portfolioGallery'
                    className='portfolio-lightbox'
                    title='App 1'
                  >
                    <i className='bx bx-plus'></i>
                  </a>
                  <a href='portfolio-details.html' title='More Details'>
                    <i className='bx bx-link'></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className='col-lg-4 col-md-6 portfolio-item filter-web'>
            <div className='portfolio-wrap'>
              <img
                src='assets/img/portfolio/five.jpg'
                className='img-fluid'
                alt=''
              />
              <div className='portfolio-info'>
                <h4>Web 3</h4>
                <p>Web</p>
                <div className='portfolio-links'>
                  <a
                    href='assets/img/portfolio/perf1.jpeg'
                    data-gallery='portfolioGallery'
                    className='portfolio-lightbox'
                    title='Web 3'
                  >
                    <i className='bx bx-plus'></i>
                  </a>
                  <a href='portfolio-details.html' title='More Details'>
                    <i className='bx bx-link'></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className='col-lg-4 col-md-6 portfolio-item filter-app'>
            <div className='portfolio-wrap'>
              <img
                src='assets/img/portfolio/two.jpeg'
                className='img-fluid'
                alt=''
              />
              <div className='portfolio-info'>
                <h4>App 2</h4>
                <p>App</p>
                <div className='portfolio-links'>
                  <a
                    href='assets/img/portfolio/two.jpeg'
                    data-gallery='portfolioGallery'
                    className='portfolio-lightbox'
                    title='App 2'
                  >
                    <i className='bx bx-plus'></i>
                  </a>
                  <a href='portfolio-details.html' title='More Details'>
                    <i className='bx bx-link'></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className='col-lg-4 col-md-6 portfolio-item filter-card'>
            <div className='portfolio-wrap'>
              <img
                src='assets/img/portfolio/three.jpeg'
                className='img-fluid'
                alt=''
              />
              <div className='portfolio-info'>
                <h4>Card 2</h4>
                <p>Card</p>
                <div className='portfolio-links'>
                  <a
                    href='assets/img/portfolio/three.jpeg'
                    data-gallery='portfolioGallery'
                    className='portfolio-lightbox'
                    title='Card 2'
                  >
                    <i className='bx bx-plus'></i>
                  </a>
                  <a href='portfolio-details.html' title='More Details'>
                    <i className='bx bx-link'></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className='col-lg-4 col-md-6 portfolio-item filter-web'>
            <div className='portfolio-wrap'>
              <img
                src='assets/img/portfolio/perf2.jpeg'
                className='img-fluid'
                alt=''
              />
              <div className='portfolio-info'>
                <h4>Web 2</h4>
                <p>Web</p>
                <div className='portfolio-links'>
                  <a
                    href='assets/img/portfolio/perf2.jpeg'
                    data-gallery='portfolioGallery'
                    className='portfolio-lightbox'
                    title='Web 2'
                  >
                    <i className='bx bx-plus'></i>
                  </a>
                  <a href='portfolio-details.html' title='More Details'>
                    <i className='bx bx-link'></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className='col-lg-4 col-md-6 portfolio-item filter-app'>
            <div className='portfolio-wrap'>
              <img
                src='assets/img/portfolio/six.jpeg'
                className='img-fluid'
                alt=''
              />
              <div className='portfolio-info'>
                <h4>App 3</h4>
                <p>App</p>
                <div className='portfolio-links'>
                  <a
                    href='assets/img/portfolio/six.jpeg'
                    data-gallery='portfolioGallery'
                    className='portfolio-lightbox'
                    title='App 3'
                  >
                    <i className='bx bx-plus'></i>
                  </a>
                  <a href='portfolio-details.html' title='More Details'>
                    <i className='bx bx-link'></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className='col-lg-4 col-md-6 portfolio-item filter-card'>
            <div className='portfolio-wrap'>
              <img
                src='assets/img/portfolio/seven.jpeg'
                className='img-fluid'
                alt=''
              />
              <div className='portfolio-info'>
                <h4>Card 1</h4>
                <p>Card</p>
                <div className='portfolio-links'>
                  <a
                    href='assets/img/portfolio/seven.jpeg'
                    data-gallery='portfolioGallery'
                    className='portfolio-lightbox'
                    title='Card 1'
                  >
                    <i className='bx bx-plus'></i>
                  </a>
                  <a href='portfolio-details.html' title='More Details'>
                    <i className='bx bx-link'></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className='col-lg-4 col-md-6 portfolio-item filter-card'>
            <div className='portfolio-wrap'>
              <img
                src='assets/img/portfolio/perf1.jpeg'
                className='img-fluid'
                alt=''
              />
              <div className='portfolio-info'>
                <h4>Card 3</h4>
                <p>Card</p>
                <div className='portfolio-links'>
                  <a
                    href='assets/img/portfolio/perf1.jpeg'
                    data-gallery='portfolioGallery'
                    className='portfolio-lightbox'
                    title='Card 3'
                  >
                    <i className='bx bx-plus'></i>
                  </a>
                  <a href='portfolio-details.html' title='More Details'>
                    <i className='bx bx-link'></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className='col-lg-4 col-md-6 portfolio-item filter-web'>
            <div className='portfolio-wrap'>
              <img
                src='assets/img/portfolio/repet2.jpeg'
                className='img-fluid'
                alt=''
              />
              <div className='portfolio-info'>
                <h4>Web 3</h4>
                <p>Web</p>
                <div className='portfolio-links'>
                  <a
                    href='assets/img/portfolio/repet2.jpeg'
                    data-gallery='portfolioGallery'
                    className='portfolio-lightbox'
                    title='Web 3'
                  >
                    <i className='bx bx-plus'></i>
                  </a>
                  <a href='portfolio-details.html' title='More Details'>
                    <i className='bx bx-link'></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
