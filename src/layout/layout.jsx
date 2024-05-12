// import React from "react";


// const Layout = ({ children }) => {
//   return (
//     <>
//       <Header />
//       {children}
//       <Footer />
//     </>
//   );
// };

// export default Layout;


import React from "react";
import { useRouter } from "next/router";
import Footer from "./footer/footer";
import Header from "./header/header";
import DashboardLayout from "./dashboardLayout";
import DashboardHeader from "../components/dashboard/header";

import RightSidebar from "../components/dashboard/sidebar";
import { Container } from "reactstrap";
const Layout = ({ children }) => {
  const router = useRouter();

  const isDashboardRoute = router.pathname.startsWith("/dashboard");

  console.log(isDashboardRoute)
  // Render different layout based on the current route
  return (
    <>
      {isDashboardRoute ?
      console.log('dashboard') (
        <DashboardLayout>{children}</DashboardLayout>
      ) : (
        <>
          <Header />
          {children}
          <Footer />
        </>
      )}
    </>
  );
};

export default Layout;

