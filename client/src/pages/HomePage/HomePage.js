import React from "react";
import Products from "../HomePage/MainProducts/Products";
import Footer from "../../components/Footer/Footer";
import CarouselProduct from "../../components/Header/CarouselProduct";
import Drone3DAnimated from "./Drone3D/Drone3DAnimated";
export default function HomePage() {
  return (
    <div>
      <CarouselProduct />
      <Products />
      <Drone3DAnimated/>
      <Footer />
    </div>
  );
}
