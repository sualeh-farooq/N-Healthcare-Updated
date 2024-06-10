// import FooterFour from "@/layout/footer/footer-4";
// import HeaderTwo from "@/layout/header/header-two";
import React from "react";
import Wrapper from "@/layout/wrapper";
import Layout from "@/layout/layout";
import ProductDetailsArea from "@/common/product-detail";
import SEO from "@/components/seo";
import Shop from "@/shop";
const Nas = () => {
  const tags = ["Oil Free" , "Fragnance Free" , "Soothing" , "Colourant Free"  , "Anti Oxidant"];
  const help = ["Keep smooth & hydrate" , "Event out skin tone" ,"Minimize Dark Spots"  , "Birghten Up Skin"]
  return (
    <>
      <Wrapper>
        <Layout>
          <SEO pageTitle="NGS Glowing / Brightening Serum" />
          <ProductDetailsArea
            tags={tags}
            id={2}
            price={1710}
            originalPrice={1900}
         help={help}
         description="NGS Face Glowing serum is an effective tool for improving the overall appearance of the skin, reducing dark spots and uneven skin tone."
            title="NGS Glowing / Brightening Serum"
            img="/assets/img/shop/ngs.png"
            brand="Private Label"
            category="serum"

            packaging="30ml Bottle"
            descHead2="How to use"
            descDetail2="Cleanse skin using a face wash, Apply 3-4 drops of serum and spread evenly over the face and neck using gentle tapping motions. Use twice a day and follow up with moisturizing cream"
          descHead1="Ingredeints"
          descDetail1="L-Ascorbic Acid , Mandelic Acid , Hydluronic Acid , Nicotinamide, Kojic Acid , Alpha Arbutin, Vitamin E , Glycerin, Citric Acid , Butylene Glycol, Phenoxyethanol, TSEDTA, DI Water"
            descDetail3="For external use only, avoid contact with eyes, Keep out of the reach of the children"
        descHead3="Caution"
/>
        </Layout>
      </Wrapper>
    </>
  );
};

export default Nas;
