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
  const tags =  ["Improved Formula" , "For Acne Prone Skin" , "Keep off acne"  ,"24hrs Nourishment"  ]
  const help = ["Keep off acne" ,"Controls acne relapse" , "24hrs Nourishment"]
  return (
    <>
      <Wrapper>
        <Layout>
          <SEO pageTitle="NBA Anti Acne Soap" />
          <ProductDetailsArea
            tags={tags}
            title="NBA Anti Acne Soap"
            img="/assets/img/shop/nba.png"
            description="NBA Anti Acne Soap Fights acne effectively and prevents recurrence. Soothes skin irritation. Nourishes the body and provides emolliency to the skin. Provides soft, smooth, and supple skin. "
            brand="Private Label"
            packaging="90gm Bar"
            category="soap"
            price={270}
            originalPrice={300}
            help={help}
            descHead1="Ingredients"
        descDetail1="Vitamin E, Allantion, Tea Tree Oil, Salicylic 
        Acid, Triclosan, Lauric Acid, SL Isethionate, 
        Sodium Stearate, Sodium Chloride, Water, 
        TSEDTA, Cocamido Propyl Betain, Sodium
        Palmitate, SLS, Fragrance."      
        descHead2="How to use"
        descDetail2="Wet the skin of affected area ,  
        Apply bar on your face / Acne prone area , 
        Massage it in a circular motion , 
        Rinse of throughly with water ." 
        descHead3="Caution"
        descDetail3="Store in dry and cool place."
/>
        </Layout>
      </Wrapper>
    </>
  );
};

export default Nas;
