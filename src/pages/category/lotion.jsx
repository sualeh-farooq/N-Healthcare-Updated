import React from "react";
import Banner from "@/contact/banner";
import Wrapper from "@/layout/wrapper";
import ContactForm from "@/contact/contact-form";
import Layout from "@/layout/layout";
import SEO from "@/components/seo";
import Lotion from "@/categories/lotion";
const ContactUs = () => {
  return (
    <>
      <Wrapper>
      <Layout>
      <SEO  pageTitle="Skin Lotions" />
      <Lotion />
     </Layout>
     </Wrapper>
    </> 
  );
};

export default ContactUs;
