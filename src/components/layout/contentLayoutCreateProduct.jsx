import Footer from "./footer/footer.jsx";
import Header from "./header/header.jsx";
import Navbar from "./navbar/navbar.jsx";
export default function ContenLayoutCreateProduct({ children }) {
  return (
    <>
      <Navbar />
      <Header />
      {children}
      <Footer />
    </>
  );
}
