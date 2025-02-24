"use client";
import { useState, useMemo, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import type { Trip, ItineraryItem } from "@/types/Trip";

// Fix Leaflet marker icons
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

interface MapComponentProps {
  trip: Trip;
}

const Map = ({ trip }: MapComponentProps) => {
  // Get unique cities and days from itinerary
  const { cities, days, activitiesByDay } = useMemo(() => {
    const citiesSet = new Set<string>();
    const daysSet = new Set<number>();
    const activitiesByDay: Record<number, ItineraryItem[]> = {};

    trip.city.itinerary.forEach((activity) => {
      const cityName = activity.city?.name || trip.city.name;
      citiesSet.add(cityName);
      daysSet.add(activity.day);

      if (!activitiesByDay[activity.day]) {
        activitiesByDay[activity.day] = [];
      }
      activitiesByDay[activity.day].push(activity);
    });

    return {
      cities: Array.from(citiesSet),
      days: Array.from(daysSet),
      activitiesByDay,
    };
  }, [trip]);

  // State for filters
  const [selectedCities, setSelectedCities] = useState<string[]>(cities);
  const [selectedDays, setSelectedDays] = useState<number[]>(days);

  // Filtered activities
  const filteredActivities = useMemo(() => {
    return trip.city.itinerary.filter((activity) => {
      const activityCity = activity.city?.name || trip.city.name;
      return (
        selectedDays.includes(activity.day) &&
        selectedCities.includes(activityCity)
      );
    });
  }, [trip, selectedDays, selectedCities]);

  // Reset filters when trip changes
  useEffect(() => {
    setSelectedCities(cities);
    setSelectedDays(days);
  }, [trip, cities, days]);

  return (
    <div className="relative h-[calc(100vh-4rem)] w-full">
      <MapContainer
        center={[trip.city.coordinates.lat, trip.city.coordinates.lng]}
        zoom={12}
        className="h-full w-full"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {filteredActivities.map((activity) => (
          <Marker
            key={activity.id}
            position={[activity.coordinates.lat, activity.coordinates.lng]}
          >
            <Popup>
              <div className="space-y-2 min-w-[200px]">
                <h3 className="font-semibold">{activity.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {activity.description}
                </p>
                <div className="flex flex-wrap gap-1 mt-2">
                  {activity.entryFee && (
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                      Entry: {activity.entryFee}
                    </span>
                  )}
                  <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded">
                    Day {activity.day}
                  </span>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                    {activity.city?.name || trip.city.name}
                  </span>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* Control Panel */}
      <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-lg shadow-xl max-w-xs w-full space-y-4 border z-[1000]">
        {/* Days Filter */}
        <div className="space-y-3">
          <h3 className="font-semibold text-base mb-2">Filter by Days</h3>
          {days.map((day) => (
            <div key={day} className="flex items-center space-x-2">
              <Checkbox
                id={`day-${day}`}
                checked={selectedDays.includes(day)}
                onCheckedChange={(checked) => {
                  setSelectedDays((prev) =>
                    checked ? [...prev, day] : prev.filter((d) => d !== day)
                  );
                }}
              />
              <Label htmlFor={`day-${day}`} className="text-sm font-medium">
                Day {day} ({activitiesByDay[day].length} activities)
              </Label>
            </div>
          ))}
        </div>

        {/* Cities Filter */}
        <div className="space-y-3">
          <h3 className="font-semibold text-base mb-2">Filter by Cities</h3>
          {cities.map((city) => (
            <div key={city} className="flex items-center space-x-2">
              <Checkbox
                id={`city-${city}`}
                checked={selectedCities.includes(city)}
                onCheckedChange={(checked) => {
                  setSelectedCities((prev) =>
                    checked ? [...prev, city] : prev.filter((c) => c !== city)
                  );
                }}
              />
              <Label htmlFor={`city-${city}`} className="text-sm font-medium">
                {city}
              </Label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Map;
