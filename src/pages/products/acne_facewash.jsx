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
  const tags =  ["Blemish Prone" , "Oily Skin" , "Reduce Black Head & Breakout" ]
  const help = ["Blemish Prone" , "Oily Skin" , "Reduce Black Head & Breakout" ]
  return (
    <>
      <Wrapper>
        <Layout>
          <SEO pageTitle="Anti Acne Face Wash" />
          <ProductDetailsArea
            tags={tags}
            id={1}
            title="Anti Acne Face Wash"
            img="/assets/img/shop/naw.png"
            description="NAW face wash can get rid of dirt and oil that clog pores and lead to acne. It can also help break down makeup and other cosmetics that could lead to breakouts if left on the skin."
            category="FACE WASH"
            brand="Private Label"
            packaging="100ml Tube"
            price={400}
            help={help}
            descHead1="Ingredients"
            descDetail1="Mays Starch / Corn Starch, Sodium Laureth Sulphate, Parfum / Fragnance, PEG-30, Salicylic Acid, Sodium Hydroxide, Phenoxyethanol, Ascorbyl Aloe Vera, Glucoside, Tetrasodium EDTA, Citrus Limon, Fruit Extract, Sodium Benzoate, TEA, Neem Extract."
            descHead2="How to use"
            descHead3="Caution"
            descDetail3="External use only. When using this product keep out of eyes. Keep out of reach of children.If product is swallowed, 
            get medical help. Store below 30 C."
          descDetail2="Wet your face and neck squeeze a small amount of face wash on your palm. Apply and massage for 30 to 60 seconds on your face using circular motions with your fingers. wash off with plenty of plain water. Dab your skin dry with soft towel."
    />
        </Layout>
      </Wrapper>
    </>
  );
};

export default Nas;
