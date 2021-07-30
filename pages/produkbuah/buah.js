import MainLayout from "../../component/main-layout";
import Link from "next/link";
import prisma from "../../client.ts";

export async function getServerSideProps(ctx) {
  const dataBuah = await prisma.produk.findMany(
    {
      where: { jenis: "buah" },
    }
  )
  return {
    props: { dataBuah },
  };

}

const Card = (props) => (
  <div className="produk">
    <div className="barang">
      <img src={props.img} alt="" className="img-a img-fluid" />
      <h4>{props.name}</h4>
      <div className="price-box d-flex">
        <span className="price-a">Rp. {props.hrg}</span>
      </div>
    </div>
  </div>


);

const List = (props) => (
  <MainLayout>
    <div className="container">

      <section className="intro-single">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-8">
              <div className="title-single-box">
                <h1 className="title-single">Buah</h1>
              </div>
              <br />
              <Link href="/home">
                <button type="button" className="btn btn-b-n navbar-toggle-box navbar-toggle-box-collapse" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01">
                  <i className="bi bi-arrow-left-square"></i>
                </button>
              </Link>
            </div>
            <div className="col-md-12 col-lg-4">
              <nav aria-label="breadcrumb" className="breadcrumb-box d-flex justify-content-lg-end">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Kategori
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    buah
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      <section className="property-grid grid">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="grid-option">
                <form>
                  <select className="custom-select">
                    <option selected="">All</option>
                  </select>
                </form>
              </div>
            </div>

            {props.dataBuah.map((buah) => (
              <div className="col-md-4" key={buah.id}>
                <div className="link-a">{buah.id}
                  <Link href="/kategori/[kode]/[jenis]"
                    as={`/kategori/${buah.id}/${buah.nama.replace(/\s+/g, "-")
                      .toLowerCase()}`}>
                    <button type="button" className="btn btn-b-n navbar-toggle-box navbar-toggle-box-collapse">
                      Detail&nbsp;{buah.nama}
                    </button>
                  </Link>
                  <Card
                    id={buah.id}
                    jenis={buah.jenis}
                    img={buah.gambar}
                    name={buah.nama}
                    hrg={buah.harga}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>

  </MainLayout>
);

export default List;
