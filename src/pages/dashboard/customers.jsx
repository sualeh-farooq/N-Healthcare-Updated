
import { useEffect } from 'react';
import React from 'react';
import DashboardSidebar from '../../components/dashboard/sidebar.jsx';
import { Container } from 'reactstrap';
import TableFormat from '../../components/table.jsx';
import DashboardHeader from '../../components/dashboard/header.jsx';

export default function dynamicOrder() {
    const handleLogout = async () => {
        "use server"
        const supabase = createClient();
        const { error } = await supabase.auth.signOut()
        if (error) {
            throw error
        }
        console.log('logout success');
        document.cookie = 'sb-adjkbaqvoxmzorgmrees-auth-token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        router.push('/login');
    };
    return (
        <>
              <main>
                <div className="pageWrapper d-md-block d-lg-flex">
                    <aside
                        className={`sidebarArea shadow bg-dark showSidebar`}>
                        <DashboardSidebar showMobilemenu={() => showMobilemenu()} />
                    </aside>
                    <div className="contentArea">
                        <DashboardHeader logOut={handleLogout} title="Orders" />
                        <Container className="p-4 wrapper" fluid>
                            <div style={{ marginTop: 100 }} >
                              
                        </div>
                        </Container>
                    </div>
                </div>
            </main>
        </>
    )
}


