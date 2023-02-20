export function Footer() {
  return (
    <footer id='footer'>
      <div className='footer-top'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-3 col-md-6 footer-contact'>
              <h3>
                April<span>.</span>
              </h3>
              <p>
                ABF Stockholm Komvux City <br />
                Stockholm, Sveavägen 41, 111 34
                <br />
                Sweden <br />
                <br />
                <strong>Phone:</strong> +46 888 99 99
                <br />
                <strong>Email:</strong> info@example.com
                <br />
              </p>
            </div>

            <div className='col-lg-2 col-md-6 footer-links'>
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i className='bx bx-chevron-right'></i> <a href='/'>Home</a>
                </li>
                <li>
                  <i className='bx bx-chevron-right'></i>
                  <a href='#program'>Our Program</a>
                </li>
                <li>
                  <i className='bx bx-chevron-right'></i>{" "}
                  <a href='#listen'>Listen</a>
                </li>
              </ul>
            </div>

            <div className='col-lg-3 col-md-6 footer-links'>
              <h4>Our Events</h4>
              <ul>
                <li>
                  <i className='bx bx-chevron-right'></i>
                  <a
                    href='https://www.youtube.com/watch?v=wF4mOfuBc0w'
                    target='_blank'
                    rel='noreferrer'
                  >
                    April in Sigtuna{" "}
                  </a>
                </li>
                <li>
                  <i className='bx bx-chevron-right'></i>
                  <a href='/'>April in Saint Eugenia's Church</a>
                </li>
                <li>
                  <i className='bx bx-chevron-right'></i>
                  <a
                    href='https://www.youtube.com/watch?v=OeKTt7JiQKM'
                    target='_blank'
                    rel='noreferrer'
                  >
                    160-yearday of Kalinoŭski uprising
                  </a>
                </li>
                <li>
                  <i className='bx bx-chevron-right'></i>
                  <a href='/'>Charity performance in Interbok</a>
                </li>
                <li>
                  <i className='bx bx-chevron-right'></i>
                  <a href='/'>Albertus Pictor som Nordens ikonograf</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className='container d-md-flex py-4'>
        <div className='me-md-auto text-center text-md-start'>
          <div className='copyright'>
            &copy; Copyright
            <strong>
              <span>April</span>
            </strong>
            . All Rights Reserved
          </div>
          <div className='credits'></div>
        </div>
        <div className='social-links text-center text-md-end pt-3 pt-md-0'>
          <a href='/' className='twitter'>
            <i className='bx bxl-twitter'></i>
          </a>
          <a href='/' className='facebook'>
            <i className='bx bxl-facebook'></i>
          </a>
          <a href='/' className='instagram'>
            <i className='bx bxl-instagram'></i>
          </a>
          <a href='/' className='google-plus'>
            <i className='bx bxl-skype'></i>
          </a>
          <a href='/' className='linkedin'>
            <i className='bx bxl-linkedin'></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
