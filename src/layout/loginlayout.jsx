import React from "react";

const LoginLayout = ({ children }) => {
  return (
    <>

    <div style={{height: '100vh' , backgroundColor: '#caa23c', padding: 0 , margin: 0}} >
      {children}
      </div>
    </>
  );
};

export default LoginLayout;
