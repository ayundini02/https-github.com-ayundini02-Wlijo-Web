const Login = () => (


    <div className="wrapper">
        <link rel="stylesheet" href="/css/login.css" />
        <div className="card">
            <form action="#" className="d-flex flex-column">
                <div className="h3 text-center text-white">Login</div>
                <div className="d-flex align-items-center input-field my-3 mb-4"><span className="far fa-user p-2"></span>
                    <input type="text" placeholder="Nama" required className="form-control" /> </div>
                <div className="d-flex align-items-center input-field mb-4"> <span className="fas fa-lock p-2"></span>
                    <input type="text" placeholder="No.Telp" required className="form-control" id="hp" />
                </div>
                <div className="d-sm-flex align-items-sm-center justify-content-sm-between">
                </div>
                <div className="my-3"> <a href="/home" type="submit" value="Login" className="btn btn-primary">Login</a></div>
                <div className="mb-3"> <span className="text-light-white">Don't have an account?</span> <a href="#">Sign Up</a> </div>
            </form>
            <div className="position-relative border-bottom my-3 line"> <span className="connect">or connect with</span> </div>
            <div className="text-center py-3 connections"> <a href="https://wwww.facebook.com" target="_blank" className="px-2"> <img src="/img/facebook.jpeg" alt="" />
            </a> <a href="https://www.google.com" target="_blank" className="px-2"> <img src="/img/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png" alt="" /> </a>
                <a href="https://www.github.com" target="_blank" className="px-2"> <img src="/img/512x512-logo-github-icon-35.png" alt="" /> </a> </div>
        </div>
    </div>

);

export default Login;