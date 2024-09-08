import { Outlet } from "react-router-dom"
import Header from "../common/Header"
import Footer from "../common/Footer"
const Main = () => {
  return (
    <div>
    <Header/>
    <Outlet/>
    <Footer/>
    </div>
  )
}

export default Main