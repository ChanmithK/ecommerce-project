export const exampleProduct = {
  id: 1,
  name: "Glossy Gray 19 Aluminium Wheel AR-19",
  slug: "example-product",
  isNew: true,
  isSale: false,
  isOffer: true,
  isStock: true,
  price: 19.99,
  oldPrice: 24.99,
  rating: 4.5,
  reviews: 10,
  sku: "ABC123",
  brand: "RedGate",
  country: "Germany",
  partNumber: "BDX-750",
  description:
    "Many philosophical debates that began in ancient times are still debated today. In one general sense, philosophy is associated with wisdom, intellectual culture and a search for knowledge.",
  stock: 100,
  keyFeatures: ["Feature 1", "Feature 2"],
  variants: [
    {
      price: 19.99,
      material: "Steel",
      colors: [
        { name: "Red", slug: "red", value: "#FF0000" },
        { name: "Blue", slug: "blue", value: "#0000FF" },
        { name: "Yellow", slug: "yellow", value: "#FFFF00" },
        { name: "White", slug: "white", value: "#FFFFFF" },
      ],
    },
    {
      price: 29.99,
      material: "Aluminium",
      colors: [
        { name: "Red", slug: "red", value: "#FF0000" },
        { name: "Yellow", slug: "yellow", value: "#FFFF00" },
        { name: "White", slug: "white", value: "#FFFFFF" },
        { name: "Blue", slug: "blue", value: "#0000FF" },
      ],
    },
    {
      price: 39.99,
      material: "Thorium",
      colors: [
        { name: "Blue", slug: "blue", value: "#0000FF" },
        { name: "Red", slug: "red", value: "#FF0000" },
        { name: "Yellow", slug: "yellow", value: "#FFFF00" },
        { name: "White", slug: "white", value: "#FFFFFF" },
      ],
    },
  ],
  images: [
    "/images/products/product-1.jpg",
    "/images/products/product-2.jpg",
    "/images/products/product-3.jpg",
  ],
  quantity: 10,
  stockQuantity: 5,
  selectedVariant: {
    selectedColor: "yellow",
    selectedMaterial: "Steel",
  },
};
