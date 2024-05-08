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
  const help =  ["Retinol" , "Swertiamarin" , "Niacinamide" , "Matrixyl Synthe 6"  ]
  const tags = ["Visibly Firms Face & Nose in 1 Week" ,"Prevents Skin from aging" , "Controls Wrinkles & Fine Lines"]
  return (
    <>
      <Wrapper>
        <Layout>
          <SEO pageTitle="Anti Aging Cream" />
          <ProductDetailsArea
            tags={tags}
            title="Anti Aging Cream"
            img="/assets/img/shop/nac.png"
            brand="Private Label"
            category="FACE WASH"
            packaging="30gm Tube"
            description="NAC Anti-Aging Cream tightens skin and provides hydration. Adds skin radiance. Lessens signs of aging like fine lines, wrinkles, dark spots, under eye spots. Boosts your overall self-confidence. Prevents age spots and discoloration."
            help={help}
            price={100}

            descHead1="Ingredients"
descDetail1="Water, Glycerin, Dimethicone, Caprylic/Capric Tryglyceride, Fragnanc, Cyclopentasiloxane, Niacinamide, Polyacrylamide, Cyclohexasiloxane, Methyl Gluceth-20, EGMS, Cetostearyl Alcohol, Salicylic Acid, Ethyl Hexyl Glycerin, Nigella Sativa (Habbatus Sauda) Seed Oil, Aloe Barbadensis Leaf Extract, Sodium Hyaluronate, Melaleuca, Alternifolia, Tea Tree Leaf Oil, Phenoxyethanol."            
descDetail3="External use only. When using this product keep out of eyes. Keep out of reach of children.If product is swallowed, 
get medical help. Store below 30 C."
descHead3="Caution"
      descHead2="How to use"
      descDetail2="Apply on skin 15 minutes after cleansing, spread a thin layer evenly on the face including the area around the eyes. use 2 to 4 months for best result. Prevents free radical & wrinkles. Prevent sun damage & boast youth glow. It keeps your skin firmer, younger looking, unblemished and also reduces under eye dark circles."
/>
        </Layout>
      </Wrapper>
    </>
  );
};

export default Nas;
