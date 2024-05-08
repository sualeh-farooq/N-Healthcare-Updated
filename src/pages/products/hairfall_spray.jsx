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
  const help =  ["Caffeine","Gluconolactone" , "Bergamia Peel Oil"]
  const tags = ["Reduce Thinning of Hair Fall" , "Increase Hair Density" , "Stimulates Hair Cells for Hair Growth", "Triple Action Complex For Visible Results"  ]
  return (
    <>
      <Wrapper>
        <Layout>
          <SEO pageTitle="Hair Fall Spray" />
          <ProductDetailsArea
            tags={tags}
            title="Hair Fall Spray"
            img="/assets/img/shop/ngp.png"
            brand="Private Label"
            category="haircare"
            packaging="60ml Spray"
            description="NGP Anti Hair Fall Spray treatment stimulates new hair growth and increases volume and substance. This formulation not only works to prevent hair loss but also focuses on delaying the premature ageing of hair follicles. Both men and women can use this spray on a daily basis to help prevent hair fall."
            help={help}
            descHead1="Ingredients"
      descDetail1="Propylene Glycol, Aqua, Butylene, Glycol, Glycerin , Polysorabte 80, Hyderolyzed, Jojoba Esters, Citric Acid, Acetyl L-Tyrosine, Hydrolyzed Soy Protein, Polyquaternium-11, PEG-12, Dimethicone, Calcium Pantothenate, Zinc Gluconate, Niacinamide, Disodium Succinate, Biotin, PPG-26, Hydrogenated, Castor Oil, Apigenin, Olceanlic Acid, Biotinoyl, Tripetide-1 Lactic Acid, Aloe Barbadensis (Aloe Vera) Leaf Extract, Allantoin, Lecithin, Retinyl Palmitate (Vitamin A), Tocopheryl Acetate (Vitamin E), Ascorbyl Palmitate (Vitaminc C), Panthenol, Phenoxyethanol, Sodium Benzoate, (methyl-n-vanillyl nonenamide)."
            descHead2="How to use"
              descDetail2="Apply Spray to the scalp, once daily. directly to the area of hair thinning massage into scalp with tips of finger for several minutes. Wash hands with soap and water after use. Leave on scalp for atleast 4 hours, but can be left on indefinitely."
      descHead3="Caution"
      descDetail3="External use only. When using this product keep out of eyes, Keep out of reach of children."
/>
        </Layout>
      </Wrapper>
    </>
  );
};

export default Nas;
