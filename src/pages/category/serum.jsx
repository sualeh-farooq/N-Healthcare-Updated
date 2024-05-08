import React from "react";
import Banner from "@/contact/banner";
import Wrapper from "@/layout/wrapper";
import ContactForm from "@/contact/contact-form";
import Layout from "@/layout/layout";
import SEO from "@/components/seo";
import Serums from "@/categories/serums";
const ContactUs = () => {
  return (
    <>
      <Wrapper>
        <Layout>
          <SEO pageTitle="Skin Care Serums" />
          <Serums />
        </Layout>
      </Wrapper>
    </>
  );
};

export default ContactUs;
