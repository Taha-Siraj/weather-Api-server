import express from "express";
import cors from "cors";

const app = express();
app.use(cors())

app.get("/weatherApp/:cityname",(req ,res) => { 
    const cityname = req.params.cityname.toLowerCase();
    let  apiRes = {};
    let cities = [
       "karachi", "lahore","islamabad" , "quetta" , "multan", "faisalabad","peshawar" 
      ]

    if(!cityname){
        res.send("Abay Bc phly input tu fill kr");
        return
    }
    if(cities.includes(cityname)){

      if(cityname === "karachi"){
        apiRes ={
            "cityname": cityname,
            "country": "Pakistan",
            "humidity": "65%",
            "condition": "Sunny",
            "updatedAt": "2025-04-27T08:30:00.000Z",
            "temperature": {
              "current": 33,
              "feels_like": 37,
              "min": 29,
              "max": 36,
              "unit": "°C"
            },
            "wind": {
              "speed": "18 km/h",
              "direction": "SW"
            }
           
        }
        }
        else if(cityname === "lahore"){
        apiRes = {
        "cityname": cityname,
        "country": "Pakistan",
        "humidity": "40%",
        "condition": "Partly Cloudy",
        "updatedAt": "2025-04-27T08:30:00.000Z",
        "temperature": {
          "current": 31,
          "feels_like": 33,
          "min": 26,
          "max": 34,
          "unit": "°C"
        },
        "wind": {
          "speed": "12 km/h",
          "direction": "NW"
        }
          }
        } 
        else if(cityname === "islamabad"){
        apiRes = {
          "cityname": cityname,
        "country": "Pakistan",
        "humidity": "50%",
        "condition": "Clear",
        "updatedAt": "2025-04-27T08:30:00.000Z",
        "temperature": {
          "current": 28,
          "feels_like": 29,
          "min": 22,
          "max": 30,
          "unit": "°C"
        },
        "wind": {
          "speed": "10 km/h",
          "direction": "NE"
        }
        }
        }
        else if (cityname === "quetta"){
          apiRes ={
            "cityname": cityname,
            "country": "Pakistan",
            "humidity": "30%",
            "condition": "Sunny",
            "updatedAt": "2025-04-27T08:30:00.000Z",
            "temperature": {
              "current": 24,
              "feels_like": 24,
              "min": 18,
              "max": 26,
              "unit": "°C"
            },
            "wind": {
              "speed": "8 km/h",
              "direction": "NW"
            }
          }
        }
        else if (cityname === "multan" ){
          apiRes = {
            "cityname": cityname,
            "country": "Pakistan",
            "humidity": "35%",
            "condition": "Hot",
            "updatedAt": "2025-04-27T08:30:00.000Z",
            "temperature": {
              "current": 36,
              "feels_like": 39,
              "min": 30,
              "max": 40,
              "unit": "°C"
            },
            "wind": {
              "speed": "14 km/h",
              "direction": "S"
            }
          } 
        }
        else if (cityname === "faisalabad"){
          apiRes ={
        "cityname": cityname,
        "country": "Pakistan",
        "humidity": "45%",
        "condition": "Sunny",
        "updatedAt": "2025-04-27T08:30:00.000Z",
        "temperature": {
          "current": 32,
          "feels_like": 35,
          "min": 27,
          "max": 35,
          "unit": "°C"
        },
        "wind": {
          "speed": "10 km/h",
          "direction": "E"
        }
          }
        }
        else if(cityname === "peshawar"){
          apiRes= {
              "cityname": cityname,
              "country": "Pakistan",
              "humidity": "40%",
              "condition": "Sunny",
              "updatedAt": "2025-04-27T08:30:00.000Z",
              "temperature": {
                "current": 34,
                "feels_like": 36,
                "min": 29,
                "max": 37,
                "unit": "°C"
              },
              "wind": {
                "speed": "16 km/h",
                "direction": "NW"
              }
            
          }
        }
    }else{
      res.status(404).json({ message: "City not found" });
    }
    res.send(apiRes);
})

app.listen(5000);










 
  

