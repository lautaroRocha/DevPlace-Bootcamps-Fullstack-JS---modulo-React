import React, {useState} from "react";
import './slider.css'

function Slider(props){


    const [display, setDisplay] = useState(0)

    function moveItem(e){
        let btn = e.target.className
        switch(btn){
            case "btn back":
                setDisplay(display - 1);
                break;
            case "btn nxt":
                setDisplay(display + 1);
                break;
        }
    }

    return(
        <div className="slider">
                    <img src={props.pics[display].link} />
                    <span>{props.pics[display].des}</span> 
                    <div className="btn back" onClick={moveItem}> 🡸 </div>
                    <div className="btn nxt" onClick={moveItem}> 🡺 </div>
        </div>
    )
}

export default Slider;