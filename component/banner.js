const Banner = () => (
  <div className="intro intro-carousel swiper-container position-relative">
    <div className="swiper-wrapper">
      <div className="swiper-slide carousel-item-a intro-item bg-image">
        <div className="overlay overlay-a"></div>
        <div className="intro-content display-table">
          <div className="table-cell">
            <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  <div className="intro-body">
                    <h1 className="intro-title mb-4">
                      <span className="color-b">Welcome </span> To
                      <br /> Wlijo
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Banner;