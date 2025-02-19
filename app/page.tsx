"use client";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { CiSearch } from "react-icons/ci";
import { useState, useEffect } from "react";

export default function Home() {
  const [day, setDay] = useState("1"); // Default day is set to "1"
  const [cityImage, setCityImage] = useState(""); // State for storing the random city image URL
  const [cityName, setCityName] = useState("Loading..."); // State for storing the city name

  // List of cities to randomize the query
  const cities = [
    "New York",
    "Paris",
    "Tokyo",
    "London",
    "Sydney",
    "Dubai",
    "Singapore",
    "Rome",
    "Berlin",
    "Toronto",
  ];

  // Function to fetch a random city image and its name
  const fetchRandomCityImage = async () => {
    const UNSPLASH_ACCESS_KEY = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY; // Replace with your Unsplash Access Key

    // Randomly select a city from the list
    const randomCity = cities[Math.floor(Math.random() * cities.length)];
    const url = `https://api.unsplash.com/photos/random?query=${randomCity}&orientation=landscape&client_id=${UNSPLASH_ACCESS_KEY}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch image");
      }
      const data = await response.json();

      // Extract image URL and city name (if available)
      const imageUrl = data.urls.regular;
      const location = data.location?.title || randomCity; // Use location title or fallback to the queried city

      setCityImage(imageUrl);
      setCityName(location);
    } catch (error) {
      console.error("Error fetching city image:", error);
      setCityImage(
        "https://via.placeholder.com/1920x1080?text=City+Image+Not+Found"
      );
      setCityName("Unknown City");
    }
  };

  // Fetch a random city image on component mount
  useEffect(() => {
    fetchRandomCityImage();
  }, []);

  return (
    <div
      className="flex items-center justify-center w-full h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${cityImage})` }}
    >
      {/* Dark Shade Overlay */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        aria-hidden="true"
      ></div>

      <div className="text-center z-10">
        <h1 className="text-4xl font-semibold text-white">
          Discover your next adventure
        </h1>
        <p className="text-white mt-2">
          Plan, explore, and create unforgettable memories
        </p>

        {/* Search Bar and Day Selector */}
        <div className="flex items-center mt-4 p-4 bg-white border rounded-lg gap-3 z-10">
          {/* Search Input */}
          <div className="flex-1 flex items-center gap-2">
            <CiSearch size={20} />
            <Input
              type="text"
              placeholder="Search City"
              className="flex-1 shadow-none font-light p-3"
              aria-label="Search for a city"
            />
          </div>

          {/* Day Selector */}
          <Select value={day} onValueChange={setDay}>
            <SelectTrigger className="w-24">
              <SelectValue placeholder="Select Day" />
            </SelectTrigger>
            <SelectContent>
              {[...Array(7).keys()].map((num) => (
                <SelectItem key={num + 1} value={(num + 1).toString()}>
                  Day {num + 1}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* City Name Overlay */}
      <div className="absolute bottom-4 right-4 bg-black bg-opacity-75 text-white px-4 py-2 rounded-lg z-10">
        {cityName}
      </div>
    </div>
  );
}
