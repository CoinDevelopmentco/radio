import React,{useState} from 'react';
import './Dashboard.css';



const DisplayPlaylist = (props) => {
    

    function click() { 
        props.setPick(props.playlist)
        props.setRadioMenu(null)
        console.log(props.myPick)
    }
    
    return(
        <section id={props.id} onClick={click} className="card-container" >
            <div className="image-container" >
                <img src={props.coverFile} />
            </div>
            <div className="artistInfo">
                <div className="artistClass" ></div>
                <div className="artistClass" >{props.playlist}</div>
            </div>
        </section>
    );
}

export default DisplayPlaylist;
