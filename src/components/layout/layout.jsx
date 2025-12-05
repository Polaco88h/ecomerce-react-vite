import  Header  from "./Header.jsx";
import  Footer  from "./Footer.jsx";

function Layout({ children }) {
  return (
    <div>
      <Header/>
      <main style={{ padding: "20px" }}>{children}</main>
      <Footer/>
    </div>
  );
}

export default Layout;
