import Image from "next/image";
import Navbar from "./components/home/navbar";
import IntroSection from "./components/home/intro-section";
import Container from "./components/container";
import FeaturedSection from "./components/home/featured-section";
import BannerSection from "./components/home/banner-section";
import CategoriesSection from "./components/home/categories-section";
import ProductCardModal from "./components/common/product-card-modal";
import CategoryMenuSection from "./components/home/category-menu-section";

export default function Home() {
  return (
    <main>
      <Navbar />
      {/* Intro Section */}
      <IntroSection />
      {/* Quick Category */}
      <CategoryMenuSection />
      {/* Featured Section */}
      <FeaturedSection />
      {/* Banner Section */}
      <BannerSection />
      {/* Categories Section */}
      <CategoriesSection />
      {/* Modal View */}
      <ProductCardModal />
    </main>
  );
}
