import Footer from "./footer/footer.jsx";
import Navbar from "./navbar/navbar.jsx";
export default function ContenLayoutLandingPage({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
