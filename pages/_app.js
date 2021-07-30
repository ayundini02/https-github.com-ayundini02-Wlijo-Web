import Head from "next/head";
import "../styles/fontawesome-free-5.15.3-web/css/all.min.css";
import "../public/css/style.css";

function MyApp({ Component, pageProps }) {
  return (
    <>

      <Head>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />

        <title>WLIJO</title>
        <meta content="" name="description" />
        <meta content="" name="keywords" />

        <link href="/img/logo_wlijo.jpeg" rel="icon" />
        <link href="/img/apple-touch-icon.png" rel="apple-touch-icon" />

        <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet" />

        <link href="/vendor/animate.css/animate.min.css" rel="stylesheet" />
        <link href="/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
        <link href="/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet" />
        <link href="/vendor/swiper/swiper-bundle.min.css" rel="stylesheet" />
        <link href="/admin/vendor/boxicons/css/boxicons.min.css" rel="stylesheet" />
        <link href="/admin/vendor/glightbox/css/glightbox.min.css" rel="stylesheet" />
        <link href="/admin/vendor/aos/aos.css" rel="stylesheet" />

        <link href="/css/style.css" rel="stylesheet" />
        <link href="/css/admin.css" rel="stylesheet" />

      </Head>
      <Component {...pageProps} />
    </>
  );
}


export default MyApp;