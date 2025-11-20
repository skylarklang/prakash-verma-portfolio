import ParticlesBackground from "./components/ParticlesBackground"
import { Route, Routes } from "react-router-dom"
import AboutPage from "./components/pages/AboutPage"
import HomePage from "./components/pages/HomePage"
import SocialLinks from "./components/SocialLinks"
import GeneralFooter from "./components/GeneralFooter"
import AllProjectsPage from "./components/pages/AllProjectsPage"
import AllTechsPage from "./components/pages/AllTechsPage"
import Navbar from "./components/pages/homepage-comps/Navbar"

function App() {

  return (
    <>
      <ParticlesBackground />
      <SocialLinks />
      {/* <Navbar/> */}
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        
        <Route path="/about-me" element={<AboutPage />}/>

        <Route path="/projects" element={<AllProjectsPage />}/>

        <Route path="/technologies" element={<AllTechsPage />}/>

      </Routes>

      <GeneralFooter />
        
      
    </>
  )
}

export default App
