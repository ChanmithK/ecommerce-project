import ProductCardModal from "@/app/components/common/product-card-modal";
import ShopLayout from "@/app/components/shop/shop-layout";

export default function Shop({ params }: { params: { slug: string[] } }) {
  return (
    <main>
      <ShopLayout params={params} />
      {/* Modal View */}
      <ProductCardModal />
    </main>
  );
}
