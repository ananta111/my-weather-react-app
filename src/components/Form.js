import React from "react";


const Form = (props) =>{
    return (
        <div>

            <form className="main-form" onSubmit={(e)=>{props.getLocationImage(e); props.getWeather(e); }}>
                <label className="form-label">Get instant weather<span className="glyphicon glyphicon-tint"></span></label>
                <input className="form-control" type="text" name="city" placeholder="City" required={true}/><br/>
                <input className="form-control" type="text" name="country" placeholder="Country" required={true}/><br/>
                <button className="btn btn-primary">Get Weather</button>
            </form>
        </div>
    )

};



export default Form;