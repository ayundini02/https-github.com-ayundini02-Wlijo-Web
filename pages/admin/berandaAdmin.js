import MainLayout from "../../component/MainLayoutAdmin";

const BerandaAdmin = (props) => (
  <MainLayout>
    <main id="main">

      <section className="breadcrumbs">
        <div className="container">

          <div className="d-flex justify-content-between align-items-center">
            <h2>Dasboard</h2>
            <ol>
              <li><a href="/berandaAdmin">Home</a></li>
              <li>Dasboard</li>
            </ol>
          </div>

        </div>
      </section>

      <section className="inner-page">
        <div className="container">
          <p>
            Welcome To Admin Wlijo
          </p>
        </div>
      </section>

    </main>
    );
  </MainLayout>

);

export default BerandaAdmin;