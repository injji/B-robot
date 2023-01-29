import React from 'react';
import Footer from './Footer';
import Header from './Header';

interface Layout {
    children:React.ReactNode;
}

const Layout = ({children} : Layout) => {
    return (
        <>
            <Header />

            <section>
                {children}
            </section>

            {/* <Footer /> */}
        </>
    );
};

export default Layout;