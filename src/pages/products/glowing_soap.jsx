// import FooterFour from "@/layout/footer/footer-4";
// import HeaderTwo from "@/layout/header/header-two";
import React from "react";
import Banner from "@/contact/banner";
import Wrapper from "@/layout/wrapper";
import ContactForm from "@/contact/contact-form";
import Layout from "@/layout/layout";
import ProductDetailsArea from "@/common/product-detail";
import SEO from "@/components/seo";
import AddToCartButton from "@/components/addToCart";
import Shop from "@/shop";
const Nas = () => {
  const tags = ["Improved Formula", "Revit a Glow Skin Rescue", "Skin Replenish", "24hrs Nourishment"]
  const help = ["Skin Replenish", "Hypoallergenic Fragnance", "24hrs Nourishment"]
  return (
    <>
      <Wrapper>
        <Layout>
          <SEO pageTitle="Glowing Soap" />
          <ProductDetailsArea
            tags={tags}
            id={1}
            title="Glowing Soap"
            description="NBG Glowing Soap works by removing melanin from your skin's epidermal layer, making it look whiter and fairer than other areas on the body."
            img="/assets/img/shop/nbg.png"
            category="soap"
            brand="Private Label"
            packaging="90gm Bar"
            help={help}
            descHead1="Ingredients"
            descDetail1="Glutathione, Arbutin, Kojic Acid, Vitamin E, 
      Lauric Acid, SL Isethionate, Sodium 
      Stearate, Sodium Chloride, Water, 
      TSEDTA, Cocamido Propyl Betain, Sodium
      Palmitate, SLS, Fragrance"
            descHead2="How to use"
            descDetail2="Wet body & face with water , 
      Apply bar generously ,
      Work up a lather & Rinse of 
      throughly with water ."

            descHead3="Caution"
            descDetail3="Store in dry and cool place."
          />
        </Layout>
      </Wrapper>
    </>
  );
};

export default Nas;
