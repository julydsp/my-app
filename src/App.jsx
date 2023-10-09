import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./landingPage.jsx";
import CreateProductPage from "./createProductPage.jsx";
import NotFound from "./components/not-found/notFound.jsx";
import DetailProduct from "./Pages/detail-product/detailProduct.jsx";
import EditProduct from "./Pages/edit-product/editProduct.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/createProduct" element={<CreateProductPage />} />
        <Route path="/detailProduct/:id" element={<DetailProduct />} />
        <Route path="/editProduct/:id" element={<EditProduct />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
