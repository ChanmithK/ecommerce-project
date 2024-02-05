"use client";
import {
  BsYoutube,
  BsGithub,
  BsLinkedin,
  BsFacebook,
  BsReddit,
} from "react-icons/bs";
// import payment from "@/images/payment.png";

import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";

interface SlideComponentProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  title: string;
  description: string;
}

const SlideComponent: React.FC<SlideComponentProps> = ({
  src,
  alt,
  width,
  height,
  title,
  description,
}) => (
  <div className="flex items-center gap-4 lg:border-r pr-4 justify-center">
    <Image src={src} alt={alt} width={width} height={height} className="" />
    <div className="">
      <div className="text-md font-semibold">{title}</div>
      <div className="text-sm font-normal">{description}</div>
    </div>
  </div>
);

const Footer = () => {
  const iconDetails = [
    {
      src: "/icons/deliveryTruck.png",
      alt: "Description of your image",
      width: 50,
      height: 50,
      title: "Free Shipping & Return",
      description: "Free shipping on orders over $99",
    },
    {
      src: "/icons/24Hours.png",
      alt: "Description of your image",
      width: 37,
      height: 37,
      title: "Customer Support 24/7",
      description: "Instant access to perfect support",
    },
    {
      src: "/icons/securePayment.png",
      alt: "Description of your image",
      width: 37,
      height: 37,
      title: "100% Secure Payment",
      description: "We ensure secure payment!",
    },
  ];

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="w-full bg-secondary text-slate-100">
      <div className="grid grid-flow-row p-8 gap-10">
        {/* Icon site details Section */}

        <div
          className="grid grid-cols-3  gap-2 justify-center lg:py-8 lg:border-b  border-opacity-10 mobile:hidden md:grid"
          style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.1)" }}
        >
          <div
            className="col-span-1 flex items-center gap-4 lg:border-r pr-4 justify-center"
            style={{ borderRight: "1px solid rgba(255, 255, 255, 0.3)" }}
          >
            <Image
              src="/icons/deliveryTruck.png"
              alt="Description of your image"
              width={50}
              height={50}
              className=""
            />
            <div className="">
              <div className="text-md font-semibold">
                Free Shipping & Return
              </div>
              <div className="text-sm font-normal">
                Free shipping on orders over $99
              </div>
            </div>
          </div>
          <div
            className="col-span-1 flex items-center gap-4 lg:border-r pr-4 justify-center"
            style={{ borderRight: "1px solid rgba(255, 255, 255, 0.3)" }}
          >
            <Image
              src="/icons/24Hours.png"
              alt="Description of your image"
              width={37}
              height={37}
              className=""
            />
            <div className="">
              <div className="text-md font-semibold">Customer Support 24/7</div>
              <div className="text-sm font-normal">
                Instant access to perfect support
              </div>
            </div>
          </div>
          <div className="col-span-1 flex items-center gap-4 justify-center">
            <Image
              src="/icons/securePayment.png"
              alt="Description of your image"
              width={37}
              height={37}
              className=""
            />
            <div className="">
              <div className="text-md font-semibold">100% Secure Payment</div>
              <div className="text-sm font-normal">
                We ensure secure payment!
              </div>
            </div>
          </div>
        </div>
        <div
          className="grid grid-cols-3 mobile:grid-cols-1 gap-2 justify-center border-b py-8  md:hidden "
          style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.1)" }}
        >
          <Slider {...settings}>
            {iconDetails.map((icon, index) => (
              <SlideComponent key={index} {...icon} />
            ))}
          </Slider>
        </div>
        {/* Footer main details Section */}
        <div
          className="grid lg:grid-cols-4 mobile:grid-cols-1 p-4 lg:border-b pb-7 -mb-3 lg:-mt-12 mobile:-mt-5"
          style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.2)" }}
        >
          <div className="col-span-1 flex flex-col gap-3 lg:justify-center">
            {/* Logo */}
            <h1 className="text-4xl font-bold">Auto Parts</h1>
            <p className="text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa in
              sint incidunt, minima quos voluptates, nobis autem laborum earum
              est pariatur aperiam. Delectus consectetur maxime quidem veniam,
              corporis.
            </p>
          </div>
          <div className="col-span-1 flex lg:justify-center mobile:mt-8">
            {/* Page Links */}
            <div>
              <p className="text-md font-semibold">
                <span className="md:hidden">-</span> Links
              </p>
              <ul className="text-base font-medium lg:mt-5 mobile:mt-3 flex flex-col gap-y-2">
                <Link href={"/"}>
                  <li className=" text-sm font-normal hover:text-orange-500 cursor-pointer duration-200">
                    Home
                  </li>
                </Link>
                <Link href={"pages/cart"}>
                  <li className="text-sm font-normal hover:text-orange-500 cursor-pointer duration-200">
                    Cart
                  </li>
                </Link>
                <Link href={"#"}>
                  <li className="text-sm font-normal hover:text-orange-500 cursor-pointer duration-200">
                    About
                  </li>
                </Link>
                <li className="text-sm font-normal hover:text-orange-500 cursor-pointer duration-200">
                  Newsletter
                </li>
                <li className="text-sm font-normal hover:text-orange-500 cursor-pointer duration-200">
                  Contact
                </li>
              </ul>
            </div>
          </div>
          <div className="col-span-1 flex lg:justify-end mobile:mt-8">
            <div>
              <p className="text-md font-semibold">
                <span className="md:hidden">-</span> Customer Services
              </p>
              <ul className="text-base font-medium lg:mt-5 mobile:mt-3 flex flex-col gap-y-2">
                <Link href={"/"}>
                  <li className=" text-sm font-normal hover:text-orange-500 cursor-pointer duration-200">
                    Payment Methods
                  </li>
                </Link>
                <Link href={"/cart"}>
                  <li className="text-sm font-normal hover:text-orange-500 cursor-pointer duration-200">
                    Money-back Guarantee!
                  </li>
                </Link>
                <Link href={"/about"}>
                  <li className="text-sm font-normal hover:text-orange-500 cursor-pointer duration-200">
                    Returns
                  </li>
                </Link>
                <li className="text-sm font-normal hover:text-orange-500 cursor-pointer duration-200">
                  Shipping
                </li>
                <li className="text-sm font-normal hover:text-orange-500 cursor-pointer duration-200">
                  Term and Conditions
                </li>
              </ul>
            </div>
          </div>
          <div className="col-span-1 flex lg:justify-end mobile:mt-8">
            <div>
              <p className="text-md font-semibold">
                <span className="md:hidden">-</span> My Account
              </p>
              <ul className="text-base font-medium lg:mt-5 mobile:mt-3 flex flex-col gap-y-2">
                <Link href={"/"}>
                  <li className=" text-sm font-normal hover:text-orange-500 cursor-pointer duration-200">
                    Sign in
                  </li>
                </Link>
                <Link href={"/cart"}>
                  <li className="text-sm font-normal hover:text-orange-500 cursor-pointer duration-200">
                    View Cart
                  </li>
                </Link>
                <Link href={"/about"}>
                  <li className="text-sm font-normal hover:text-orange-500 cursor-pointer duration-200">
                    My Wishlist
                  </li>
                </Link>
                <li className="text-sm font-normal hover:text-orange-500 cursor-pointer duration-200">
                  Track My Order
                </li>
                <li className="text-sm font-normal hover:text-orange-500 cursor-pointer duration-200">
                  Help
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Rights Section */}

        <div className="flex justify-center md:hidden">
          <h3 className="text-sm font-normal">
            Auto Parts © 2024. All Rights Reserved
          </h3>
        </div>

        <div className="grid grid-cols-3 mobile:hidden md:grid">
          <div className="col-span-1 flex flex-row justify-start gap-3">
            <Image
              src="/icons/mastercard.png"
              alt="Description of your image"
              width={30}
              height={2}
              className=""
            />
            <Image
              src="/icons/visa.png"
              alt="Description of your image"
              width={30}
              height={30}
              className=""
            />
          </div>
          <div className="col-span-1 flex justify-center">
            <h3 className="text-sm font-normal">
              Auto Parts © 2024. All Rights Reserved
            </h3>
          </div>
          <div className="col-span-1 flex justify-end">
            {/* Social Media */}
            <div className="flex items-center gap-x-4">
              <a href="https://www.youtube.com/@reactjsBD" target="_blank">
                <span className="socialLink">
                  <BsYoutube />
                </span>
              </a>
              <a href="https://www.youtube.com/@reactjsBD" target="_blank">
                <span className="socialLink">
                  <BsGithub />
                </span>
              </a>
              <a href="https://www.youtube.com/@reactjsBD" target="_blank">
                <span className="socialLink">
                  <BsLinkedin />
                </span>
              </a>
              <a href="https://www.youtube.com/@reactjsBD" target="_blank">
                <span className="socialLink">
                  <BsFacebook />
                </span>
              </a>
              <a href="https://www.youtube.com/@reactjsBD" target="_blank">
                <span className="socialLink">
                  <BsReddit />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
