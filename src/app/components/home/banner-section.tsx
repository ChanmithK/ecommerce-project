import React from "react";
import Container from "../container";
import Image from "next/image";

const BannerSection = () => {
  return (
    <Container>
      <section>
        <div className="flex justify-center">
          <h1 className="text-xl  font-bold">Special Offers</h1>
        </div>
        <div className="columns-2 w-full space-y-3 gap-4 mx-auto p-4">
          <div className="bg-gray-400 break-inside-avoid">
            <Image
              src={"/images/offers/banner1.jpg"}
              alt="product"
              layout="responsive"
              width={660} // Adjust the width based on your design
              height={220} // Adjust the height based on your design
              className="w-full h-full"
            />
          </div>
          <div className="bg-gray-400 break-inside-avoid">
            <Image
              src={"/images/offers/banner2.jpg"}
              alt="product"
              layout="responsive"
              width={660} // Adjust the width based on your design
              height={220} // Adjust the height based on your design
              className="w-full h-full"
            />
          </div>
        </div>
      </section>
    </Container>
  );
};

export default BannerSection;
