import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: "e7ce2b97-d0c1-4a75-9c1d-e6dfc8441836",

      productName: "John",

      productCategory: "Doe",

      productFreshness: "Doe",

      priceProduct: "Doe",

      image: "Doe",

      textDescription: "Doe",
    },
  ], // Inisialisasi dengan array kosong
};

const productSlice = createSlice({
  name: "products", // Nama slice
  initialState,
  reducers: {
    addProduct: (state, { payload }) => {
      const {
        id,
        productName,
        productCategory,
        image,
        productFreshness,
        textDescription,
        priceProduct,
      } = payload;

      const newProduct = {
        id,
        productName,
        priceProduct,
        productCategory,
        productFreshness,
        textDescription,
        image,
      };
      state.products = [...state.products, newProduct];
    },

    removeProduct: (state, action) => {
      const { id } = action.payload;

      state.products = state.products.filter((product) => product.id !== id);
    },

    editProduct: (state, action) => {
      const {
        id,
        productName,
        productCategory,
        image,
        productFreshness,
        textDescription,
        priceProduct,
      } = action.payload;

      const productIndex = state.products.findIndex(
        (product) => product.id === id
      );

      if (productIndex !== -1) {
        state.products[productIndex] = {
          ...state.products[productIndex],
          id,
          productName,
          productCategory,
          image,
          productFreshness,
          textDescription,
          priceProduct,
        };
      }
    },
  },
});

export const selectProduct = (state) => state.products;

export const { addProduct, removeProduct, editProduct } = productSlice.actions;

export default productSlice.reducer;
