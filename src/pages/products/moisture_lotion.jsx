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
  const tags = [
    "Dermatologist Tested",
    "Allergen Free Fragnance",
    "Eczema",
    "Psoriasis",
  ];
  const help = [
    "Fortified with Ceramide",
    "Natural Enzyme Papain",
    "Hyalluronic Acid",
  ];
  return (
    <>
      <Wrapper>
        <Layout>
          <SEO pageTitle="NBM Moisturizing Lotion" />
          <ProductDetailsArea
            tags={tags}
            description="NML is the best eczema lotions and creams provide topical therapy that helps restore the skin's barrier, lock in moisture, and reduce inflammation. NML moisturizer should always be applied within three minutes of getting out of the bath or shower."
            title="NBM Moisturizing Lotion"
            img="/assets/img/shop/nml.png"
            brand="Private Label"
            packaging="100ml Tube"
            category="lotion"
            price={360}
            originalPrice={450}
            help={help}
            descHead1="Ingredients"
            descDetail1="Aqua, EAU, Glycerin, Caprylic / Capric Triglyceride, Cetearyl Alcohol, Cetyl Alcohol, Pottasium, Phosphate, Ceramide, AP, Carbomer, Dimethicone, Ceteareth-20, Phenoxyethanol, Cholesterol, Diasodium EDTA, Dipotassium Phosphate, Hydrolyzed Hyaluronic Acid , Phytosphingosine, Polysorbate 20, Polyglyceryl-3, Disostearate "
            descHead2="How to use"
            descDetail2="Squeeze a little more than a pea-sized amount into palm. Warm up moisturizer in hands. Apply to face / skin using gentle circular motions"
            descHead3="Caution"
            descDetail3="External use only. 
When using this product keep out 
of eyes. Keep out of reach of 
children.If product is swallowed, 
get medical help. Store below 30 C"
          />
        </Layout>
      </Wrapper>
    </>
  );
};

export default Nas;
