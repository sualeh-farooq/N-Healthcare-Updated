

// // import React from 'react';
// // import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

import { Container } from "reactstrap";

// // // Create styles
// // const styles = StyleSheet.create({
// //   page: {
// //     flexDirection: 'row',
// //     backgroundColor: '#E4E4E4'
// //   },
// //   section: {
// //     margin: 10,
// //     padding: 10,
// //     flexGrow: 1
// //   }
// // });

// // // Create Document Component
// // const MyDocument = () => (
// //   <Document>
// //     <Page size="A4" style={styles.page}>
// //       <View style={styles.section}>
// //         <Text>Section #1</Text>
// //       </View>
// //       <View style={styles.section}>
// //         <Text>Section #2</Text>
// //       </View>
// //     </Page>
// //   </Document>
// // );

// // export default MyDocument
// import React from 'react';
// import { Container } from 'reactstrap';

// const Invoice = () => {
//   return (
//    <Container fluid>
//      <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '100%', margin: '0 auto' }}>
//       <div style={{ backgroundColor: '#f2f2f2', padding: '20px', borderBottom: '1px solid #ccc' }}>
//         <h2 style={{ margin: '0', color: '#333' }}>Invoice</h2>
//         <p style={{ margin: '5px 0', color: '#666' }}>Date: June 8, 2024</p>
//         <img width="250px" height="50px" src="/assets/img/logo/nlogo.png" alt="logo" />
//       </div>
//       <div style={{ padding: '20px' }}>
//         <table style={{ width: '100%', borderCollapse: 'collapse' }}>
//           <thead>
//             <tr>
//               <th style={{ borderBottom: '1px solid #ccc', padding: '8px', textAlign: 'left' }}>Description</th>
//               <th style={{ borderBottom: '1px solid #ccc', padding: '8px', textAlign: 'left' }}>Quantity</th>
//               <th style={{ borderBottom: '1px solid #ccc', padding: '8px', textAlign: 'left' }}>Price</th>
//               <th style={{ borderBottom: '1px solid #ccc', padding: '8px', textAlign: 'left' }}>Total</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td style={{ borderBottom: '1px solid #ccc', padding: '8px' }}>Item 1</td>
//               <td style={{ borderBottom: '1px solid #ccc', padding: '8px' }}>2</td>
//               <td style={{ borderBottom: '1px solid #ccc', padding: '8px' }}>$10.00</td>
//               <td style={{ borderBottom: '1px solid #ccc', padding: '8px' }}>$20.00</td>
//             </tr>
//             <tr>
//               <td style={{ borderBottom: '1px solid #ccc', padding: '8px' }}>Item 2</td>
//               <td style={{ borderBottom: '1px solid #ccc', padding: '8px' }}>1</td>
//               <td style={{ borderBottom: '1px solid #ccc', padding: '8px' }}>$15.00</td>
//               <td style={{ borderBottom: '1px solid #ccc', padding: '8px' }}>$15.00</td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//       <div style={{ padding: '20px', textAlign: 'right' }}>
//         <p style={{ margin: '5px 0' }}>Subtotal: $35.00</p>
//         <p style={{ margin: '5px 0' }}>Tax (10%): $3.50</p>
//         <h3 style={{ margin: '5px 0', color: '#333' }}>Total: $38.50</h3>
//       </div>
//     </div>
//    </Container>
//   );
// }

// export default Invoice;

