import { useDispatch, useSelector } from "react-redux";
import { selectProduct, removeProduct } from "../../productSlice";
import "./product-list.css";
import { Link } from "react-router-dom";

export default function ListItem() {
  const products = useSelector(selectProduct).products;

  const dispatch = useDispatch();
  return (
    <div className="footer">
      <div className="title">
        <h2>List Product</h2>
      </div>

      <div className="table-responsive">
        <table id="table" className="table w-75">
          <thead>
            <tr className="title">
              <th scope="col">No</th>
              <th scope="col">Product Name</th>
              <th scope="col">Product Category</th>
              <th scope="col">Image Of Product</th>
              <th scope="col">Product Freshness</th>
              <th scope="col">Additional description</th>
              <th scope="col">Product Price</th>
              <th scope="col" colSpan={2}>
                Action
              </th>
            </tr>
          </thead>
          <tbody className="table-item">
            {products.length > 0 ? (
              products.map((list) => (
                <tr className="tr-1" key={list.id}>
                  <td>
                    <Link to={`/detailProduct/${list.id}`} className="id">
                      {list.id}
                    </Link>
                  </td>
                  <td>{list.productName}</td>
                  <td>
                    {list.productCategory == 1
                      ? "kaos"
                      : list.productCategory == 2
                      ? "jaket"
                      : list.productCategory == 3
                      ? "celana"
                      : list.productCategory}
                  </td>
                  <td>
                    <img src={list.image} width={"200px"} alt={list.image} />
                  </td>
                  <td>{list.productFreshness}</td>
                  <td>{list.textDescription}</td>
                  <td>Rp.{list.priceProduct}</td>
                  <td className="action-1">
                    <button
                      type="button"
                      onClick={() => {
                        dispatch(removeProduct({ id: list.id }));
                      }}
                    >
                      delete
                    </button>
                  </td>
                  <td className="action-1">
                    <Link
                      to={`/editProduct/${list.id}`}
                      className="button-edit"
                    >
                      Edit
                    </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8">Tidak ada produk yang tersedia.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="search">
        <input
          type="text"
          id="productname"
          className="form-control fw-bold"
          placeholder="Search by Product Name"
        />
        <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" className="btn-search">
            search
          </button>
        </div>
      </div>
    </div>
  );
}
