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
  const tags =  ["3X Stronger Hair" , "For All Type of Hairs" ]
  const help = ["3X Stronger Hair" , "For All Type of Hairs" ]
  return (
    <>
      <Wrapper>
        <Layout>
          <SEO pageTitle="Anti HAIR FALL Shampoo" />
          <ProductDetailsArea
            tags={tags}
            id={9}
            title="Anti Hair Fall Shampoo"
            img="/assets/img/shop/nhf.png"
            brand="Private Label"
            description="NHF Anti-hair fall shampoos often have antifungal and anti-inflammatory ingredients that soothe your scalp. They prevent dandruff that may be clogging your hair follicles and causing hair fall. And when your scalp becomes healthy and clean, hair growth will soon ensue."
            packaging="120ml Tube"
            category="haircare"
            descHead3="Caution"
            descDetail3="External use only. When using this product keep out 
            of eyes. Keep out of reach of 
            children. If product is swallowed, 
            get medical help. 
            Store below 30 C"
            help={help}
            descHead1="Ingredients"
        descDetail1="Climbazole, Caffeine, Betaine, Isethionate, Capryloyl, Cocamide, MEA, Polyquaterniun-7, Sodium Lauroyl sarcosinate, Citric Acid , Disodium, EDTA , Diazolibinyl Urea, Silicone Quaternium-20, Propylene Glycol, Glycerin, Carbomer, Ceramide 1, Sodium Chloride, Phenoxyethanol, Aqua, Fragnance."
            descDetail2="Apply the NHF Anti Hair fall shampoo on scalp and hair strands. Massage gently with fingers or use a wide mouth scalp comb, leave on for 2 to 3 minutes & Rinse with lukewarm or cold water"
            descHead2="How to use"
/>
        </Layout>
      </Wrapper>
    </>
  );
};

export default Nas;
