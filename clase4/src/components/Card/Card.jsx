import React, {useState} from "react";
import './card.css'

function Card(props){

    const [isDetail, setIsDetail] = useState(false);

    if(isDetail){
        return(
            <div className="card-detail">
                <img src={props.obj.img} alt="" />
                <div>
                    <h3>{props.obj.title}</h3>
                    <p>{props.obj.price}</p>
                    <button onClick={()=>{setIsDetail(false)}}>volver</button>
                </div>
            </div>
        )
    }else{
        return(
            <div className="card">
            <span className="card-title">{props.obj.title}</span>
            <img src={props.obj.img} alt="" className="card-img" />
            <span className="card-price">{props.obj.price}</span>
            <button onClick={()=>{setIsDetail(true)}}>ver detalle</button>
        </div>
        )
    }
       
    
}

export default Card;