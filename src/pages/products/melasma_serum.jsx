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
  const tags = ["Oil Free" , "Fragnance Free" , "Soothing" ,"Colourant Free" ,  "Anti Oxidant"];
  const help = ["Reduce dark spot"  , "Uneven skin tone" , "Blemishes and Acne spot"]
  return (
    <>
      <Wrapper>
        <Layout>
          <SEO pageTitle="NMS Anti Melasma Serum" />
          <ProductDetailsArea
            tags={tags}
            id={3}
            originalPrice={2000}
              price={1600}
            title="NMS Anti Melasma Serum"
            img="/assets/img/shop/nms.png"
            description="NMS Melasma Serum can help lighten the skin in many ways. It includes blocking pigment formation, decreasing melanin production, removing dark patches, and promoting cell turnover."
            brand="Private Label"
            packaging="30ml Bottle"
            category="serum"
            help={help}
            descHead1="Ingredients"
            descDetail1="Glycolic Acid, L-Ascorbic Acid , Hyaluronic Acid, Glutathione, Nicotinamide, Alpha Arbutin, Vitamin E, Glycerin, Citric Acid, Phenoxyethanol, TSEDTA, DI Water"
            descHead2="How to use"
            descDetail2="Apply 2 to 3 drop of your serum evenly on clean skin with fingertips and let it sink in the skin. For the best result use twice daily on the affected skin area. Always follow with a SPF in day time"
            descHead3="Caution"
            descDetail3="For external use only, avoid contact with eyes. Keep out of the reach of the children"
/>
        </Layout>
      </Wrapper>
    </>
  );
};

export default Nas;
