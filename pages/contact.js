import MainLayout from "../component/main-layout";

const Contact = (props) => (
  <MainLayout>
    <div className="container">

      <section className="intro-single">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-8">
              <div className="title-single-box">
                <h1 className="title-single">Contact US</h1>
              </div>
            </div>
            <div className="col-md-12 col-lg-4">
              <nav aria-label="breadcrumb" className="breadcrumb-box d-flex justify-content-lg-end">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="index.html">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Contact
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      <section className="contact">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="contact-map box">
                <div id="map" className="contact-map">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15791.13819494079!2d114.13914821721988!3d-8.324195522448358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd154adb330a79d%3A0x56accd593d2a181d!2sSempu%2C%20Dusun%20Tegalyasan%2C%20Tegalarum%2C%20Sempu%2C%20Banyuwangi%20Regency%2C%20East%20Java!5e0!3m2!1sen!2sid!4v1623463657065!5m2!1sen!2sid" width="100%" height="450" frameborder="0" border="0" allowfullscreen="" />
                </div>
              </div>
            </div>
            <div className="col-sm-12 section-t8">
              <div className="row">
                <div className="col-md-7">
                  <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <div className="form-group">
                          <input type="text" name="name" className="form-control form-control-lg form-control-a" placeholder="Your Name" required="" />
                        </div>
                      </div>
                      <div className="col-md-6 mb-3">
                        <div className="form-group">
                          <input name="email" type="email" className="form-control form-control-lg form-control-a" placeholder="Your Email" required="" />
                        </div>
                      </div>
                      <div className="col-md-12 mb-3">
                        <div className="form-group">
                          <input type="text" name="subject" className="form-control form-control-lg form-control-a" placeholder="Subject" required="" />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <textarea name="message" className="form-control" cols="45" rows="8" placeholder="Message" required=""></textarea>
                        </div>
                      </div>
                      <div className="col-md-12 my-3">
                        <div className="mb-3">
                          <div className="loading">Loading</div>
                          <div className="error-message"></div>
                          <div className="sent-message">Your message has been sent. Thank you!</div>
                        </div>
                      </div>

                      <div className="col-md-12 text-center">
                        <button type="submit" className="btn btn-a">Send Message</button>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="col-md-5 section-md-t3">
                  <div className="icon-box section-b2">
                    <div className="icon-box-icon">
                      <span className="bi bi-envelope"></span>
                    </div>
                    <div className="icon-box-content table-cell">
                      <div className="icon-box-title">
                        <h4 className="icon-title">Say Hello</h4>
                      </div>
                      <div className="icon-box-content">
                        <p className="mb-1">Email.
                          <span className="color-a">sayuranwlijo@gmail.com</span>
                        </p>
                        <p className="mb-1">Phone.
                          <span className="color-a">+62 821-4615-7001</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="icon-box section-b2">
                    <div className="icon-box-icon">
                      <span className="bi bi-geo-alt"></span>
                    </div>
                    <div className="icon-box-content table-cell">
                      <div className="icon-box-title">
                        <h4 className="icon-title">Find us in</h4>
                      </div>
                      <div className="icon-box-content">
                        <p className="mb-1">
                          Jl. Jenderal Ahmad Yani No.80, Taman Baru, Kec. Banyuwangi, Kabupaten Banyuwangi,
                          <br /> Jawa Timur 68416
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="icon-box">
                    <div className="icon-box-icon">
                      <span className="bi bi-share"></span>
                    </div>
                    <div className="icon-box-content table-cell">
                      <div className="icon-box-title">
                        <h4 className="icon-title">Social networks</h4>
                      </div>
                      <div className="icon-box-content">
                        <div className="socials-footer">
                          <ul className="list-inline">
                            <li className="list-inline-item">
                              <a href="#" className="link-one">
                                <i className="bi bi-facebook" aria-hidden="true"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a href="#" className="link-one">
                                <i className="bi bi-twitter" aria-hidden="true"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a href="#" className="link-one">
                                <i className="bi bi-instagram" aria-hidden="true"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a href="#" className="link-one">
                                <i className="bi bi-linkedin" aria-hidden="true"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section><br /><br />
    </div>
  </MainLayout>
);

export default Contact;