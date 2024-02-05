"use client";
import React, { useEffect, useState } from "react";
import { exampleProduct } from "../data";
import FormattedPrice from "../common/formatted-price";
import {
  selectLoading,
  selectProduct,
} from "@/redux/slices/temporary-data-slice";
import { useDispatch, useSelector } from "react-redux";
import { variant } from "../../../../type";
import toast from "react-hot-toast";
import { addToCart } from "@/redux/slices/user-slice";
import ProductPageCartSkeleton from "../skeletonLoadings/product-page-cart-skeleton";

interface ColorData {
  colorName: string;
  colorCode: string;
}
const ProductAddToCartSection = () => {
  const dispatch = useDispatch();
  const Product = useSelector(selectProduct);

  const [quantity, setQuantity] = useState(1);
  const [selectedMaterial, setSelectedMaterial] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [uniquePrices, setUniquePrices] = useState(0);
  const [grnId, setGRNId] = useState(0);
  const [qty, setQty] = useState(0);
  const [uniqueColorNames, setUniqueColorNames] = useState<ColorData[]>([]);
  const [uniqueSizeNames, setUniqueSizeNames] = useState<Set<string | null>>(
    new Set()
  );

  const [addtoCartDisable, setAddtoCartDisable] = useState<boolean>(true);

  const isLoading = useSelector(selectLoading);

  const item = Product?.[0];

  useEffect(() => {
    const isAnyVariantNotSelected =
      (item?.variants.hasMaterialVariant && selectedMaterial === null) ||
      (item?.variants.hasSizeVariant && selectedSize === null) ||
      (item?.variants.hasColorVariant && selectedColor === null);

    setAddtoCartDisable(!!isAnyVariantNotSelected);
  }, [item, selectedColor, selectedMaterial, selectedSize]);

  useEffect(() => {
    if (!item) return;

    const filteredVariants = item?.variants.variant.filter((variant) => {
      const hasColorFilter =
        !item?.variants.hasColorVariant ||
        selectedColor === null ||
        variant.colorName === selectedColor;
      const hasSizeFilter =
        !item?.variants.hasSizeVariant ||
        selectedSize === null ||
        variant.sizeName === selectedSize;
      const hasMaterialFilter =
        !item?.variants.hasMaterialVariant ||
        variant.materialName === selectedMaterial;

      return hasColorFilter && hasSizeFilter && hasMaterialFilter;
    });

    const getUniqueValues = (key: any) =>
      Array.from(
        new Set(filteredVariants?.map((variant: any) => variant?.[key] ?? 0))
      );

    const uniquePrices = getUniqueValues("price");
    const uniqueGRNId = getUniqueValues("grnProductId");
    const uniqueQty = getUniqueValues("qty");
    const uniqueColors = getUniqueValues("colorName");

    setUniquePrices(
      uniquePrices.length > 0 ? Math.min(...uniquePrices) : item?.price ?? 0
    );
    setGRNId(
      uniqueGRNId.length > 0
        ? Math.min(...uniqueGRNId)
        : item?.defaultVariant?.grnProductId ?? 0
    );
    setQty(
      uniqueQty.length > 0
        ? Math.min(...uniqueQty)
        : item?.defaultVariant?.qty ?? 0
    );

    setSelectedColor(uniqueColors.length === 1 ? uniqueColors[0] : null);
  }, [item, selectedColor, selectedMaterial, selectedSize]);

  useEffect(() => {
    const filterUniqueColorNames = item?.variants.hasColorVariant
      ? Object.values(
          item.variants.variant
            .filter((variant) => {
              const hasSizeFilter =
                !item?.variants.hasSizeVariant ||
                selectedSize === null ||
                variant.sizeName === selectedSize;
              const hasMaterialFilter =
                !item?.variants.hasMaterialVariant ||
                variant.materialName === selectedMaterial;

              return hasSizeFilter && hasMaterialFilter;
            })
            .reduce((uniqueColors, item) => {
              if (item && item.colorName && item.colorCode) {
                const colorName = item.colorName;
                const colorCode = item.colorCode;

                const existingColor = uniqueColors.find(
                  (color) => color.colorName === colorName
                );

                if (!existingColor) {
                  uniqueColors.push({ colorName, colorCode });
                }
              }

              return uniqueColors;
            }, [] as ColorData[])
        )
      : [];

    setUniqueColorNames(filterUniqueColorNames);
  }, [item, selectedMaterial, selectedSize]);

  useEffect(() => {
    const filterUniqueSizeNames: Set<string | null> = item?.variants
      .hasSizeVariant
      ? new Set(
          item.variants.variant
            .filter((variant) => {
              const hasColorFilter =
                !item?.variants.hasColorVariant ||
                selectedColor === null ||
                variant.colorName === selectedColor;
              const hasMaterialFilter =
                !item?.variants.hasMaterialVariant ||
                variant.materialName === selectedMaterial;

              return hasColorFilter && hasMaterialFilter;
            })
            .map((item: variant) => item.sizeName)
        )
      : new Set();

    setUniqueSizeNames(filterUniqueSizeNames);
  }, [item, selectedColor, selectedMaterial]);

  const handleMaterialSelect = (material: string) => {
    setSelectedMaterial(material);
    setSelectedSize(null);
    setSelectedColor(null);
  };

  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
    setSelectedColor(null);
  };

  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
  };

  const handleIncreaseQuantity = () => {
    setQuantity((prevQuantity) => Math.min(prevQuantity + 1, qty));
  };

  const handleDecreaseQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const handleAddToCart = (productDetails: any) => {
    // Logic implementation to add the product to the cart
    const updateCart = {
      id: productDetails.id,
      name: productDetails.name,
      slug: productDetails.slug,
      isNew: productDetails.isNew,
      isSale: productDetails.isSale,
      isOffer: productDetails.isOffer,
      isStock: productDetails.isStock,
      price: uniquePrices,
      oldPrice: productDetails.oldPrice,
      rating: productDetails.rating,
      reviews: productDetails.reviews,
      sku: productDetails.sku,
      brand: productDetails.brand,
      country: productDetails.country,
      partNumber: productDetails.partNumber,
      description: productDetails.description,
      stock: productDetails.stock,
      keyFeatures: productDetails.keyFeatures,
      variants: productDetails.variants,
      images: productDetails.images,
      quantity: quantity,
      stockQuantity: productDetails.stockQuantity,
      defaultVariant: {
        grnProductId: grnId,
        materialId: productDetails?.defaultVariant?.materialId,
        materialName:
          selectedMaterial ?? productDetails.defaultVariant.materialName,
        sizeId: productDetails.defaultVariant.sizeId,
        sizeName: selectedSize ?? productDetails.defaultVariant.sizeName,
        colorId: productDetails.defaultVariant.colorId,
        colorName: selectedColor ?? productDetails.defaultVariant.colorName,
        colorCode: productDetails.defaultVariant.colorCode,
        price: productDetails.defaultVariant.price,
        qty: qty,
        total: productDetails.defaultVariant.total,
      },
    };

    dispatch(addToCart(updateCart)) &&
      toast.success(
        `${item?.name.substring(0, 15)} add to cart successfully!`,
        { position: "top-center" }
      );
  };

  const renderMaterialOptions = () => {
    const MaterialNames = item?.variants.hasMaterialVariant
      ? Array.from(
          new Set(
            item.variants.variant.map((item: variant) => item.materialName)
          )
        )
      : [];

    return item?.variants.hasMaterialVariant ? (
      <div>
        <h4 className="text-sm text-gray-500 font-medium mt-2">MATERIAL</h4>
        <div className="grid grid-cols-3 mt-1 gap-2">
          {MaterialNames.map((materialName, index) => (
            <div
              key={index}
              className={`col-span-1 cursor-pointer ${
                selectedMaterial === materialName
                  ? "border-2 border-black rounded-md"
                  : ""
              }`}
              onClick={() => handleMaterialSelect(materialName)}
            >
              <div className="border-2 border-slate-200 rounded-md">
                <h5 className="text-sm font-semibold whitespace-nowrap flex justify-center text-gray-800">
                  {materialName}
                </h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    ) : (
      <></>
    );
  };

  const renderSizeOptions = () => {
    const SizeNames = item?.variants.hasSizeVariant
      ? Array.from(
          new Set(item.variants.variant.map((item: variant) => item.sizeName))
        )
      : [];

    return item?.variants.hasSizeVariant &&
      (selectedMaterial || !item?.variants.hasMaterialVariant) ? (
      <div>
        <h4 className="text-sm text-gray-500 font-medium mt-2">SIZES</h4>
        <div className="grid grid-cols-3 mt-1 gap-2">
          {SizeNames?.map((sizeName, index) => (
            <button
              disabled={!uniqueSizeNames.has(sizeName)}
              key={index}
              className={`col-span-1 cursor-pointer ${
                selectedSize === sizeName
                  ? "border-2 border-black rounded-md"
                  : ""
              }
              ${!uniqueSizeNames.has(sizeName) ? "opacity-25" : ""}
            
              `}
              onClick={() => handleSizeSelect(sizeName)}
            >
              <div className="border-2 border-slate-200 rounded-md">
                <h5 className="text-sm font-semibold whitespace-nowrap flex justify-center text-gray-800">
                  {sizeName}
                </h5>
              </div>
            </button>
          ))}
        </div>
      </div>
    ) : (
      <></>
    );
  };

  const renderColorOptions = () => {
    const ColorNames = item?.variants.hasColorVariant
      ? Object.values(
          item.variants.variant.reduce((uniqueColors, item) => {
            if (item && item.colorName && item.colorCode) {
              const colorName = item.colorName;
              const colorCode = item.colorCode;

              if (!uniqueColors[colorName]) {
                uniqueColors[colorName] = { colorName, colorCode };
              }
            }

            return uniqueColors;
          }, {} as { [key: string]: ColorData })
        )
      : [];

    return item?.variants.hasColorVariant &&
      (selectedSize || !item?.variants.hasSizeVariant) ? (
      <div>
        <h4 className="text-sm text-gray-500 font-medium mt-2">COLOR</h4>
        <div className="flex items-center gap-2">
          {ColorNames.map((colorData, index) => (
            <button
              disabled={uniqueColorNames.every(
                (color) => color.colorName !== colorData.colorName
              )}
              key={index}
              className={`rounded-full h-8 w-8 flex items-center justify-center cursor-pointer ${
                selectedColor === colorData.colorName
                  ? "border-2 border-black"
                  : "border-2 border-slate-200"
              }
              ${
                uniqueColorNames.every(
                  (color) => color.colorName !== colorData.colorName
                )
                  ? "opacity-25"
                  : ""
              }
  
              `}
              style={{ backgroundColor: colorData.colorCode ?? "" }}
              onClick={() => handleColorSelect(colorData.colorName)}
            ></button>
          ))}
        </div>
      </div>
    ) : (
      <></>
    );
  };

  return isLoading ? (
    <ProductPageCartSkeleton />
  ) : (
    <div>
      <div>
        <div className="flex mt-3 items-center">
          <h2 className="text-2xl font-bold">
            <FormattedPrice amount={uniquePrices} />
          </h2>
          <div className="text-xs rounded-xl bg-[#e2f2da] ml-2 p-2 text-[#44782a]">
            {item?.isStock ? "In Stock" : "Out Of Stock"}
          </div>
        </div>
        <div className="grid grid-cols-4 lg:grid-cols-2 gap-1 mt-3 lg:mt-6">
          <div className="flex flex-col  bg-slate-100 border-2 border-slate-100 rounded-md p-2 ">
            <h5 className="text-xs text-gray-500">SKU</h5>
            <h5 className="text-xs font-semibold whitespace-nowrap">
              {item?.sku}
            </h5>
          </div>
          <div className="flex flex-col bg-slate-100 border-2 border-slate-100 p-2 rounded-md">
            <h5 className="text-xs text-gray-500">Brand</h5>
            <h5 className="text-xs font-semibold whitespace-nowrap">
              {item?.brand}
            </h5>
          </div>
          <div className="flex flex-col bg-slate-100 border-2 border-slate-100 p-2 rounded-md">
            <h5 className="text-xs text-gray-500">Country</h5>
            <h5 className="text-xs font-semibold whitespace-nowrap">
              {item?.country}
            </h5>
          </div>
          <div className="flex flex-col bg-slate-100 border-2 border-slate-100 p-2 rounded-md">
            <h5 className="text-xs text-gray-500">Part Number</h5>
            <h5 className="text-xs font-semibold whitespace-nowrap">
              {item?.partNumber}
            </h5>
          </div>
        </div>
        {renderMaterialOptions()}
      </div>

      <div>
        {renderSizeOptions()}
        {renderColorOptions()}

        <div className="mt-4 lg:mt-6 flex items-center">
          <button
            onClick={handleDecreaseQuantity}
            className="px-3 py-1 bg-gray-300 rounded-full"
          >
            -
          </button>
          <label className="px-3">{quantity}</label>
          <button
            onClick={handleIncreaseQuantity}
            className="px-3 py-1 bg-gray-300 rounded-full"
          >
            +
          </button>
          <button
            disabled={addtoCartDisable}
            onClick={() => handleAddToCart(item)}
            className={`ml-4 bg-primary  text-white px-4 py-2 rounded-lg ${
              addtoCartDisable ? "opacity-25" : "hover:bg-secondary"
            }`}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductAddToCartSection;
