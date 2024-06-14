import { Link } from "react-router-dom";
import React, { useState } from "react";
import { createRoot } from 'react-dom/client';

function Home() {

    const [counter, setCounter] = useState(0);

    return(
        <div>
            <button onClick={() => setCounter(counter+1)}>Increase value</button>
            <div>Counter value is {counter}</div>
        </div>
    )
}
export default Home;