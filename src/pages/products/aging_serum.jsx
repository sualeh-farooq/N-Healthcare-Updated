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
  const tags = ["Oil Free" , "Fragnance Free" , "Soothing" , "Colourant Free" , "Anti Oxidant"];
  const help = ["Helps boast collagen & Elastin synthesis" , "Helps improves fine lines & wrinkles" , "Helps tighten & tone with skin"]
  return (
    <>
      <Wrapper>
        <Layout>
          <SEO pageTitle="NAS Anti Aging Serum" />
          <ProductDetailsArea
            tags={tags}
            id={6}
            price={1520}
            originalPrice={1900}
            help={help}
            title="NAS Anti Aging Serum"
            category="serum"
            img="/assets/img/shop/nas.png"
            brand="Private Label"
            packaging="30ml Bottle"
            descHead1="Ingredients"
            descDetail1="Retinol, Hyaluronic Acid, Jojoba Oil, Nicotinamide, BAKUCHIOL, Citric Acid , Glyceri, Vitamin E, Butylene Glycol, Phenoxyethanol, TSEDTA, DI Water "
            descHead2="How to Use"
            descDetail2="Use few drops of this serum-concentrate on the targeted area and press it on the required areas with. Dab lightly to allow the serum to get soaked into the skin. Do not apply all over your skin. Use twice daily for best results"
            descHead3="Caution"
            descDetail3="For external use only, avoid contact with eyes. Keep out of the reach of the children"
            description="NAS anti-aging serum support aging gracefully, such as fine lines, wrinkles, and age spots, with the goal of improving the appearance of your skin."
          />
        </Layout>
      </Wrapper>
    </>
  );
};


// descHead3="How to Use"
// descDetail3="Take a few drops of the serum on to the palm of your hands and apply carefully through out the cleansed face , when heading out in the sun"
// descHead2="Caution

export default Nas;