export default function Invoice({ customer, products, total, orderNo }) {
    // Check if customer object exists and properties are not null
    const customerName = customer && customer.f_name ? customer.f_name : "";
    const customerNumber = customer && customer.number ? customer.number : "";
    const customerEmail = customer && customer.email ? customer.email : "";
    const customerAddress = customer && customer.address ? customer.address : "";
    const deliveryCharges = customer && customer.delivery_charges ? customer.delivery_charges : 0;
  
    return (
      <>
        <Container>
          <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '100%', margin: '0 auto', marginTop: '50px !important' }}>
            <div style={{ borderBottom: '1px solid lightgray', paddingBottom: '10px', marginBottom: '10px', marginTop: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }} >
              <h4 className="d-none d-lg-block d-xl-block" style={{ margin: '0', color: '#333' }}>Invoice</h4>
              <img width="200px" height="40px" src="/assets/img/logo/nlogo.png" alt="logo" />
            </div>
  
            <div className="d-flex justify-content-between align-items-end flex-wrap "  >
              <table className="text-dark" >
                <tbody>
                  <tr>
                    <th>Invoice To</th>
                  </tr>
                  <tr>
                    <td>Name: {customerName}</td>
                  </tr>
                  <tr>
                    <td>Phone Number: {customerNumber}</td>
                  </tr>
                  <tr>
                    <td>Email Address: {customerEmail}</td>
                  </tr>
                  <tr>
                    <td>City: {customerAddress}</td>
                  </tr>
                  <tr>
                    <td>Delivery Address: {customerAddress}</td>
                  </tr>
                </tbody>
              </table>
  
              <table style={{ textAlign: 'right' }} className="text-dark text-sm-left" >
                <tbody>
                  <tr>
                    <th>Order No</th>
                  </tr>
                  <tr>
                    <td>{orderNo}</td>
                  </tr>
                  <tr>
                    <th>Date</th>
                  </tr>
                  <tr>
                    <td> {new Date().toUTCString().slice(0, 16)} </td>
                  </tr>
                </tbody>
              </table>
            </div>
  
            {/* Products table */}
            <div className="mt-4 table-responsive" >
              <table style={{ width: '100%', borderCollapse: 'collapse' }} className="text-dark">
                <thead>
                  <tr style={{ borderBottom: '1px solid #ccc', padding: '8px', textAlign: 'left' }}>
                    <th colSpan="3" >Products</th>
                  </tr>
                  <tr>
                    <th style={{ borderBottom: '1px solid #ccc', padding: '8px', textAlign: 'left' }}>Description</th>
                    <th style={{ borderBottom: '1px solid #ccc', padding: '8px', textAlign: 'left' }}>Quantity</th>
                    <th style={{ borderBottom: '1px solid #ccc', padding: '8px', textAlign: 'left' }}>Price</th>
                    <th style={{ borderBottom: '1px solid #ccc', padding: '8px', textAlign: 'left' }}>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map(product => (
                    <tr key={product.id}>
                      <td style={{ borderBottom: '1px solid #ccc', padding: '8px' }}>{product.name}</td>
                      <td style={{ borderBottom: '1px solid #ccc', padding: '8px' }}>{product.quantity}</td>
                      <td style={{ borderBottom: '1px solid #ccc', padding: '8px' }}>Rs.{product.price.toFixed(2)}</td>
                      <td style={{ borderBottom: '1px solid #ccc', padding: '8px' }}>Rs.{(product.price * product.quantity).toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <th style={{ borderBottom: '1px solid #ccc', padding: '8px' }} colSpan={2} ></th>
                    <th style={{ borderBottom: '1px solid #ccc', padding: '8px' }}>Subtotal</th>
                    <th style={{ borderBottom: '1px solid #ccc', padding: '8px' }}> Rs.{total.toFixed(2)} </th>
                  </tr>
                  <tr>
                    <th style={{ borderBottom: '1px solid #ccc', padding: '8px' }} colSpan={2} ></th>
                    <th style={{ borderBottom: '1px solid #ccc', padding: '8px' }}>Delivery Charges</th>
                    <th style={{ borderBottom: '1px solid #ccc', padding: '8px' }}> Rs.{deliveryCharges.toFixed(2)} </th>
                  </tr>
                  <tr>
                    <th style={{ borderBottom: '1px solid #ccc', padding: '8px' }} colSpan={2} ></th>
                    <th style={{ borderBottom: '1px solid #ccc', padding: '8px' }}>Grand Total</th>
                    <th style={{ borderBottom: '1px solid #ccc', padding: '8px' }}> Rs.{(Number(deliveryCharges) + Number(total)).toFixed(2)} </th>
                  </tr>
                </tfoot>
              </table>
              <p className="text-center mt-10 text-dark" >Thank You for Shopping with us</p>
            </div>
  
            <p className="text-dark" style={{ fontSize: '14px', margin: '0px', textAlign: 'left', }}>Feel free to reach out to us for any queries: </p>
            <p className="text-dark" style={{ fontSize: '14px', margin: '0px', textAlign: 'left' }}>Email: info@nhealthcare.com.pk </p>
            <p className="text-dark" style={{ fontSize: '14px', margin: '0px', textAlign: 'left' }}>Whatsapp: +92-326-8037143 </p>
            <p className="text-dark" style={{ fontSize: '14px', margin: '0px', textAlign: 'left' }}>www.nhealthcare.com.pk </p>
          </div>
        </Container>
      </>
    )
  }
  