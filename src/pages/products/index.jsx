// import FooterFour from "@/layout/footer/footer-4";
// import HeaderTwo from "@/layout/header/header-two";
import React from "react";
import Banner from "@/contact/banner";
import Wrapper from "@/layout/wrapper";
import ContactForm from "@/contact/contact-form";
import Layout from "@/layout/layout";
import SEO from "@/components/seo";
import Shop from "@/shop";
const ContactUs = () => {
  return (
    <>
      <Wrapper>
        <Layout>
          <SEO pageTitle="All Products" />
          <Shop />
        </Layout>
      </Wrapper>
    </>
  );
};

export default ContactUs;
