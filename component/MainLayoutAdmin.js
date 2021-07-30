import FooterAdmin from "./footerAdmin";
import NavbarAdmin from "./navbarAdmin";

const MainLayout = (props) => (
    <div className="container">
        <NavbarAdmin/>
        {props.children}
        <FooterAdmin/>
    </div>
);

export default MainLayout;