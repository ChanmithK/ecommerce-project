import ProductCardModal from "@/app/components/common/product-card-modal";
import ShopLayout from "@/app/components/shop/shop-layout";

export default function Shop() {
  return (
    <main>
      <ShopLayout />
      {/* Modal View */}
      <ProductCardModal />
    </main>
  );
}
