import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, showHeader = true, showFooter = true }) => {
    return (
        <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            {showHeader && <Header />}
            <main style={{ flex: 1 }}>{children}</main>
            {showFooter && <Footer />}
        </div>
    );
};
export default Layout;