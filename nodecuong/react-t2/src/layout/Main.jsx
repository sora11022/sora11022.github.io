import Header from "../common/Header"
import Footer from "../common/Footer"
import { Outlet } from "react-router-dom"
const Main = () => {
  return (
    <div>
        {/* <Header/> */}
        <Outlet/>
        {/* <Footer/>        */}
    </div>
  )
}

export default Main