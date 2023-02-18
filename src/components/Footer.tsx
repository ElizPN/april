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
                  <a href='/'>About us</a>
                </li>
                <li>
                  <i className='bx bx-chevron-right'></i> <a href='/'>Video</a>
                </li>
              </ul>
            </div>

            <div className='col-lg-3 col-md-6 footer-links'>
              <h4>Our Events</h4>
              <ul>
                <li>
                  <i className='bx bx-chevron-right'></i>
                  <a href='/'>April in Sigtuna </a>
                </li>
                <li>
                  <i className='bx bx-chevron-right'></i>
                  <a href='/'>April in Saint Eugenia's Church</a>
                </li>
                <li>
                  <i className='bx bx-chevron-right'></i>
                  <a href='/'>160-yearday of Kalinoŭski uprising</a>
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
          <div className='credits'>
            {/* <!-- All the links in the footer should remain intact. -->
        <!-- You can delete the links only if you purchased the pro version. -->
        <!-- Licensing information: https://bootstrapmade.com/license/ -->
        <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/presento-bootstrap-corporate-template/ --> */}
            {/* Designed by <a href='https://bootstrapmade.com/'>BootstrapMade</a> */}
          </div>
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
