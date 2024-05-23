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
  const tags =  ["Protect & Hydrate" , "For Dewy, Primed Skin" , "Broad Spectrum SPF +++ UVA & UVB"]
  const help = ["Protect & Hydrate" , "For Dewy, Primed Skin" , "Broad Spectrum SPF +++ UVA & UVB"  ]
  return (
    <>
      <Wrapper>
        <Layout>
          <SEO pageTitle="Sunblock Gel" />
          <ProductDetailsArea
            tags={tags}
            title="Sunblock Gel"
            img="/assets/img/shop/nsb.png"
            brand="Private Label"
            packaging="30gm Tube"
            category="FACE WASH"
            help={help}
            price={1500}
            description="NSB Sunblock Gel are used to protect the skin from the harmful effects of the sun. It helps to prevent sunburn and premature aging (such as wrinkles, leathery skin)."
            descHead1="Ingredients"
        descDetail1="Methoxycinnamate Polyglyceryl-6, Methoxycrlene, Tromethamine, Aqua, Caprylhdyroxamic Acid, Crosspolymer, Trisodium Edta, (Sunflower), Sprout-Extract, Phenoxyethanol, Fragnance."
                descHead2="How to use"
              descDetail2="Apply NSB Liberally and evenly 15 minutes before sun exposure reapply at least every 2 hours. Use a water-resistant sunscreen if swimming or sweating sun protection measures. Spending time in the sun increase your risk of skin cancer and early skin aging. To decrease this risk, regularly use a sunscreen with a board spectrum measures including."
      descHead3="Caution"
      descDetail3="External use only. Do not use on damage or broken skin. When using this product keep of out of eyes. Rinse with water to remove, Stop use and ask a doctor if rash occurs. Keep out of reach of children. If product is swallowed, get back to medical. Store below 30°C."
/>
        </Layout>
      </Wrapper>
    </>
  );
};

export default Nas;
