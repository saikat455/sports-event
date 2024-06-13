import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../footer/Footer";
import JerseyShop from "./JerseyShop";


const Shops = () => {
    return (
        <div>
            <Navbar></Navbar>
            <JerseyShop></JerseyShop>
            <Footer></Footer>
        </div>
    );
};

export default Shops;