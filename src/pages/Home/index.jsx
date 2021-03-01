import React from "react";
import Appbar from "../../components/Appbar";
import Card from "../../components/Card";
import {
  FaTemperatureHigh,
  FaArrowDown,
  FaArrowUp,
  FaCompressArrowsAlt,
} from "react-icons/fa";
import { WiHumidity, WiStrongWind } from "react-icons/wi";
import { TiWaves } from "react-icons/ti";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import { useWeather } from "../../contexts/weather";
import "./styles.css";

function Home() {
  const { weather } = useWeather();

  function ChangeView({ center, zoom }) {
    const map = useMap();
    map.setView(center, zoom);
    return null;
  }

  return (
    <div className="container">
      <Appbar />
      {weather ? (
        <div className="content">
          <div className="grid">
            <div className="cards">
              <div className="principal-card">
                <Card>
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
                      <WiStrongWind size={30} />
                      <p style={{ textTransform: "lowercase" }}>
                        {weather.wind.speed} m/s
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
              <div className="adjacent-cards">
                <div className="adjacent-card">
                  <Card
                    style={{
                      width: "50%",
                      maxWidth: 300,
                      height: "100%",
                      maxHeight: 300,
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gridTemplateRows: "1fr 1fr 1fr",
                      alignItems: "center",
                      justifyItems: "center",
                      textAlign: "center",
                    }}
                  >
                    <FaTemperatureHigh
                      size={27}
                      color="#E4CF0E"
                      className="icon"
                    />
                    <p>{weather.main.temp}ºC</p>
                    <FaArrowDown size={30} color="#0E24E4" className="icon" />
                    <p>{weather.main.temp_min}ºC</p>
                    <FaArrowUp size={30} color="#E40E0E" className="icon" />
                    <p>{weather.main.temp_max}ºC</p>
                  </Card>
                </div>
                <div className="adjacent-card">
                  <Card
                    style={{
                      width: "50%",
                      maxWidth: 300,
                      height: "100%",
                      maxHeight: 300,
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gridTemplateRows: "1fr 1fr 1fr",
                      alignItems: "center",
                      justifyItems: "center",
                      textAlign: "center",
                    }}
                  >
                    <TiWaves size={40} color="#E4CF0E" className="icon" />
                    <p style={{ textTransform: "lowercase" }}>
                      {weather.main.feels_like}ºC
                    </p>
                    <WiHumidity size={40} color="#0E24E4" className="icon" />
                    <p>{weather.main.humidity}%</p>
                    <FaCompressArrowsAlt
                      size={25}
                      color="#E40E0E"
                      className="icon"
                    />
                    <p style={{ textTransform: "lowercase" }}>
                      {weather.main.pressure} atm
                    </p>
                  </Card>
                </div>
              </div>
            </div>
            <div className="map">
              <MapContainer
                style={{
                  height: "100%",
                  width: "100%",
                  maxWidth: 1000,
                  margin: "auto auto",
                }}
                center={[weather.coord.lat, weather.coord.lon]}
                zoom={10}
                scrollWheelZoom={true}
              >
                <ChangeView
                  center={[weather.coord.lat, weather.coord.lon]}
                  zoom={10}
                />
                <TileLayer
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[weather.coord.lat, weather.coord.lon]} />
              </MapContainer>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Home;
