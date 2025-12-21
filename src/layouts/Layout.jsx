import React, {useState} from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, showHeader = true, showFooter = true }) => {
    const [cart, setCart] = useState([]);

    return (
        <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            {showHeader && <Header cart={cart}/>}
            <main style={{ flex: 1 }}>{children}</main>
            {showFooter && <Footer />}
        </div>
    );
};
export default Layout;