import { Navbar , NavbarBrand , Button } from "reactstrap"
import logo from '../../../public/assets/img/logo/nlogo.png'
import Image from "next/image"
import { IoChevronBack } from "react-icons/io5";
import { useRouter } from "next/router";

export default function DashboardHeader({title , logOut , isBack}) {
  
  const router = useRouter()
    return (
        <>
        <Navbar className="p-2" color="white" dark expand="md">
        <div className="d-flex align-items-center justify-content-between w-75">
          {/* <NavbarBrand href="/" className=""> */}
            {/* <Image
              src={logo}
              className="logo"
              alt="logo"
            width={250}
            height={50}
            /> */}
            <div className="d-flex align-items-center gap-2 justify-content-center" >
            {
              isBack ? <IoChevronBack className="cursor-pointer" onClick={(()=>router.back())} size={30} />              : null
            }
          <h3 className="mt-1" >  {title}</h3>
            </div>
          <Button
          onClick={()=>logOut()}
            className=" bg-secondary-theme border-0"
          >
           Logout
          </Button>
        </div>
        </Navbar>
        </>
    )
}