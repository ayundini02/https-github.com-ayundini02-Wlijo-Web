import Link from "next/link";
const NavbarAdmin = () => (


  <header id="header show">
    <i className="bi bi-list mobile-nav-toggle d-xl-none"></i>
    <div className="d-flex flex-column">

      <div className="profile">
        <img src="/img/logo_wlijo.jpeg" alt="" className="img-fluid rounded-circle" />
        <h1 className="text-light"><a href="index.html">Admin Wlijo</a></h1>
      </div>

      <nav id="navbar" className="nav-menu navbar">
        <ul>
          <li>
            <Link href="/admin/berandaAdmin">
              <a className="nav-link scrollto active">
                <i className="bx bx-home"></i>
                <span>Home</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/admin/produk/produkAdmin">
              <a className="nav-link scrollto">
                <i className="bx bx-user"></i>
                <span>Produk</span>
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default NavbarAdmin;