import { useState } from "react";
import "./createProduct.css";
import { addProduct } from "../../productSlice";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";

export default function FormProduct() {
  const [product, setProduct] = useState({
    productName: "",
    productCategory: "",
    image: null,
    productFreshness: "",
    textDescription: "",
    priceProduct: "",
  });

  const dispatch = useDispatch();
  const [alertMessage, setAlertMessage] = useState("");
  const [alertProductEmpty, setAlertProductEmpty] = useState("");
  const [alertPriceEmpty, setAlertPriceEmpty] = useState("");
  const [imageAlert, setImageAlert] = useState("");

  const handleProductNameChange = (event) => {
    const newProductName = event.target.value;
    setProduct((prevProduct) => ({
      ...prevProduct,
      productName: newProductName,
    }));

    let lengthAlertVisible = false;
    let symbolAlertVisible = false;

    // Validasi panjang nama produk
    if (newProductName.length > 10) {
      lengthAlertVisible = true;
    }

    // Validasi simbol
    const symbolPattern = /[@#${}/]/;
    if (symbolPattern.test(newProductName)) {
      symbolAlertVisible = true;
    }

    // Menyusun pesan peringatan berdasarkan validasi
    if (lengthAlertVisible) {
      setAlertMessage("Product Name must not exceed 10 characters.");
    } else if (symbolAlertVisible) {
      setAlertMessage("Product Name cannot contain symbols.");
    } else {
      setAlertMessage(""); // Hapus pesan peringatan jika validasi berhasil
    }
  };

  const optionsCategory = [
    { value: "", label: "Choose..." },
    { value: "1", label: "kaos" },
    { value: "2", label: "jaket" },
    { value: "3", label: "celana" },
  ];

  const handleCategory = (e) => {
    const newProductCategory = e.target.value;
    setProduct((prevProduct) => ({
      ...prevProduct,
      productCategory: newProductCategory,
    }));
  };

  const onImageChange = (event) => {
    const newOnImageChange = event.target.files;

    let sizeImageAlert = false;
    let selectedImage = null;

    if (newOnImageChange && newOnImageChange[0]) {
      selectedImage = newOnImageChange[0];

      // Memeriksa ukuran file
      const maxSizeInBytes = 5 * 1024 * 1024;
      if (selectedImage.size > maxSizeInBytes) {
        sizeImageAlert = true;
      }
    }

    if (sizeImageAlert) {
      setImageAlert("Ukuran file terlalu besar. Maksimum 5 MB diizinkan.");
      return;
    }

    // Memeriksa validitas gambar
    const img = new Image();
    img.onload = () => {
      setProduct((prevProduct) => ({
        ...prevProduct,
        image: URL.createObjectURL(selectedImage),
      }));
      setImageAlert("");
    };

    img.onerror = () => {
      setImageAlert("File yang dipilih bukan gambar yang valid.");
    };

    img.src = URL.createObjectURL(selectedImage);
  };

  const eventHandlerSubmit = (event) => {
    event.preventDefault();

    if (
      product.productName.trim() === "" &&
      product.priceProduct.trim() === ""
    ) {
      alert("The xxx field must be filled in");
      event.preventDefault();
    } else if (product.productName.trim() === "") {
      setAlertProductEmpty(
        "Product Name cannot empty. Please enter a valid Product name!!!"
      );
      event.preventDefault();
    } else if (product.priceProduct.trim() === "") {
      setAlertPriceEmpty(
        "Product Price cannot empty. Please enter a valid Product Price!!!"
      );
      event.preventDefault();
    } else {
      alert("data berhasil disimpan");
      dispatch(
        addProduct({
          id: uuid(),
          productName: product.productName,
          productCategory: product.productCategory,
          productFreshness: product.productFreshness,
          image: product.image,
          textDescription: product.textDescription,
          priceProduct: product.priceProduct,
        })
        );
    }
    event.target.reset();
  };

  return (
    <main>
      <form onSubmit={eventHandlerSubmit}>
        <div className="content">
          <div className="form-detail-product">
            <h3>Detail Product</h3>

            <div className="productname">
              <label htmlFor="productname" className="form-label">
                Product Name
              </label>
              <input
                type="text"
                id="nameProduct"
                className="form-control"
                maxLength="25"
                placeholder="Input your product name"
                value={product.productName}
                onChange={handleProductNameChange}
              />

              <div
                className="alert alert-warning mt-2"
                id="nameLengthAlert"
                style={{ display: alertMessage ? "block" : "none" }}
                role="alert"
              >
                {alertMessage}
              </div>
              <div
                className="alert alert-danger alert-dismissible fade show mt-2"
                id="alertPrice"
                style={{ display: alertProductEmpty ? "block" : "none" }}
                role="alert"
              >
                {alertProductEmpty}
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                ></button>
              </div>
            </div>

            <div className="select-category">
              <label htmlFor="productcategory" className="form-label">
                Product Category
              </label>
              <select
                className="form-select"
                id="selectCategory"
                aria-label="Default select example"
                onChange={handleCategory}
              >
                {optionsCategory.map((option) => {
                  return (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="img">
              <label htmlFor="input-img" className="form-label">
                Product Image
              </label>
              <div className="input-group">
                <input
                  type="file"
                  className="form-control image"
                  id="inputImg"
                  aria-describedby="inputGroupFileAddon04"
                  aria-label="Upload"
                  accept="image/*"
                  onChange={onImageChange}
                />
              </div>
              <div
                className="alert alert-danger alert-dismissible fade show mt-2"
                id="alertImage"
                style={{ display: imageAlert ? "block" : "none" }}
                role="alert"
              >
                {imageAlert}
              </div>
            </div>

            <div className="product-freshness">
              <label htmlFor="product-freshness" className="form-label">
                Product Freshness
              </label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  value="Brand New"
                  id="RadioDefault1"
                  checked={product.productFreshness === "Brand New"}
                  onChange={() =>
                    setProduct((prevProduct) => ({
                      ...prevProduct,
                      productFreshness: "Brand New",
                    }))
                  }
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Brand New
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  value="Second Hand"
                  id="RadioDefault1"
                  checked={product.productFreshness === "Second Hand"}
                  onChange={() =>
                    setProduct((prevProduct) => ({
                      ...prevProduct,
                      productFreshness: "Second Hand",
                    }))
                  }
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Second Hand
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  value="Refufbished"
                  id="RadioDefault1"
                  checked={product.productFreshness === "Refufbished"}
                  onChange={() =>
                    setProduct((prevProduct) => ({
                      ...prevProduct,
                      productFreshness: "Refufbished",
                    }))
                  }
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Refufbished
                </label>
              </div>
            </div>

            <div className="text-box">
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  Additional description
                </label>
                <textarea
                  className="form-control"
                  id="textArea"
                  rows="3"
                  value={product.textDescription}
                  onChange={(event) => {
                    setProduct((prevProduct) => ({
                      ...prevProduct,
                      textDescription: event.target.value,
                    }));
                  }}
                ></textarea>
              </div>
            </div>

            <div className="price">
              <label htmlFor="product-freshness" className="form-label">
                Price
              </label>
              <div className="input-group mb-3">
                <span className="input-group-text bg-white ">$</span>
                <input
                  type="number"
                  id="productPrice"
                  className="form-control"
                  value={product.priceProduct}
                  onChange={(event) => {
                    setProduct((prevProduct) => ({
                      ...prevProduct,
                      priceProduct: event.target.value,
                    }));
                  }}
                  placeholder="1"
                />
              </div>
              <div
                className="alert alert-danger alert-dismissible fade show mt-2"
                id="alertPrice"
                style={{ display: alertPriceEmpty ? "block" : "none" }}
                role="alert"
              >
                {alertPriceEmpty}
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                ></button>
              </div>
            </div>

            <button className="btn" type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
    </main>
  );
}
