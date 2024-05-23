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
  const tags =  ["Remove Excess Oil" , "Healthier Looking Skin" , "For all Type of Skins" , "Reveal Younger" ]
  const help = ["Remove Excess Oil" , "Healthier Looking Skin" , "For all Type of Skins" ]
  return (
    <>
      <Wrapper>
        <Layout>
          <SEO pageTitle="Glowing Face Wash" />
          <ProductDetailsArea
            tags={tags}
            title="Glowing Face Wash"
            img="/assets/img/shop/ngw.png"
            brand="Private Label"
            packaging="100ml Tube"
            description="NGW Glowing Face Wash Helps to deep cleanse the skin & removes all the skin impurities and tan. Also Helps to give a clear, radiant and even complexion. Leaves skin clean, healthy and glowing with its face whitening properties."
            help={help}
            category="FACE WASH"
            price={800}
            descHead1="Ingredients"
            descDetail1="Aqua, Sodium Laureth Sulphate, Glycerin, Sodium Chloride, Cocamidopropyl Betaine, Laureth-3, Citric Acid, Neem Extract, Phenoxyethanol, Parfum, Sodium Lauroyl Sarcosinate, Styrene / Acrylates Copolymer, Disodium EDTA, Niacinamide, Potassium Sorbate, Vitamin(E) Beeds, Licorice Exract, Papaya Green Extract, Cucumber Extract. "
            descHead2="How to use"
            descHead3="Caution"
            descDetail3="External use only. When using this product keep out of eyes. Keep out of reach of children.If product is swallowed, 
            get medical help. Store below 30 C."
        descDetail2="Use in morning and evening. Moisten hands and face with water.Squeeze a small amount into your hand and activate to release the foamy lather by adding water. Rinse throughly with cold or warm water."
  />
        </Layout>
      </Wrapper>
    </>
  );
};

export default Nas;
