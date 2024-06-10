
import { useRouter } from 'next/router';
// import ThankYouPage from '../../components/ThankYouPage';
import ThankYouPage from '../thanks';
import Layout from "@/layout/layout"
import Wrapper from "@/layout/wrapper"
import { Row , Col } from 'reactstrap';
import { useSelector } from 'react-redux';


export default function ConfirmationPage  ()  {
  const router = useRouter();
  const { id } = router.query;
  console.log(id)

  const orderNumber = id;
  const orderStatus = "Processing"; 


  


  return (
    <>
        <Wrapper>
      <Layout>
        <div className="container mt-5 pb-100 pt-170 cart-window">
          <Row>
          <Col  >
         <ThankYouPage   orderNumber={orderNumber} orderStatus={orderStatus} />
          </Col>
            </Row>
            </div>
            </Layout>
            </Wrapper>

    </>
  );
};

;
