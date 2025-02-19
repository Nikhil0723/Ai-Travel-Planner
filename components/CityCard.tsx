import { useEffect, useState } from "react";

const UNSPLASH_ACCESS_KEY = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY; // Store in .env.local

interface City {
  id: string;
  name: string;
  countryCode: string;
  coordinates: [number, number];
}

interface CityCardProps {
  city: City;
  onAddToDreamTrip: (city: City) => void;
}

const CityCard = ({ city }: CityCardProps) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch(
          `https://api.unsplash.com/photos/random?query=${city.name.toLowerCase()}&orientation=landscape&client_id=${UNSPLASH_ACCESS_KEY}`
        );
        const data = await response.json();
        if (data.urls && data.urls.regular) {
          setImageUrl(data.urls.regular);
        } else {
          setImageUrl("/default-city.jpg"); // Fallback image
        }
      } catch (error) {
        console.error("Error fetching Unsplash image:", error);
        setImageUrl("/default-city.jpg");
      }
    };

    fetchImage();
  }, [city.name]);

  return (
    <div className="relative w-full h-[330px] rounded-lg overflow-hidden shadow-lg">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl || "/loading.jpg"})` }}
      />

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* City Name & Button (Bottom-Right) */}
      <div className="absolute bottom-2 left-4 text-white">
        <h1 className="text-base font-semibold ">
          {city.name}
          <span className="text-base font-bold "> {city.countryCode}</span>
        </h1>
      </div>
    </div>
  );
};

export default CityCard;
