import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import About from "../pages/About";
import FindHospital from "../pages/FindHospital"


export default function GeneralRouter(){
  return(
    <>
       <nav>
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/search" element={<FindHospital/>}/>
                {/* <Route path="/resume" element={<Resume/>}/> */}
                <Route path="*" element={<h1 className="error--note">Not Found</h1>}/>
          </Routes>
        </nav>
    </>
  )
}