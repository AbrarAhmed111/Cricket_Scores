import React, { useEffect, useState } from "react";
import sunshineImage from "../assets/img/sunshine.jpg";
import axios from "axios";

export default function Temperature() {
    const backgroundImageUrl = `url(${sunshineImage})`;
    const [weatherDetail, setWeatherDetail] = useState("");
    const temperatureInCelsius = weatherDetail.main.temp - 273.15;
    console.log(weatherDetail,'weatherDetail')
    const fetchData = async () => {
        try {
            await axios.get("https://api.ipify.org").then(async (response) => {
                const countryDetail = await axios.get(
                    `https://ipinfo.io/${response.data}/json?token=5a6086648352e7`
                );

                const { city } = countryDetail.data;
                const weather = await axios.get(
                    `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2fa2b7bcd97acf425f8a3a4eb4d4c8c4`
                );
                setWeatherDetail(weather.data);
            });
        } catch (error) {
            console.error("Error fetching IP data:", error);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div
            className="p-1 front relative"
            style={{
                backgroundImage: backgroundImageUrl,
                backgroundSize: "cover",
            }}
        >
            <h1 className="absolute top-2/3 left-2/3 transform -translate-x-1/2 -translate-y-1/2 text-sm text-white font-bold">
                Rawalpindi Temperature {temperatureInCelsius.toFixed(2)}°C
            </h1>
        </div>
    );
}
