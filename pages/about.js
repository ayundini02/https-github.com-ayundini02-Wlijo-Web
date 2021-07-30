import MainLayout from "../component/main-layout";

const About = (props) => (
  <MainLayout>
    <div className="container">

      <section className="intro-single">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-8">
              <div className="title-single-box">
                <h1 className="title-single breadcrumb-item">About</h1>
                <h3 className="breadcrumb-item active" aria-current="page">
                  Visi &amp; Misi Wlijo</h3>
              </div>
            </div>

            <div className="col-md-12 col-lg-4">
              <nav aria-label="breadcrumb" className="breadcrumb-box d-flex justify-content-lg-end">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="index.html">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    About
                  </li>
                </ol>
              </nav>
            </div>

            <div className="about-section-box"><div className="container">
              <br /><br />
              <div className="row"><div className="col-lg-6 col-md-4 text-right">
                <div className="inner-column"><h4>Visi</h4>
                  <p>Wlijo memberikan layanan belanja sayuran dengan kualitas
                    yang fresh, higenis, dan tahan lama. Serta memastikan
                    harga yang stabil dipasaran dan pemenuhan order secara
                    tepat waktu.</p></div></div>
                <div className="col-lg-6 col-md-4 text-right">
                  <div className="inner-column"><h4>Misi</h4>
                    <p>Menyediakan sayur yang fresh dan tahan lama sehingga
                      menjadi pilihan utama konsumen Menjaga Kualitas dan
                      Mutu, Sehingga dapat dipercaya oleh konsumen Melakukan
                      Pengawasan Produk agar kualitas dapat terkontrol dan
                      harga yang terjangkau di pasaran Memastikan pemenuhan
                      order dan layanan pengiriman tepat waktu</p></div></div></div>
              <div className="row d-flex justify-content-center">
                <div className="col-lg-6 col-md-6 text-center">
                </div></div></div></div>

          </div>
        </div>
      </section>

      <section id="team" className="team section-bg">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title-wrap d-flex justify-content-between">
                <div className="section-title">
                  <h2>Team Wlijo</h2>
                </div>
                <div className="title-link">
                  <a>All Team
                    <span className="bi bi-chevron-right"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
              <div className="member">
                <img src="/img/profil/ceo.jpeg" alt="" />
                <h4>Erfan Yuda Tama</h4>
                <span>CEO</span>
                <div className="social">
                  <a href=""><i className="bi bi-twitter"></i></a>
                  <a href=""><i className="bi bi-facebook"></i></a>
                  <a href=""><i className="bi bi-instagram"></i></a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
              <div className="member">
                <img src="/img/profil/cmo.jpeg" alt="" />
                <h4>Nur Khofifah</h4>
                <span>CMO</span>
                <div className="social">
                  <a href=""><i className="bi bi-twitter"></i></a>
                  <a href=""><i className="bi bi-facebook"></i></a>
                  <a href=""><i className="bi bi-instagram"></i></a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
              <div className="member">
                <img src="/img/profil/cfo.jpeg" alt="" />
                <h4>Ryan Hadi Prasetyo</h4>
                <span>CFO</span>
                <div className="social">
                  <a href=""><i className="bi bi-twitter"></i></a>
                  <a href=""><i className="bi bi-facebook"></i></a>
                  <a href=""><i className="bi bi-instagram"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
              <div className="member">
                <img src="/img/profil/cto1.jpeg" alt="" />
                <h4>Ni Made Tembang Ayundini</h4>
                <span>CTO 1</span>
                <div className="social">
                  <a href=""><i className="bi bi-twitter"></i></a>
                  <a href=""><i className="bi bi-facebook"></i></a>
                  <a href=""><i className="bi bi-instagram"></i></a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
              <div className="member">
                <img src="/img/profil/cto2.jpeg" alt="" />
                <h4>Ahmad Fatwa</h4>
                <span>CTO 2</span>
                <div className="social">
                  <a href=""><i className="bi bi-twitter"></i></a>
                  <a href=""><i className="bi bi-facebook"></i></a>
                  <a href=""><i className="bi bi-instagram"></i></a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  </MainLayout>
);

export default About;