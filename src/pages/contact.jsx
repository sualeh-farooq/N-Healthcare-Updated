// import FooterFour from "@/layout/footer/footer-4";
// import HeaderTwo from "@/layout/header/header-two";
import React from "react";
import Banner from "@/contact/banner";
import Wrapper from "@/layout/wrapper";
import ContactForm from "@/contact/contact-form";
import Layout from "@/layout/layout";
import SEO from "@/components/seo";

const ContactUs = () => {
  return (
    <>
      <Wrapper>
      <Layout>
      <SEO  pageTitle="Contact Us" />
      <ContactForm />
     </Layout>
     </Wrapper>
    </> 
  );
};

export default ContactUs;
