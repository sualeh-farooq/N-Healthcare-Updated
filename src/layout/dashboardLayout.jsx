import React from "react";
import { Container } from "reactstrap";
import DashboardHeader from "../components/dashboard/header";
// import RightSidebar from "./sidebars/vertical/rightSidebar";
import RightSidebar from "../components/dashboard/sidebar";
import { useRouter } from "next/router";
import { useState , useEffect} from 'react'


const DashboardLayout =  ({ children , userInfo }) => {
  const [open, setOpen] = React.useState(false);
  const showMobilemenu = () => {
    setOpen(!open);
  };
  const router = useRouter()
 
  return (
    
    <main>
    <div className="pageWrapper d-md-block d-lg-flex">
        <aside
            className={`sidebarArea shadow bg-dark showSidebar`}
        >
            <DashboardSidebar showMobilemenu={() => showMobilemenu()} />
        </aside>
        {/********Content Area**********/}

        <div className="contentArea">
            <DashboardHeader  />

            <Container className="p-4 wrapper" fluid>
                <div>
{children}


                </div>
            </Container>
        </div>
    </div>
</main>
  );
};

export default DashboardLayout;
