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
  const tags = ["Oil Free" , "Fragnance Free" , "Soothing" ,"Colourant Free" ,  "Anti Oxidant"];
  const help = ["Reduce & treats acne"  , "Constricts open pores" , "Maintains oil balance"]
  return (
    <>
      <Wrapper>
        <Layout>
          <SEO pageTitle="Anti Acne Serum" />
          <ProductDetailsArea
            tags={tags}
            id={1}
            price={1200}
            title="Anti Acne Serum"
            img="/assets/img/shop/naa.png"
            description="NAA Acne Serum contains salicylic acid, which prevents bacteria growth on the skin surface in order to treat and reduce acne and breakouts. NAA Acne Serum is also effective against enlarged pores and oily skin, and it is highly suitable for small areas with acne or breakouts."
            brand="Private Label"
            category="serum"
            packaging="30ml Bottle"
            help={help}
            descHead1="Ingredients"
            descDetail1="Salicylic Acid , Azelaic Acid, HyaluronicAcid, Nicotinamide, L-Ascorbic Acid, Kojic Acid, Mandelic Acid, Citric Acid, Vitamin E, Glycerin, Butylene, Glycol, Phenoxyethanol, TSEDTA, DI Water"
            descDetail2="Use very little of this serum-concentrate on the target area. Take a drop and press it on the areas with acne. Dab lightly to allow the serum to get soaked into the skin. Repeat for every spot/acne scar. Do not apply all over your skin. Use twice daily under your moisturizer"
            descHead2="How to use"
            descHead3="Caution"
            descDetail3="For external use only, avoid contact with eyes. Keep out of the reach of the children"
/>
        </Layout>
      </Wrapper>
    </>
  );
};

export default Nas;
