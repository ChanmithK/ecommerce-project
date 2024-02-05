import React from "react";
import NavbarMenu from "../common/navbar-menu";

const Navbar = () => {
  const navItems = [
    { label: "Home", link: "/" },
    {
      label: "CATEGORIES",
      link: "pages/shop",
      isGroup: true,
      categories: [
        {
          label: " Headlights & Lighting",
          link: "#",
          subcategories: [
            { label: "Headlights", link: "#" },
            { label: "Tail Lights", link: "#" },
            { label: "Fog Lights", link: "#" },
            { label: "Turn Signals", link: "#" },
            { label: "Switches & Relays", link: "#" },
            { label: "Corner Lights", link: "#" },
          ],
        },
        {
          label: "Brakes & Suspension",
          link: "#",
          subcategories: [
            { label: "Brake Discs", link: "#" },
            { label: "Wheel Hubs", link: "#" },
            { label: "Air Suspension", link: "#" },
            { label: "Ball Joints", link: "#" },
          ],
        },
        {
          label: "Interior Parts",
          link: "#",
          subcategories: [
            { label: "Floor Mats", link: "#" },
            { label: "Gauges", link: "#" },
            { label: "Consoles & Organizers", link: "#" },
            { label: "Mobile Electronics", link: "#" },
          ],
        },
        // Add more subcategories as needed
      ],
    },
    { label: "Headlights & Lighting", link: "#" },
    { label: "Brakes & Suspension", link: "#" },
    { label: "Engine & Drivetrain", link: "#" },
    { label: "Interior Parts", link: "#" },
    { label: "BLOG", link: "pages/shop" },
    { label: "HOT OFFERS", link: "#" },
  ]; 

  return (
    <div className="hidden lg:block">
      <div className="container">
        <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-blackish">
          <NavbarMenu navItems={navItems} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
