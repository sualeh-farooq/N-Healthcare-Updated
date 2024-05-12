import { Button, Nav, NavItem } from "reactstrap";
import logo from '../../../public/assets/img/logo/nwhite.png'
import Image from "next/image";
import Link from "next/link";

import { useRouter } from 'next/router'

const navigation = {
    admin: [
        {
            title: "Dashboard",
            href: "/admin",
            icon: "bi bi-speedometer2",
        },
        {
            title: "Companies",
            href: "/admin/company_list",
            href2: "/admin/company_details",
            icon: "bi bi-buildings",
        },
        {
            title: "Agencies",
            href: "/admin/agencies",
            href2: "/admin/jobs_detail",
            icon: "bi bi-building",
        },
        {
            title: "Candidates",
            href: "/admin/candidates",
            href2: "/admin/view_candidate",
            icon: "bi bi-person",
        },
        {
            title: "Jobs",
            href: "/admin/jobs",
            href2: "/admin/view_jobs",
            icon: "bi bi-briefcase",
        },
        {
            title: "Employees",
            href: "/admin/employee",
            href2: "/admin/view_employee",
            icon: "bi bi-person-lines-fill",
        },
        {
            title: "Invoices",
            href: "/admin/invoice",
            href2: "/admin/invoiceView",
            icon: "bi bi-card-text",
        },
        {
            title: "Settings",
            href: "/admin/settings",
            icon: "bi bi-gear",
        },
    ],

};

const DashboardSidebar = ({ orders , customers }) => {
    let curl = useRouter();
   let location = curl.pathname
   console.log(location)

    return (
        <>
            <div
                className="sidebar-space lg-sidebar"

            >
                <div className="d-flex align-items-center p-2">
                    <Image
                        src={logo}
                        className="logo"
                        alt="logo"
                        width={250}
                        height={50}
                    />
                    <Button
                        size="sm"
                        className="ms-auto d-lg-none"
                    ></Button>
                </div>
                <div className="pt-4 mt-2">
                    <Nav vertical className="sidebarNav">
                        <NavItem className="sidenav-bg">
                            <Link className={
                          location === '/dashboard' || location === '/dashboard/orders/[id]'
                            ? "text-primary nav-link py-3"
                            : "nav-link text-white py-3"
                        } href="/dashboard">
                                <i className="bi bi-calendar"></i>
                                <span className="ms-3 display-none nav-title">
                                    Orders
                                </span>
                            </Link>
                        </NavItem>
                        <NavItem className="sidenav-bg">
                            <Link className={
                          location === '/dashboard/customers'
                            ? "text-primary nav-link py-3"
                            : "nav-link text-white py-3"
                        } href="/dashboard/customers">
                                <i className="bi bi-calendar"></i>
                                <span className="ms-3 display-none nav-title">
                                    Customers
                                </span>
                            </Link>
                        </NavItem>
                        <NavItem className="sidenav-bg">
                            <Link className={
                          location === '/dashboard/reports'
                            ? "text-primary nav-link py-3"
                            : "nav-link text-white py-3"
                        } href="/dashboard/reports">
                                <i className="bi bi-calendar"></i>
                                <span className="ms-3 display-none nav-title">
                                    Reports
                                </span>
                            </Link>
                        </NavItem>
                      
                    </Nav>
                </div>
            </div>

        </>
    );
};

export default DashboardSidebar;
