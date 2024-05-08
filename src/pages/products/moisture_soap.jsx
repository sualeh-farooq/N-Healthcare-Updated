// import FooterFour from "@/layout/footer/footer-4";
// import HeaderTwo from "@/layout/header/header-two";
import React from "react";
import Banner from "@/contact/banner";
import Wrapper from "@/layout/wrapper";
import ContactForm from "@/contact/contact-form";
import Layout from "@/layout/layout";
import ProductDetailsArea from "@/common/product-detail";
import SEO from "@/components/seo";
import Shop from "@/shop";
const Nas = () => {
  const tags = ["Improved Formula", "Soften Dry Skin", "Rough Skin", "Hypoallergenic Fragnance", "24hrs Nourishment"]
  const help = ["Helps Restore skin natural moisture", "Hypoallergenic Fragnance", "24hrs Nourishment"]
  return (
    <>
      <Wrapper>
        <Layout>
          <SEO pageTitle="Moisturizing Soap" />
          <ProductDetailsArea
            tags={tags}
            id={2}
            title="Moisturizing Soap"
            img="/assets/img/shop/nbm.png"
            description="NBM Soap nourish the skin and protect it from harm. NBM is A good moisturizing soap that leave the skin clean, soft and nourished. NBM Soap can actively hydrate the skin, and the velvety foam can keep you feeling pampered in the shower. Like their liquid counterpart, NBM soap can address multiple skin conditions."
            category="soap"
            brand="Private Label"
            packaging="90gm Bar"
            help={help}
            descHead1="Ingredients"
            descDetail1="Milk Protein, Shea Butter, Almond Oil, 
        Virgin Coconut Oil, Lauric Acid, SL
        Isethionate, Sodium Stearate, Sodium 
        Chloride, Water, TSEDTA, Cocamido Propyl 
        Betain, Sodium Palmitate, SLS, Fragrance."
            descHead2="How to use"
            descDetail2="Wet the body & face with water ,
        Apply bar generously ,
        Work up a lather & Rinse of 
        throughly with water."
            descHead3="Caution"
            descDetail3="Store in dry and cool place."
          />
        </Layout>
      </Wrapper>
    </>
  );
};

export default Nas;
