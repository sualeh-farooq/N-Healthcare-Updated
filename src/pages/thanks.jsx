import React from 'react';

const ThankYouPage = ({ orderNumber, orderStatus }) => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-md-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center">Thank You for Your Purchase!</h5>
              <p className="card-text text-center">
                Your order has been placed successfully.
              </p>
              <hr />
              <p className="card-text">
                <strong>Order Number:</strong> {orderNumber}
              </p>
              <p className="card-text">
                <strong>Order Status:</strong> {orderStatus}
              </p>
              <p className="card-text text-center">
                An invoice of your order has been sent to your email. Thank you for shopping with us!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
