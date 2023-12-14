import React  from "react";
import "../style.css"
let Qualities = ({sectionName, summery})=>{
    return <section>
        <h2 className="about-container">{sectionName}</h2>
        <p className="about-container paragraph ">{summery}</p>
    </section>
}
export default Qualities;