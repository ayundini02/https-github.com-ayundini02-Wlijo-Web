import Footer from "./footer";
import NavBar from "./navbar";

const MainLayout = (props) => (
    <div className="container">
        <NavBar/>
        {props.children}
        <Footer/>
    </div>
);

export default MainLayout;