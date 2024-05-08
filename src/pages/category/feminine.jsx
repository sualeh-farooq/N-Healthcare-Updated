import React from "react";
import Banner from "@/contact/banner";
import Wrapper from "@/layout/wrapper";
import ContactForm from "@/contact/contact-form";
import Layout from "@/layout/layout";
import SEO from "@/components/seo";
import Feminine from "@/categories/feminine";

const ContactUs = () => {
  return (
    <>
      <Wrapper>
      <Layout>
      <SEO  pageTitle="Feminine Intimate Care Products" />
      <Feminine />
     </Layout>
     </Wrapper>
    </> 
  );
};

export default ContactUs;
