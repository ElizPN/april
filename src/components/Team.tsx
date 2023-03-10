export function Team() {
  return (
    <section id='team' className='team section-bg'>
      <div className='container' data-aos='fade-up'>
        <div className='section-title'>
          <h2>Team</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
          </p>
        </div>

        <div className='row'>
          <div className='d-flex align-items-stretch'>
            <div className='member' data-aos='fade-up' data-aos-delay='100'>
              <div className='member-img'>
                <img
                  src={process.env.PUBLIC_URL + "/assets/img/team/gleb.jpeg"}
                  className='img-fluid'
                  alt=''
                />
                <div className='social'>
                  <a href='/'>
                    <i className='bi bi-twitter'></i>
                  </a>
                  <a href='https://www.facebook.com/gottliebskvortsoff'>
                    <i className='bi bi-facebook'></i>
                  </a>
                  <a href='/'>
                    <i className='bi bi-instagram'></i>
                  </a>
                </div>
              </div>
              <div className='member-info'>
                <h4>Gleb Skvortsov</h4>
                <span>Choirmaster</span>
              </div>
            </div>
          </div>

          <div className='d-flex align-items-stretch'>
            <div className='member' data-aos='fade-up' data-aos-delay='200'>
              <div className='member-img'>
                <img
                  src={process.env.PUBLIC_URL + "/assets/img/team/ksenia.jpeg"}
                  className='img-fluid'
                  alt=''
                />
              </div>
              <div className='member-info'>
                <h4>Ksenia Ivanova</h4>
                <span>Soprano</span>
              </div>
            </div>
          </div>

          <div className='d-flex align-items-stretch'>
            <div className='member' data-aos='fade-up' data-aos-delay='400'>
              <div className='member-img'>
                <img
                  src={process.env.PUBLIC_URL + "/assets/img/team/regina.jpg"}
                  className='img-fluid'
                  alt=''
                />
              </div>
              <div className='member-info'>
                <h4>Regina Shepetya</h4>
                <span>Alt</span>
              </div>
            </div>
          </div>

          <div className='d-flex align-items-stretch'>
            <div className='member' data-aos='fade-up' data-aos-delay='400'>
              <div className='member-img'>
                <img
                  src={process.env.PUBLIC_URL + "/assets/img/team/nastia.jpeg"}
                  className='img-fluid'
                  alt=''
                />
              </div>
              <div className='member-info'>
                <h4>Anastasiia Bespamiatnova</h4>
                <span>Alt</span>
              </div>
            </div>
          </div>
          <div className='d-flex align-items-stretch'>
            <div className='member' data-aos='fade-up' data-aos-delay='400'>
              <div className='member-img'>
                <img
                  src={process.env.PUBLIC_URL + "/assets/img/team/tonya.jpg"}
                  className='img-fluid'
                  alt=''
                />
              </div>
              <div className='member-info'>
                <h4>Antonina Zaitseva</h4>
                <span>Alt</span>
              </div>
            </div>
          </div>
          <div className='d-flex align-items-stretch'>
            <div className='member' data-aos='fade-up' data-aos-delay='400'>
              <div className='member-img'>
                <img
                  src={process.env.PUBLIC_URL + "/assets/img/team/tali.jpg"}
                  className='img-fluid'
                  alt=''
                />
              </div>
              <div className='member-info'>
                <h4>Tali Vasserman</h4>
                <span>Soprano</span>
              </div>
            </div>
          </div>
          <div className='d-flex align-items-stretch'>
            <div className='member' data-aos='fade-up' data-aos-delay='400'>
              <div className='member-img'>
                <img
                  src={process.env.PUBLIC_URL + "/assets/img/team/andrey.jpg"}
                  className='img-fluid'
                  alt=''
                />
              </div>
              <div className='member-info'>
                <h4>Andrey Bespamiatnov</h4>
                <span>Bass</span>
              </div>
            </div>
          </div>
          <div className='d-flex align-items-stretch'>
            <div className='member' data-aos='fade-up' data-aos-delay='400'>
              <div className='member-img'>
                <img
                  src={process.env.PUBLIC_URL + "/assets/img/team/alyona.jpg"}
                  className='img-fluid'
                  alt=''
                />
              </div>
              <div className='member-info'>
                <h4>Alena Vasserman</h4>
                <span>Soprano</span>
              </div>
            </div>
          </div>

          <div className='d-flex align-items-stretch'>
            <div className='member' data-aos='fade-up' data-aos-delay='300'>
              <div className='member-img'>
                <img
                  src={process.env.PUBLIC_URL + "/assets/img/team/alla.jpeg"}
                  className='img-fluid'
                  alt=''
                  height='200px'
                />
              </div>
              <div className='member-info'>
                <h4>Alla B??ck</h4>
                <span>Soprano</span>
              </div>
            </div>
          </div>

          <div className=' d-flex align-items-stretch'>
            <div className='member' data-aos='fade-up' data-aos-delay='400'>
              <div className='member-img'>
                <img
                  src={process.env.PUBLIC_URL + "/assets/img/team/dasha.jpg"}
                  className='img-fluid'
                  alt=''
                />
              </div>
              <div className='member-info'>
                <h4>Daria Mironova</h4>
                <span>Alt</span>
              </div>
            </div>
          </div>
          <div className=' d-flex align-items-stretch'>
            <div className='member' data-aos='fade-up' data-aos-delay='400'>
              <div className='member-img'>
                <img
                  src={process.env.PUBLIC_URL + "/assets/img/team/liza-1.jpeg"}
                  className='img-fluid'
                  alt=''
                />
              </div>
              <div className='member-info'>
                <h4>Liza Romanova</h4>
                <span>Soprano</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
