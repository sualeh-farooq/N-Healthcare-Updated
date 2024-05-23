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
  const tags =  ["Smooth Texture" , "Reduce Look of Post Scar Size" , "Depth & Discoloration" ]
  const help = ["Smooth Texture" , "Reduce Look of Post Scar Size" , "Depth & Discoloration"  ]
  return (
    <>
      <Wrapper>
        <Layout>
          <SEO pageTitle="Scar Gel" />
          <ProductDetailsArea
            tags={tags}
            title="Scar Gel"
            img="/assets/img/shop/nsg.png"
            brand="Private Label"
            category="FACE WASH"
            packaging="30gm Tube"
            description="NSG Scar Gel improve scar texture, color, and overall appearance significantly, this refreshing gel softens, smooths and encourages healthy-looking skin. Scoop a small amount and gently massage into skin. NSG scar gel helps the body slow down production of collagen."
            help={help}
            price={500}
            descHead1="Ingredients"
        descDetail1="Allontoin, PEG 200, Alcohol, Carbomer (940), Allium Cepa (Onion) Red, Bulb Extract, Lecithin, Glycerin, Phenoxyethanol, Panthenol, Sodium Hyalorunate, Fragnance, Aqua (Purified), Butylen Glycol"
              descHead2="How to use"
      descDetail2="Wash scar area and pat dry. Gently apply thin layer of NSG Gel. The thin layer of NSG dries upwithin 4-5 minutes. Use twice daily"
      descHead3="Caution"
      descDetail3="External use only. When using this product keep out of eyes, Keep out of reach of children. If product is swallowed get medical help. Store below 30°C."
/>
        </Layout>
      </Wrapper>
    </>
  );
};

export default Nas;
