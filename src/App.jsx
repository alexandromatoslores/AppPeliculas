import React from "react"

import './app.css';
import { MyRoutes } from "./Routes/Routes";


export const App = () => {
    return(
        <div>
            <header>
             <h1 className="title"> 🎬Peliculas </h1>
            </header> 
            <MyRoutes/>
        </div>
       
    );   
} 