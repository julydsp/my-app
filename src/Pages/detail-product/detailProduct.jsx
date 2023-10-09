import React from "react";
import { Link, useParams } from "react-router-dom";
import "./detail-product.css";
import { useSelector } from "react-redux";
import { selectProduct } from "../../productSlice";

export default function DetailProduct() {
  const products = useSelector(selectProduct).products;
  const { id } = useParams();

  const filteredProducts = products.filter((item) => item.id === id);

  if (filteredProducts.length === 0) {
    return <div>Data not found</div>;
  }

  const list = filteredProducts[0];

  return (
    <div className="product-detail">
      <table className="table-product-detail">
        <thead className="title">
          <tr>
            <th scope="col" colSpan={"2"}>
              Detail Product
            </th>
          </tr>
        </thead>
        <tbody className="product">
          <tr>
            <td>id </td>
            <td>{list.id}</td>
          </tr>
          <tr>
            <td>Product Name</td>
            <td>{list.productName}</td>
          </tr>
          <tr>
            <td>Image Product</td>
            <td>
              <img src={list.image} width={"200px"} alt="" />
            </td>
          </tr>
          <tr>
            <td>Product Freshness</td>
            <td>{list.productFreshness}</td>
          </tr>
          <tr>
            <td>Product Price</td>
            <td>{list.priceProduct}</td>
          </tr>
        </tbody>
      </table>
      <div className="button">
        <Link to={`/createProduct`}>
          <button className="button-back">Back</button>
        </Link>
      </div>
    </div>
  );
}
