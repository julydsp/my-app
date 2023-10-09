import FormProduct from "./Pages/form-create-product/formCreateProduct.jsx";
import ListItem from "./components/tabel/productList.jsx";
import { useEffect } from "react";
import ContenLayoutCreateProduct from "./components/layout/contentLayoutCreateProduct.jsx";

export default function CreateProductPage() {
  useEffect(() => {
    alert("Welcome to Create Product");
  }, []);

  return (
    <>
      <ContenLayoutCreateProduct>
        <FormProduct />
        <ListItem />
      </ContenLayoutCreateProduct>
    </>
  );
}
