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
  const help =  ["Salicylic Acid" , "Niacinamide" , "Succinic Acid" , "Tree Tea Oil" , "Bakuchiol" ]
  const tags = ["Blemish Prone / Oily Skin" , "Reduce Black Heads & Breakout"   ]
  return (
    <>
      <Wrapper>
        <Layout>
          <SEO pageTitle="Anti Acne Gel" />
          <ProductDetailsArea
            tags={tags}
            title="Anti Acne Gel"
            img="/assets/img/shop/nag.png"
            category="FACE WASH"
            brand="Private Label"
            description="NAG eliminates acne without leaving any residues or traces. It helps in reducing excessive oil production from skin cells. It prevents irritation and skin discoloration.  It exfoliates the skin’s dead cells and encourages the production of new skin cells. "
            packaging="30gm Tube"
            price={589}
            
            help={help}
            descHead1="Ingredients"
      descDetail1="Salicylic Acid, Niacinamide, Succinic Acid, Tea Tree Oil, Bakuchiol, Citric Acid, Glycerin, Phenoxyethanol, Propylene Glycol, Cyclodextrin, Sodium Hydroxide, Methylcellulose, Hydroxypropyl, Sodium Chloride, Sodium Benzoate, Disodium EDTA, Dl water ,Fragnance."
            descHead2="How to use"
        descDetail2="Apply NAG Gel on acne scars and uniformly spread all over the affected area. Massage until the Gel is completely absorbed. Repeat this twice a day during AM & PM. skincare routine recommended to use for a minimum of 6 to 8 weeks."
                descHead3="Caution"
      descDetail3="External use only. When using this product keep of out of eyes.Keep out of reach of children. If product is swallowed, get back to medical. Store below 30°C."
/>
        </Layout>
      </Wrapper>
    </>
  );
};

export default Nas;
