
import SEO from "@/components/seo"
import Layout from "@/layout/layout"
import Wrapper from "@/layout/wrapper"
import Home from "@/components/home"

const index = () =>{
  return (
  <Wrapper>
      <Layout>
      <SEO  pageTitle="Home Main" />
      <Home />
      </Layout>
    </Wrapper>
  )
}

export default index