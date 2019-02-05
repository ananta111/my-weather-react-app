import React, { Component } from 'react';

import './App.css';

import Title from "./components/Title"
import Form from "./components/Form"

import Weather from "./components/Weather"
import Imageview from "./components/Imageview";


const API_KEY  = "7b4a1852de12413dbce7b6235a24ae2b";

const IMAGE_API_KEY = "a9ea311737fa8fc26d3f6da146a11cd4d96c4b206012917adb3cd38300d8afe3";

const IMAGE_API_SECRET_KEY = "2df0034e7bbe6055fe0d17e55c573b8c5f59f8b40e5fc400fb0c68b747454a6c";


class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: undefined,
        myimage: undefined,

    };

  }


  getLocationImage = async (e) => {
      e.preventDefault();
      const city = e.target.elements.city.value;
      const country = e.target.elements.country.value;
      const image_fetch = await fetch(`https://api.unsplash.com/search/photos?client_id=${IMAGE_API_KEY}&query=${city}%20city`,{method:'get'});
      const data = await image_fetch.json();
      if (data.total>0){
          var myImageSource = data.results[0].urls.regular;
      }else {
          this.setState({myimage: undefined});
      }

      //console.log(data); testing
      if (myImageSource){
          this.setState({myimage: myImageSource});
      }

      //console.log(this.state.myimage);
      }


  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric&orientation=landscape`);
    const data = await api_call.json();
    const code = data.cod;


    if (code == "200"){
      //console.log(data);
        this.setState({
            temperature: data.main.temp,
            city: data.name,
            country: data.sys.country,
            humidity: data.main.humidity,
            description: data.weather[0].description,
            error: ""

        });

    }else {
        this.setState({
            temperature: undefined,
            city: undefined,
            country: undefined,
            humidity: undefined,
            description: undefined,
            error: "Please check your input again",
            myimage: undefined

        });

    }

    }






  render (){
      return (
      <div className="wrapper">
          <div className="main">
              <div className="container">
                  <div className="row">
                      <div className="left-side">
                          <Title/>
                      </div>
                      <div className="">
                          <Form getWeather = {this.getWeather} getLocationImage = {this.getLocationImage}/>
                          <Weather

                              temperature =  {this.state.temperature}
                              city  = {this.state.city}
                              country = {this.state.country}
                              humidity = {this.state.humidity}
                              description = {this.state.description}
                              error = {this.state.error}
                              imageurl = {this.state.myimage}
                          />

                      </div>
                      <div>
                          <Imageview myimage = {this.state.myimage}/>
                      </div>



                  </div>
              </div>
          </div>
      </div>
  );
  }



}

export default App;


