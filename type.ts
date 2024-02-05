export interface ProductColor {
  name: string;
  slug: string;
  value: string;
}

export interface variant {
  grnProductId: number;
  materialId: number;
  materialName: string;
  sizeId: number;
  sizeName: string;
  colorId: number;
  colorName: string | null;
  colorCode: string | null;
  price: number;
  qty: number;
  total: number;
}
export interface ProductVariant {
  hasMaterialVariant: boolean;
  hasSizeVariant: boolean;
  hasColorVariant: boolean;
  variant: variant[];
}

export interface selectedVariant {
  selectedColor: string;
  selectedMaterial: string;
}

export interface defaultVariant {
  grnProductId: number;
  materialId: number;
  materialName: string;
  sizeId: number;
  sizeName: string;
  colorId: number;
  colorName: string | null;
  colorCode: string | null;
  price: number;
  qty: number;
  total: number;
}

export interface ProductReviews {
  name: string;
  date: string;
  rating: number;
  description: string;
  userImage: string;
  reviewImages: [];
}

export interface Products {
  id: number;
  name: string;
  slug: string;
  isNew: boolean;
  isSale: boolean;
  isOffer: boolean;
  isStock: boolean;
  price: number;
  maxPrice: number;
  oldPrice: number;
  rating: number;
  reviews: number;
  sku: string;
  brand: string;
  country: string;
  partNumber: string;
  description: string;
  stock: number;
  keyFeatures: string[];
  keyGenerals: [{}];
  keyDimensions: [{}];
  variants: ProductVariant;
  quantity: number;
  stockQuantity: number;
  images: string[];
  defaultVariant: defaultVariant;
  longDescription: string;
  productReviews: ProductReviews[];
}

export interface ItemProps {
  item: Products;
}

export interface StateProps {
  user: {
    productData: [];
    wishlistData: [];
    userInfo: {};
    orderData: {
      order: Products[];
    };
  };
}
