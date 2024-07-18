
import DashboardSidebar from "../../components/dashboard/sidebar"
import DashboardHeader from "../../components/dashboard/header"
import { Container } from "reactstrap"
import { createClient } from "../../../utils/supabase/server-props";
export default function Reports(){
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
                        <DashboardHeader logOut={handleLogout} title="Products" />
                        <Container className="p-4 wrapper" fluid>
                            <div className="d-flex justify-content-center align-items-center" style={{ marginTop: 100 , height: '50vh' ,  }} >
            <h4>       
                
            This module is currently under development. It will be available soon , Please check back later.
            </h4>
                            </div>
                        </Container>
                    </div>
                </div>
            </main>
        </>
    )
}