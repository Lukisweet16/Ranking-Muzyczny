import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import '../styles/index.css';


const Layout = ({ children, ambientImage = null }) => {
  
 
  const backgroundStyle = ambientImage 
    ? { backgroundImage: `url(${ambientImage})`, backgroundSize: 'cover', backgroundPosition: 'center', filter: 'blur(80px) brightness(0.4)' }
    : {}; 

  return (
    <div className="Layout">
      
      <div className="ambient-background" style={backgroundStyle} />

      <Header />
      
    
      <div className="content-wrapper">
        {children}
      </div>

      <Footer />
    </div>
  );
};


Layout.Main = ({ children }) => <section className="layout-section-main">{children}</section>;

Layout.Right = ({ children }) => <section className="glass-card layout-section-secondary">{children}</section>;
Layout.Left = ({ children }) => <section className="glass-card layout-section-stats">{children}</section>;

export default Layout;