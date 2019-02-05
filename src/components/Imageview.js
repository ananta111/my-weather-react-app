import React from "react";

const Imageview = (props) => {
    return (
        <div className="image-div">
            {props.myimage && <img className="location-image" src={props.myimage}/>}

            </div>
    );
}

export default Imageview;