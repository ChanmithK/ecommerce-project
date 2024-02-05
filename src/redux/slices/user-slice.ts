import { createSelector, createSlice } from "@reduxjs/toolkit";
import { Products } from "../../../type";
import { RootState } from "../store";

interface StoreState {
  productData: Products[];
  wishlistData: Products[];
  userInfo: null | string;
  orderData: {
    order: Products[];
  };
}

const initialState: StoreState = {
  productData: [],
  wishlistData: [],
  userInfo: null,
  orderData: {
    order: [],
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.wishlistData = state.wishlistData.filter(
        (item) => item.id !== action.payload.id
      );
      const existingProduct = state.productData.find(
        (item: Products) =>
          item.defaultVariant.grnProductId ===
          action.payload.defaultVariant.grnProductId
      );

      if (existingProduct) {
        existingProduct.quantity += action.payload.quantity;
      } else {
        state.productData.push(action.payload);
      }
    },
    addToWishlist: (state, action) => {
      const existingProduct = state.wishlistData.find(
        (item: Products) => item.id === action.payload.id
      );
      if (!existingProduct) {
        state.wishlistData.push(action.payload);
      }
    },
    removeWishlist: (state, action) => {
      state.wishlistData = state.wishlistData.filter(
        (item) => item.id !== action.payload
      );
    },
    increaseQuantity: (state, action) => {
      const existingProduct = state.productData.find(
        (item: Products) =>
          item.defaultVariant.grnProductId ===
          action.payload.defaultVariant.grnProductId
      );
      if (existingProduct) {
        existingProduct.quantity = Math.min(
          existingProduct.quantity + 1,
          existingProduct.defaultVariant.qty
        );
      }
    },
    decreaseQuantity: (state, action) => {
      const existingProduct = state.productData.find(
        (item: Products) =>
          item.defaultVariant.grnProductId ===
          action.payload.defaultVariant.grnProductId
      );
      if (existingProduct?.quantity === 1) {
        existingProduct.quantity === 1;
      } else {
        existingProduct && existingProduct.quantity--;
      }
    },
    deleteProduct: (state, action) => {
      state.productData = state.productData.filter(
        (item) => item.defaultVariant.grnProductId !== action.payload
      );
    },
    resetCart: (state) => {
      state.productData = [];
    },

    // addUser: (state, action) => {
    //   state.userInfo = action.payload;
    // },
    // deleteUser: (state) => {
    //   state.userInfo = null;
    // },
    saveOrder: (state, action) => {
      const orderItems = JSON.parse(JSON.stringify(state.productData)).filter(
        (item: any) =>
          !action.payload.includes("" + item.defaultVariant?.grnProductId)
      );

      state.orderData.order = orderItems;
    },
    // resetOrder: (state) => {
    //   state.orderData = [];
    // },
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  deleteProduct,
  resetCart,
  addToWishlist,
  removeWishlist,
  saveOrder,
  // addUser,
  // deleteUser,
  // resetOrder,
} = userSlice.actions;

export default userSlice.reducer;
