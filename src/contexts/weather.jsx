import React, { createContext, useContext, useState } from "react";

const WeatherContext = createContext({});

export const AuthProvider = (props) => {
  const [weather, setWeather] = useState(null);

  return (
    <WeatherContext.Provider value={{ weather, setWeather }}>
      {props.children}
    </WeatherContext.Provider>
  );
};

export function useWeather() {
  const context = useContext(WeatherContext);
  return context;
}
