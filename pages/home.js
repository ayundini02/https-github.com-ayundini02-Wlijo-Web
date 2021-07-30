import Banner from "../component/banner";
import MainLayout from "../component/main-layout";
import prisma from "../client.ts";

<title>WLIJO</title>

export async function getServerSideProps(ctx) {
  const dataSayur = await prisma.produk.findMany(
    {
      where: { jenis: "sayur" }
    }
  )
  const dataBuah = await prisma.produk.findMany(
    {
      where: { jenis: "buah" }
    }
  )
  const dataLauk = await prisma.produk.findMany(
    {
      where: { jenis: "lauk-pauk" }
    }
  )

  return {
    props: { dataSayur, dataBuah, dataLauk },
  }
}

const CardKategori = props => (
  <div className="card-box-c foo">
    <div className="card-header-c d-flex">
      <div className="card-box-ico">
        <img src={props.imgSrc} />
      </div>

      <div className="card-title-c align-self-center">
      </div>
    </div>
    <h2 className="title-c">{props.kategori}</h2>
    <div className="card-body-c"></div>
    <div className="card-footer-c">
    </div>
  </div>
);

const CardAllProduk = props => (
  <div className="card-box-a card-shadow">
    <div className="img-box-a">
      <img src={props.img} alt="" className="img-a img-fluid" />
    </div>
    <div className="card-overlay">
      <div className="card-overlay-a-content">
        <div className="card-header-a">
          <h2 className="card-title-a">
            <a href="#">{props.name}</a>
          </h2>
        </div>
        <div className="card-body-a">
          <div className="price-box d-flex">
            <span className="price-a">Rp. {props.hrg}</span>
          </div>
        </div>
        <div className="card-footer-a">
          <ul className="card-info d-flex justify-content-around">
            <li><h4 className="card-info-title">Rp. {props.hrg}</h4></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

const Home = (props) => (
  <MainLayout>
    <Banner />
    <main id="main">
      <section className="section-property section-t8">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title-wrap d-flex justify-content-between">
                <div className="title-box">
                  <h2 className="title-a">Kategori</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <CardKategori imgSrc="/img/135715.png" kategori="Sayuran" />
              <a href="/produksayur/sayur" className="link-c link-icon">Read more<span className="bi bi-chevron-right"></span></a>
            </div>

            <div className="col-md-4">
              <CardKategori imgSrc="/img/peach-37629_960_720.png" kategori="Buah" />
              <a href="/produkbuah/buah" className="link-c link-icon">Read more<span className="bi bi-chevron-right"></span></a>
            </div>

            <div className="col-md-4">
              <CardKategori imgSrc="/img/depositphotos_439301426-stock-illustration-illustration-of-food-fish-meat.jpg" kategori="Lauk" />
              <a href="/produklaukpauk/laukpauk" className="link-c link-icon">Read more<span className="bi bi-chevron-right"></span></a>
            </div>
          </div>
        </div>
      </section>

      <section class="section-t8 property-grid grid">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <div class="title-wrap d-flex justify-content-between">
                <div class="title-box">
                  <h2 class="title-a">Produk</h2>
                </div>
                <div class="title-link">
                  <a href="#">All Produk
                    <span class="bi bi-chevron-right"></span>
                  </a>
                </div>
              </div>
            </div>

            {props.dataSayur.map((proud) => (
              <div className="col-md-4">
                <CardAllProduk
                  id={proud.id}
                  jenis={proud.jenis}
                  img={proud.gambar}
                  name={proud.nama}
                  hrg={proud.harga}
                />
              </div>
            ))}
            {props.dataBuah.map((proud) => (
              <div className="col-md-4">
                <CardAllProduk
                  id={proud.id}
                  jenis={proud.jenis}
                  img={proud.gambar}
                  name={proud.nama}
                  hrg={proud.harga}
                />
              </div>
            ))}
            {props.dataLauk.map((proud) => (
              <div className="col-md-4">
                <CardAllProduk
                  id={proud.id}
                  jenis={proud.jenis}
                  img={proud.gambar}
                  name={proud.nama}
                  hrg={proud.harga}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>

  </MainLayout>
);

export default Home;