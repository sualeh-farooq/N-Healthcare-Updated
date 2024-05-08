import React from "react";
import Banner from "@/contact/banner";
import Wrapper from "@/layout/wrapper";
import ContactForm from "@/contact/contact-form";
import Layout from "@/layout/layout";
import SEO from "@/components/seo";
import Creamss from "@/categories/cleansers";

const ContactUs = () => {
  return (
    <>
      <Wrapper>
      <Layout>
      <SEO  pageTitle="Face Washes & Creams" />
      <Creamss />
     </Layout>
     </Wrapper>
    </> 
  );
};

export default ContactUs;
