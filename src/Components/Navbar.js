import React from "react";
import "../style.css";
let Navbar = ()=>{
    return (<nav>
        <div className="container">
            <h2 className="name">Silu Muduli</h2>
        </div>
        <div className="container">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
            <a href="#">Skill</a>
            <a href="#">Qualification</a>
            <a href="#">Project</a>
        </div>
    </nav>)
}
export default Navbar;