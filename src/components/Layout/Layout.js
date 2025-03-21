import React from "react";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import AppRoutes from "../../routes/Routers";
import Carts from "../UI/cart/Carts.jsx";
import { useSelector } from "react-redux";

const Layout = () => {
    const showCart = useSelector((state) => state.cartUi?.cartIsVisible || false);

    return (
        <>
            <Header />
            {showCart && <Carts />}
            <main className="main-content">  {/* Ajout de className ici */}
                <AppRoutes />
            </main>
            <Footer />
        </>
    );
};

export default Layout;
