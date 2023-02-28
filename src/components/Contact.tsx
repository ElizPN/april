import { useState } from "react";

export function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    console.log(event);

    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target as HTMLFormElement);

    formData.append("access_key", "bd98df05-478a-4a26-9936-33249f3e4882");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setResult(res.message);
    } else {
      console.log("Error", res);
      setResult(res.message);
    }
  };

  return (
    <section id='contact' className='contact'>
      <div className='container' data-aos='fade-up'>
        <div className='section-title'>
          <h2>Contact</h2>
          <p>
            If you want to listen us in real life, you can invite us to your
            event. Feel free to contact us in case you want to become a member
            of April team!
          </p>
        </div>

        <div className='row' data-aos='fade-up' data-aos-delay='100'>
          <div className='col-lg-6'>
            <div className='row'>
              <div className='col-md-12'>
                <div className='info-box'>
                  <i className='bx bx-map'></i>
                  <h3>Our Address</h3>
                  <p> Stockholm, Sveavägen 41, 111 34</p>
                  ABF Stockholm Komvux City <br />
                  <br />
                </div>
              </div>
              <div className='col-md-6'>
                <div className='info-box mt-4'>
                  <i className='bx bx-envelope'></i>
                  <h3>Email Us</h3>
                  <p>
                    info@example.com
                    <br />
                    contact@example.com
                  </p>
                </div>
              </div>
              <div className='col-md-6'>
                <div className='info-box mt-4'>
                  <i className='bx bx-phone-call'></i>
                  <h3>Call Us</h3>
                  <p>
                    +1 5589 55488 55
                    <br />
                    +1 6678 254445 41
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className='col-lg-6'>
            <form
              className='php-email-form'
              onSubmit={onSubmit}
              style={
                result ? { visibility: "hidden" } : { visibility: "visible" }
              }
            >
              <div className='row'>
                <div className='col form-group'>
                  <input
                    type='text'
                    name='name'
                    className='form-control'
                    id='name'
                    placeholder='Your Name'
                    required
                  />
                </div>
                <div className='col form-group'>
                  <input
                    type='email'
                    className='form-control'
                    name='email'
                    id='email'
                    placeholder='Your Email'
                    required
                  />
                </div>
              </div>
              <div className='form-group'>
                <input
                  type='text'
                  className='form-control'
                  name='subject'
                  id='subject'
                  placeholder='Subject'
                  required
                />
              </div>
              <div className='form-group'>
                <textarea
                  className='form-control'
                  name='message'
                  rows={5}
                  placeholder='Message'
                  required
                ></textarea>
              </div>
              <div className='my-3'>
                {/* <div className='loading'>Loading</div>
                <div className='error-message'></div>
                <div className='sent-message'>
                  Your message has been sent. Thank you!
                </div> */}
              </div>
              <div className='text-center'>
                <button type='submit'>Send Message</button>
              </div>
            </form>
            <h3 className='text-center'>{result}</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
