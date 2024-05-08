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
  const help =  ["Gkycolic Acid" , "Hyaluronic Acid" , "Vitamin C" , "Bakuchiol" , "Alpha Arbutin" ]
  const tags = ["Melasma / Pores Area" , "Reduces Blemishes" , "Lightens Skin Tone" , "Restore skin's youthfulness"   ]
  return (
    <>
      <Wrapper>
        <Layout>
          <SEO pageTitle="Glowing Cream" />
          <ProductDetailsArea
            tags={tags}
            category="FACE WASH"
            title="Glowing Cream"
            img="/assets/img/shop/ngc.png"
            brand="Private Label"
            description="NGC Glowing cream can decrease dark spots on the skin caused by sun damage, aging, and hormonal changes."
            packaging="30gm Tube"
            help={help}
            price={900}

            descHead1="Ingredients"
      descDetail1="L-Glutathione, TXA, SAP, Vitamin E, Shea Butter, Kojic Acid, Peptides, Phenoxyethanol, Nicotinamide, EDTA, Polawax, Cetomacrogol, BHT , EGMS, Cetosteryl Alcohol, Aqua, Fragnance."
            descHead2="How to use"

  descDetail2="Apply on the affected skin area after proper cleansing by gently tapping it on the skin. with a circular motion, evenly spread the NGC , Cream and allow your skin to absorb it. For best results apply in the morning and evening followed by a sunscreen in the daytime."            descHead3="Caution"
      descDetail3="External use only. When using this product keep of out of eyes.Keep out of reach of children. If product is swallowed, get back to medical. Store below 30°C."
/>
        </Layout>
      </Wrapper>
    </>
  );
};

export default Nas;
