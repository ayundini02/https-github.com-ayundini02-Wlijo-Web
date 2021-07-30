const Footer = () => (
  <footer>
    <section className="section-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-4">
            <div className="widget-a">
              <div className="w-header-a">
                <h3 className="w-title-a text-brand">Tentang Kami</h3>
              </div>
              <div className="w-body-a">
                <p className="w-text-a color-text-a">
                  Wlijo memberikan layanan belanja sayuran dengan kualitas yang fresh, higenis, dan tahan lama. Serta memastikan harga yang stabil dipasaran dan pemenuhan order secara tepat waktu.
                </p>
              </div>
              <div className="w-footer-a">
                <ul className="list-unstyled">
                  <li className="color-a">
                    <span className="color-text-a">Phone .</span> sayuranwlijo@gmail.com
                  </li>
                  <li className="color-a">
                    <span className="color-text-a">Email .</span> +62 821-4615-7001
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 section-md-t3">
            <div className="widget-a">
              <div className="w-header-a">
                <h3 className="w-title-a text-brand">Melayani Kota:</h3>
              </div>
              <div className="w-body-a">
                <div className="w-body-a">
                  <ul className="list-unstyled">
                    <li className="item-list-a">
                      <i className="bi bi-chevron-right"></i> <a href="#">Banyuwangi</a>
                    </li>
                    <li className="item-list-a">
                      <i className="bi bi-chevron-right"></i> <a href="#">Klatak</a>
                    </li>
                    <li className="item-list-a">
                      <i className="bi bi-chevron-right"></i> <a href="#">Genteng</a>
                    </li>
                    <li className="item-list-a">
                      <i className="bi bi-chevron-right"></i> <a href="#">Sempu</a>
                    </li>
                    <li className="item-list-a">
                      <i className="bi bi-chevron-right"></i> <a href="#">Rogojampi</a>
                    </li>
                    <li className="item-list-a">
                      <i className="bi bi-chevron-right"></i> <a href="#">Glenmore</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 section-md-t3">
            <div className="widget-a">
              <div className="w-header-a">
                <h3 className="w-title-a text-brand">Opening Hours</h3>
              </div>
              <div className="w-body-a">
                <ul className="list-unstyled">
                  <li className="item-list-a">
                    <i className="bi bi-chevron-right"></i> <a href="#">Monday: Closed</a>
                  </li>
                  <li className="item-list-a">
                    <i className="bi bi-chevron-right"></i> <a href="#">Tue-Wed : 9:Am - 10PM</a>
                  </li>
                  <li className="item-list-a">
                    <i className="bi bi-chevron-right"></i> <a href="#">Thu-Fri : 9:Am - 10PM</a>
                  </li>
                  <li className="item-list-a">
                    <i className="bi bi-chevron-right"></i> <a href="#">Sat-Sun : 5:PM - 10PM</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <br />

    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <nav className="nav-footer">
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="#">Home</a>
              </li>
              <li className="list-inline-item">
                <a href="#">Kategori</a>
              </li>
              <li className="list-inline-item">
                <a href="#">Contact</a>
              </li>
              <li className="list-inline-item">
                <a href="#">About</a>
              </li>
            </ul>
          </nav>
          <div className="socials-a">
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="#">
                  <i className="bi bi-facebook" aria-hidden="true"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="bi bi-twitter" aria-hidden="true"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="bi bi-instagram" aria-hidden="true"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="bi bi-linkedin" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="copyright-footer">
            <p className="copyright color-text-a">
              All Rights Reserved. © Copyright 2021
            </p>
          </div>
          <div className="credits">
            Designed by Wlijo
          </div>
        </div>
      </div>
    </div>
  </footer>

);

export default Footer;