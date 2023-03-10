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

        <div
          className='row portfolio-container'
          data-aos='fade-up'
          data-aos-delay='200'
        >
          <div className='col-lg-4 col-md-6 portfolio-item filter-app'>
            <div className='portfolio-wrap'>
              <img
                src={process.env.PUBLIC_URL + "/assets/img/portfolio/one.jpeg"}
                className='img-fluid'
                alt=''
              />
              <div className='portfolio-info'>
                <h4>App 1</h4>
                <p>App</p>
                <div className='portfolio-links'>
                  <a
                    href={
                      process.env.PUBLIC_URL + "/assets/img/portfolio/one.jpeg"
                    }
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
                src={process.env.PUBLIC_URL + "/assets/img/portfolio/five.jpg"}
                className='img-fluid'
                alt=''
              />
              <div className='portfolio-info'>
                <h4>Web 3</h4>
                <p>Web</p>
                <div className='portfolio-links'>
                  <a
                    href={
                      process.env.PUBLIC_URL + "/assets/img/portfolio/five.jpg"
                    }
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
                src={process.env.PUBLIC_URL + "/assets/img/portfolio/two.jpeg"}
                className='img-fluid'
                alt=''
              />
              <div className='portfolio-info'>
                <h4>App 2</h4>
                <p>App</p>
                <div className='portfolio-links'>
                  <a
                    href={
                      process.env.PUBLIC_URL + "/assets/img/portfolio/two.jpeg"
                    }
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
                src={
                  process.env.PUBLIC_URL + "/assets/img/portfolio/three.jpeg"
                }
                className='img-fluid'
                alt=''
              />
              <div className='portfolio-info'>
                <h4>Card 2</h4>
                <p>Card</p>
                <div className='portfolio-links'>
                  <a
                    href={
                      process.env.PUBLIC_URL +
                      "/assets/img/portfolio/three.jpeg"
                    }
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
                src={
                  process.env.PUBLIC_URL + "/assets/img/portfolio/perf2.jpeg"
                }
                className='img-fluid'
                alt=''
              />
              <div className='portfolio-info'>
                <h4>Web 2</h4>
                <p>Web</p>
                <div className='portfolio-links'>
                  <a
                    href={
                      process.env.PUBLIC_URL +
                      "/assets/img/portfolio/perf2.jpeg"
                    }
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
                src={process.env.PUBLIC_URL + "/assets/img/portfolio/six.jpeg"}
                className='img-fluid'
                alt=''
              />
              <div className='portfolio-info'>
                <h4>App 3</h4>
                <p>App</p>
                <div className='portfolio-links'>
                  <a
                    href={
                      process.env.PUBLIC_URL + "/assets/img/portfolio/six.jpeg"
                    }
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
                src={
                  process.env.PUBLIC_URL + "/assets/img/portfolio/seven.jpeg"
                }
                className='img-fluid'
                alt=''
              />
              <div className='portfolio-info'>
                <h4>Card 1</h4>
                <p>Card</p>
                <div className='portfolio-links'>
                  <a
                    href={
                      process.env.PUBLIC_URL +
                      "/assets/img/portfolio/seven.jpeg"
                    }
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
                src={
                  process.env.PUBLIC_URL + "/assets/img/portfolio/repet4.jpeg"
                }
                className='img-fluid'
                alt=''
              />
              <div className='portfolio-info'>
                <h4>Card 3</h4>
                <p>Card</p>
                <div className='portfolio-links'>
                  <a
                    href={
                      process.env.PUBLIC_URL +
                      "/assets/img/portfolio/repet4.jpeg"
                    }
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
                src={
                  process.env.PUBLIC_URL + "/assets/img/portfolio/perf3.jpeg"
                }
                className='img-fluid'
                alt=''
              />
              <div className='portfolio-info'>
                <h4>Web 3</h4>
                <p>Web</p>
                <div className='portfolio-links'>
                  <a
                    href={
                      process.env.PUBLIC_URL +
                      "/assets/img/portfolio/perf4.jpeg"
                    }
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
