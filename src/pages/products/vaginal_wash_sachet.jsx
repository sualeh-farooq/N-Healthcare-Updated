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
  const tags = ["Daily Hygiene" , "Post Partum" , "Vaginal Dryness", "Foul Odour" ];
  const help = ["Long Lasting for Active Lifestyles"  , "Up to 12 Hours of Freshness" , "Perfect pH to Match your intimate Skin" , "100% Soap Free" ]
  return (
    <>
      <Wrapper>
        <Layout>
          <SEO pageTitle="Vaginal Wash " />
          <ProductDetailsArea
            tags={tags}
            title="Vaginal Wash (Sachets)"
            img="/assets/img/shop/nvw.png"
            description="NVW vaginal wash helps balance vaginal pH level and helps your vagina to stay healthy. It helps in preventing bacterial or fungal infection in the vaginal area. It also supports the growth of good bacteria, which is important for a healthy and fresh vagina."
            brand="Private Label"
            currentProductId = "2"

            packaging="Pack of 7+1 Sachets - Box of 7ml"
            category="feminine"
            help={help}
            descHead1="Ingredients"
        descDetail1="Lactic Acid, Citric Acid, Aloe Bardensis Leaf Extract, Calendula Officinalis Flower Extract, Glycerin, Sodium Lactate, Cocamidopropyl Betaine, Tetrasodium EDTA, Phenoxyethanol, Sodium Chloride, Benzyl Alcohol, DI Water, Fragnance."
            descHead2="How to use"
            descHead3="Caution"
            descDetail3=" External use only. When using 
            this product keep out of eyes. Keep out of 
            reach of children. If product is swallowed, 
            get medical help. Store below 30 C"
      descDetail2="Apply external vaginal area with wet warm wash cloth, shower puff or hand leave for 3-5 minute and rinse throughly with warm water. Repeat if desired. Safe to use."
/>
        </Layout>
      </Wrapper>
    </>
  );
};

export default Nas;
