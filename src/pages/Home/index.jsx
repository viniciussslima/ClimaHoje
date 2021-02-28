import React from "react";
import Appbar from "../../components/Appbar";
import Card from "../../components/Card";
import { FaTemperatureHigh, FaArrowDown, FaArrowUp } from "react-icons/fa";
import { WiHumidity, WiStrongWind } from "react-icons/wi";
import { useWeather } from "../../contexts/weather";
import "./styles.css";

function Home() {
  const { weather } = useWeather();

  return (
    <div className="container">
      <Appbar />
      {weather ? (
        <div className="content">
          <div className="grid">
            <div className="principal-card">
              <Card
                style={{
                  width: "calc(60% + 60px)",
                  height: "80%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div className="principal-card-grid">
                  <div
                    style={{
                      gridColumnStart: 1,
                      gridColumnEnd: 1,
                    }}
                  >
                    <h2 className="name">Clima em {weather.name}</h2>
                    <img
                      className="principal-card-icon"
                      src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
                      alt="Icone do clima"
                    />
                    <p>{weather.weather[0].description}</p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <WiStrongWind />
                    <p style={{ textTransform: "lowercase" }}>
                      {weather.wind.speed} m/s
                    </p>
                  </div>
                </div>
              </Card>
            </div>
            <div className="adjacent-cards">
              <Card
                style={{
                  width: "30%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div className="adjacent-cards-icons">
                  <FaTemperatureHigh size={30} className="icon" />
                  <p>{weather.main.temp}ºC</p>
                </div>
                <div className="adjacent-cards-icons">
                  <FaArrowDown size={30} className="icon" />
                  <p>{weather.main.temp_min}ºC</p>
                </div>
                <div className="adjacent-cards-icons">
                  <FaArrowUp size={30} className="icon" />
                  <p>{weather.main.temp_max}ºC</p>
                </div>
              </Card>
              <Card
                style={{
                  width: "30%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div className="adjacent-cards-icons">
                  <WiHumidity size={30} className="icon" />
                  <p>{weather.main.humidity}%</p>
                </div>
                <p>Sensção termica: {weather.main.feels_like}ºC</p>
                <p>Pressão: {weather.main.pressure} atm</p>
              </Card>
            </div>
            <div
              style={{
                gridColumnStart: 2,
                gridColumnEnd: 2,
                gridRowStart: 1,
                gridRowEnd: 2,
              }}
            >
              <Card style={{ width: "80%", height: "100%" }}></Card>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Home;
