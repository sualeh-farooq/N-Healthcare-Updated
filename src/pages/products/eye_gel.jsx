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
  const tags =  ["Reduces Line Wrinkles" , "Disappear Puffiness" ]
  const help = ["Reduces Line Wrinkles" , "Disappear Puffiness"  ]
  return (
    <>
      <Wrapper>
        <Layout>
          <SEO pageTitle="Dark Eye Circle Gel" />
          <ProductDetailsArea
            tags={tags}
            title="Dark Eye Circle Gel"
            img="/assets/img/shop/neg.png"
            brand="Private Label"
            category="FACE WASH"
            packaging="30gm Tube"
            help={help}
            price={900}

            description="NEG Dark Eye Circle Gel are beneficial in brightening skin around the eye, reducing signs of ageing and puffiness, and leaving the skin feeling nourished."
            descHead1="Ingredients"
          descDetail1="Glycerin, 1,3 Butylene Glycol, Hydroxypropyl, Methylcellulose, Phenethyl, Alcohol, Citric Acid, Hyaluronic Acid, Sodium Hyaluronate, Disodium EDTA, Ascorbyl, Glucosied, Aqua."
              descHead2="How to use"
        descDetail2="Cleanse face and apply gel, Take a pea size  amount of the product. Post cleansing & toning apply the gel gently to area under the eye. Use twice a day."
        descDetail3="External use only. When using this product keep out of eyes. Keep out of reach of children.If product is swallowed, 
        get medical help. Store below 30 C."
        descHead3="Caution"
 />
        </Layout>
      </Wrapper>
    </>
  );
};

export default Nas;
