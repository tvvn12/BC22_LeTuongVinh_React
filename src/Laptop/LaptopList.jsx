import React from "react";
import Laptop from "./Laptop";

export default function LaptopList() {
  return (
    <section id="laptop" className="container-fluid pt-5 pb-5">
      <h1 className="text-dark text-center">BEST LAPTOP</h1>
      <div className="row justify-content-center">
      <Laptop name="Asus ROG" desc="Ngon bổ" img="https://www.beostore.vn/images/product/product_1648886261_theme_gallery_iphone-13-pro-max-blue-select.png"/>
      <Laptop name="Asus ROG" desc="Ngon bổ" img="https://www.beostore.vn/images/product/product_1648886261_theme_gallery_iphone-13-pro-max-blue-select.png"/>
      <Laptop name="Asus ROG" desc="Ngon bổ" img="https://thenewxgear.com/wp-content/uploads/2022/01/Scar-15-G533Z-8_compressed-600x600.jpg"/>

      </div>
    </section>
  );
}
