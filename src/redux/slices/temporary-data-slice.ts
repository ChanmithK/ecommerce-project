import {
  SerializedError,
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import { Products } from "../../../type";
import { RootState } from "../store";

import axios from "axios";

type Brand = {
  id: number;
  name: string;
};

type Material = {
  id: number;
  material_name: string;
};

type Size = {
  id: number;
  size_name: string;
};

type Color = {
  id: number;
  color_name: string;
  color_code: string;
};

interface StoreState {
  error: string | undefined;
  loadingStatus: boolean;
  featureProductsData: Products[];
  similarProductsData: Products[];
  shopData: {
    data: Products[];
    totalRecords: number;
  };
  filterOption: {
    productsBrands: Brand[];
    productsMaterials: Material[];
    productsSizes: Size[];
    productsColors: Color[];
  };
  productData: Products[];
  modalData: {
    isModalOpen: boolean;
    data: Products[];
  };
}

const initialState: StoreState = {
  error: "",
  loadingStatus: true,
  featureProductsData: [],
  similarProductsData: [],
  productData: [],
  shopData: {
    data: [],
    totalRecords: 0,
  },
  filterOption: {
    productsBrands: [],
    productsMaterials: [],
    productsSizes: [],
    productsColors: [],
  },
  modalData: {
    isModalOpen: false,
    data: [],
  },
};

interface ProductsPayload {
  currentPageNo: number;
  rowsPerPage: number;
  mainCategory: string;
  subCategory: string;
  selectedBrands: number[];
  selectedMaterial: number | null;
  selectedSize: number | null;
  selectedColor: number | null;
  selectedRatings: number[];
  price: { min: number; max: number };
}

export const fetchFeaturedProducts = createAsyncThunk(
  "featured-products/get-list",
  async () => {
    try {
      const response = await axios.post(
        process.env.NEXT_PUBLIC_BASE_URL + "nextapi/product/new-products",
        {},
        {
          headers: {
            // Authorization: 'Bearer ' + localStorage.getItem('token'),
          },
        }
      );

      // Extract relevant data from the response
      const responseData = response.data;

      return responseData;
    } catch (error) {
      throw error;
    }
  }
);

export const fetchSimilarProducts = createAsyncThunk(
  "similar-products/get-list",
  async (productSlug: string) => {
    try {
      const response = await axios.post(
        process.env.NEXT_PUBLIC_BASE_URL + "nextapi/product/similar-products",
        { productSlug: productSlug },
        {
          headers: {
            // Authorization: 'Bearer ' + localStorage.getItem('token'),
          },
        }
      );

      // Extract relevant data from the response
      const responseData = response.data;

      return responseData;
    } catch (error) {
      throw error;
    }
  }
);

export const fetchProduct = createAsyncThunk(
  "product/get-list",
  async (productSlug: string) => {
    try {
      const response = await axios.post(
        process.env.NEXT_PUBLIC_BASE_URL + "nextapi/product/search",
        { productSlug: productSlug },
        {
          headers: {
            // Authorization: 'Bearer ' + localStorage.getItem('token'),
          },
        }
      );

      const responseData = response.data;
      return responseData;
    } catch (error) {
      throw error;
    }
  }
);

// Get shop Data

export const fetchShopProduct = createAsyncThunk(
  "product-all/get-list",
  async (payload: ProductsPayload) => {
    try {
      const response = await axios.post(
        process.env.NEXT_PUBLIC_BASE_URL + "nextapi/product/all",
        payload,
        {
          headers: {
            // Authorization: 'Bearer ' + localStorage.getItem('token'),
          },
        }
      );

      const responseData = response.data;
      return responseData;
    } catch (error) {
      throw error;
    }
  }
);

// Get FilterOption

export const fetchFilterOption = createAsyncThunk("other/search", async () => {
  try {
    const response = await axios.post(
      process.env.NEXT_PUBLIC_BASE_URL + "nextapi/other/search",
      {
        headers: {
          // Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      }
    );
    const responseData = response.data;
    return responseData;
  } catch (error) {
    throw error;
  }
});

export const temporaryDataSlice = createSlice({
  name: "temporaryData",
  initialState,
  reducers: {
    viewModal: (state, action) => {
      const { payload } = action;
      state.modalData.data = [payload];
      state.modalData.isModalOpen = true;
    },
    hiddenModal: (state) => {
      state.modalData.data = [];
      state.modalData.isModalOpen = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFeaturedProducts.pending, (state: StoreState) => {
        state.loadingStatus = true;
      })
      .addCase(fetchFeaturedProducts.fulfilled, (state: StoreState, action) => {
        state.loadingStatus = false;
        const payload = (action.payload as any).data;
        state.featureProductsData = payload.map((item: Products) => ({
          ...item,
          quantity: 1,
        }));
      })
      .addCase(fetchFeaturedProducts.rejected, (state: StoreState, action) => {
        state.loadingStatus = false;
        state.error = action.error.message;
      })

      // Get Single  Product

      .addCase(fetchProduct.pending, (state: StoreState) => {
        state.loadingStatus = true;
      })
      .addCase(fetchProduct.fulfilled, (state: StoreState, action) => {
        state.loadingStatus = false;
        const payload = (action.payload as any).data;
        state.productData = [{ ...payload, quantity: 1 }];
      })
      .addCase(fetchProduct.rejected, (state: StoreState, action) => {
        state.loadingStatus = false;
        state.error = action.error.message;
      })

      // Get Similar Product
      .addCase(fetchSimilarProducts.pending, (state: StoreState) => {
        state.loadingStatus = true;
      })
      .addCase(fetchSimilarProducts.fulfilled, (state: StoreState, action) => {
        state.loadingStatus = false;
        const payload = (action.payload as any).data;
        state.similarProductsData = payload.map((item: Products) => ({
          ...item,
          quantity: 1,
        }));
      })
      .addCase(fetchSimilarProducts.rejected, (state: StoreState, action) => {
        state.loadingStatus = false;
        state.error = action.error.message;
      })

      // Get Shop All Products

      .addCase(fetchShopProduct.pending, (state: StoreState) => {
        state.loadingStatus = true;
      })
      .addCase(fetchShopProduct.fulfilled, (state: StoreState, action) => {
        state.loadingStatus = false;
        const payload = (action.payload as any).data;
        const total = (action.payload as any).totalRecords;
        state.shopData.data = payload?.map((item: Products) => ({
          ...item,
          quantity: 1,
        }));
        state.shopData.totalRecords = total;
      })
      .addCase(fetchShopProduct.rejected, (state: StoreState, action) => {
        state.loadingStatus = false;
        state.error = action.error.message;
      })

      // Get Filter Options

      .addCase(fetchFilterOption.pending, (state: StoreState) => {
        // state.loadingStatus = true;
      })
      .addCase(fetchFilterOption.fulfilled, (state: StoreState, action) => {
        // state.loadingStatus = false;
        const {
          productsBrands,
          productsColors,
          productsMaterials,
          productsSizes,
        } = action.payload as any;

        state.filterOption = {
          productsBrands,
          productsColors,
          productsMaterials,
          productsSizes,
        };
      })
      .addCase(fetchFilterOption.rejected, (state: StoreState, action) => {
        // state.loadingStatus = false;
        state.error = action.error.message;
      });
  },
});

export const selectModalData = (state: RootState) =>
  state.temporaryData.modalData;

export const selectFeaturedProducts = (state: RootState) =>
  state.temporaryData.featureProductsData;

export const selectSimilarProducts = (state: RootState) =>
  state.temporaryData.similarProductsData;

export const selectProduct = (state: RootState) =>
  state.temporaryData.productData;

export const selectLoading = (state: RootState) =>
  state.temporaryData.loadingStatus;

export const selectShopData = (state: RootState) =>
  state.temporaryData.shopData;

export const selectFilterOption = (state: RootState) =>
  state.temporaryData.filterOption;

export const { viewModal, hiddenModal } = temporaryDataSlice.actions;
export default temporaryDataSlice.reducer;
