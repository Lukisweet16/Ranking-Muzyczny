import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="Layout">
      <header>
        <Header />
      </header>
      {children}

      <footer>
        <Footer />
      </footer>
    </div>
  );
};
Layout.Right = ({ children }) => <aside>{children}</aside>;
Layout.Main = ({ children }) => <main>{children}</main>;
Layout.Left = ({ children }) => <aside>{children}</aside>;
export default Layout;
