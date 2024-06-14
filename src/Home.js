import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { createRoot } from 'react-dom/client';
import Clock from "./Clock";

function Home() {

    const [time, setTime] = useState(()=> new Date());
    const [color, setColor] = useState("black");

    useEffect(()=> {
        const id = setInterval(()=>setTime(new Date()), 1000);

        return () => clearInterval(id); 
    }, [])


    return(
        <div>
            <Clock color={color} time={time.toLocaleTimeString()}/>
        </div>
    )
}
export default Home;