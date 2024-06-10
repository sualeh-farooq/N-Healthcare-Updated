// import nodemailer from 'nodemailer';

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     const { name, email, message , subject , number } = req.body;

//     const mailOptions = {
//       from: email,
//       replyTo: email, 
//       to: process.env.yourEmail, 
//       subject: subject,
//       text: `Name:  ${name}  -  Phone: ${number}\n\n\n ${message}`,
//     };

//     try {
//       const transporter = nodemailer.createTransport({
//         host: process.env.host,
//         port: process.env.port,
//         secure: false,
//         auth: {
//           user: process.env.smtpuser,
//           pass: process.env.smtppass,
//         },
//         tls: {
//           rejectUnauthorized: false
//         }
//       });

//       await transporter.sendMail(mailOptions);
//       console.log('Email sent');
//       res.status(200).json({ message: 'Email sent' });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Failed to send email' });
//     }
//   } else {
//     res.status(405).end(); // Method Not Allowed
//   }
// }


import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { customer, products, total, orderNo } = req.body;

    const InvoiceTemplate = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Email</title>
      </head>
      <body>
        <div style="font-family: Arial, sans-serif; max-width: 100%; margin: 0 auto; margin-top: 50px !important;">
          <div style="border-bottom: 1px solid lightgray; padding-bottom: 10px; margin-bottom: 10px; margin-top: 10px; display: flex; justify-content: space-between; align-items: center;">
            <h4 style="margin: 0; color: #333;">Invoice</h4>
            <img width="200px" height="40px" src="/assets/img/logo/nlogo.png" alt="logo" />
          </div>
          <div class="d-flex justify-content-between align-items-start">
            <table>
              <tr><th>Invoice To</th></tr>
              <tr><td>Name: ${customer.f_name} ${customer.l_name}</td></tr>
              <tr><td>Phone Number: ${customer.number}</td></tr>
              <tr><td>Email Address: ${customer.email}</td></tr>
              <tr><td>City: ${customer.address}</td></tr>
              <tr><td>Delivery Address: ${customer.address}</td></tr>
            </table>
            <table style="text-align: right;">
              <tr><th>Order No</th></tr>
              <tr><td>${orderNo}</td></tr>
              <tr><th>Date</th></tr>
              <tr><td>${new Date().toUTCString().slice(0, 16)}</td></tr>
            </table>
          </div>
          <div class="mt-4">
            <table style="width: 100%; border-collapse: collapse;">
              <thead>
                <tr style="border-bottom: 1px solid #ccc; padding: 8px; text-align: left;">
                  <th colSpan="3">Products</th>
                </tr>
                <tr>
                  <th style="border-bottom: 1px solid #ccc; padding: 8px; text-align: left;">Description</th>
                  <th style="border-bottom: 1px solid #ccc; padding: 8px; text-align: left;">Quantity</th>
                  <th style="border-bottom: 1px solid #ccc; padding: 8px; text-align: left;">Price</th>
                  <th style="border-bottom: 1px solid #ccc; padding: 8px; text-align: left;">Total</th>
                </tr>
              </thead>
              <tbody>
                ${products.map(product => `
                  <tr key="${product.id}">
                    <td style="border-bottom: 1px solid #ccc; padding: 8px;">${product.name}</td>
                    <td style="border-bottom: 1px solid #ccc; padding: 8px;">${product.quantity}</td>
                    <td style="border-bottom: 1px solid #ccc; padding: 8px;">Rs.${product.price.toFixed(2)}</td>
                    <td style="border-bottom: 1px solid #ccc; padding: 8px;">Rs.${(product.price * product.quantity).toFixed(2)}</td>
                  </tr>
                `).join('')}
              </tbody>
              <tfoot>
                <tr>
                  <th style="border-bottom: 1px solid #ccc; padding: 8px;" colSpan="2"></th>
                  <th style="border-bottom: 1px solid #ccc; padding: 8px;">Subtotal</th>
                  <th style="border-bottom: 1px solid #ccc; padding: 8px;">Rs.${total.toFixed(2)}</th>
                </tr>
                <tr>
                  <th style="border-bottom: 1px solid #ccc; padding: 8px;" colSpan="2"></th>
                  <th style="border-bottom: 1px solid #ccc; padding: 8px;">Delivery Charges</th>
                  <th style="border-bottom: 1px solid #ccc; padding: 8px;">Rs.${customer.delivery_charges}</th>
                </tr>
                <tr>
                  <th style="border-bottom: 1px solid #ccc; padding: 8px;" colSpan="2"></th>
                  <th style="border-bottom: 1px solid #ccc; padding: 8px;">Grand Total</th>
                  <th style="border-bottom: 1px solid #ccc; padding: 8px;">Rs.${(Number(customer.delivery_charges) + Number(total)).toFixed(2)}</th>
                </tr>
              </tfoot>
            </table>
            <p class="text-center mt-10 text-dark">Thank You for Shopping with us</p>
          </div>
        </div>
      </body>
      </html>
    `;

    const mailOptions = {
      from: process.env.yourEmail,
      replyTo: process.env.yourEmail,
      to: 'sualehfarooq65@gmail.com',
      subject: 'Thank you for Purchase',
      html: InvoiceTemplate
    };

    try {
      const transporter = nodemailer.createTransport({
        host: process.env.host,
        port: process.env.port,
        secure: false,
        auth: {
          user: process.env.smtpuser,
          pass: process.env.smtppass,
        },
        tls: {
          rejectUnauthorized: false
        }
      });

      await transporter.sendMail(mailOptions);
      console.log('Email sent');
      return res.status(200).json({ message: 'Email sent' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Failed to send email' });
    }
  } else {
    return res.status(405).end(); // Method Not Allowed
  }
}
