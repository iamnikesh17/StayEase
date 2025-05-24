import { Button } from "@/components/ui/button"
import Navbar from "./components/Navbar"
import { useLocation } from "react-router-dom"
import AllRoutes from "./routes/AllRoutes"
import Footer from "./components/Footer"



function App() {
  const isOwnerPath=useLocation().pathname.includes("owner")
  return (
    <div>
      {!isOwnerPath && <Navbar/>}
      <AllRoutes/>
      <Footer/>
    </div>
  )
}

export default App
