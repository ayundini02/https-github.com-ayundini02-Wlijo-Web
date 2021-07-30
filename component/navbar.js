import Link from "next/link";
const NavBar = () => (

  <nav className="navbar navbar-default navbar-expand-lg fixed-top navbar-trans">
    <div className="container">
      <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarDefault" aria-controls="navbarDefault" aria-expanded="true" aria-label="Toggle navigation">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <a className="navbar-brand text-brand" href="/home"><span className="color-b" >Wlijo</span></a>

      <div class="navbar-collapse justify-content-center collapse show" id="navbarDefault" style={{}}>
        <ul class="navbar-nav">

          <li className="nav-item">
            <Link href="/home">
              <a className="nav-link show">Home</a>
            </Link>
          </li>

          <li className="nav-item">
            <Link href="/contact">
              <a className="nav-link">Contact</a>
            </Link>
          </li>

          <li className="nav-item">
            <Link href="/about">
              <a className="nav-link">About</a>
            </Link>
          </li>
        </ul>
      </div>

      <div class="dropdown">
        <button disabled="" class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown">
          <i class="bi bi-person"></i>
        </button>
        <ul class="dropdown-menu show" id="dropdown-menu" aria-labelledby="dropdownMenu2">
          <li>
            <Link href="/admin/loginAdmin">
              <button class="dropdown-item" type="button">Admin</button>
            </Link>
          </li>
        </ul>
      </div>

    </div>
  </nav>

);

export default NavBar;