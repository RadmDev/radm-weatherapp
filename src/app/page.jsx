"use client";

import Spinner from "@/components/Spinner";
import Weather from "@/components/Weather";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";

export default function Home() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;

  console.log(city);

  const fetchWeather = (e) => {
    e.preventDefault();

    setLoading(true);

    axios.get(url).then((res) => {
      setWeather(res.data);
      // console.log(res.data);
    });

    // setCity("");
    setLoading(false);
  };

  if (loading) {
    return <Spinner />;
  } else
    return (
      <div>
        {/* overlay */}
        <div className="absolute w-screen h-screen z-[1] bg-black/40"></div>

        {/* background-image */}
        <Image
          src="https://images.unsplash.com/photo-1601134467661-3d775b999c8b?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          layout="fill"
          className="object-cover"
        />

        {/* search */}
        <div className="relative flex justify-between items-center max-w-[500px] w-full m-auto pt-4 text-white z-10">
          <form
            onSubmit={fetchWeather}
            className="flex justify-between items-center w-full m-auto p-3 bg-transparent border border-gray-300 text-white rounded-2xl"
          >
            <div>
              <input
                onChange={(e) => setCity(e.target.value)}
                type="text"
                placeholder="Search City"
                className="bg-transparent border-none text-white focus:outline-none text-2xl"
              />
            </div>
            <button type="submit">
              <BiSearch size={20} />
            </button>
          </form>
        </div>
        {/* weather */}
        {weather.main && <Weather data={weather} />}
      </div>
    );
}
