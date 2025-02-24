import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Trip } from "@/types/Trip";
const staticTrip: Trip = {
  id: "dubai-sample-1",
  title: "Dubai Adventure",
  tripType: "multi",
  startDate: "2023-11-15",
  createdAt: "2023-10-01T09:30:00Z",
  interests: ["modern architecture", "desert experiences", "luxury shopping"],
  cities: [
    {
      id: "dubai-uae",
      name: "Dubai",
      country: "United Arab Emirates",
      coordinates: { lat: 25.276987, lng: 55.296249 },
      duration: 3,
      itinerary: [],
      temperatureData: [],
      monthlyInsights: [],
      imageUrl:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600",
    },
    {
      id: "abu-dhabi-uae",
      name: "Abu Dhabi",
      country: "United Arab Emirates",
      coordinates: { lat: 24.4539, lng: 54.3773 },
      duration: 2,
      itinerary: [],
      temperatureData: [],
      monthlyInsights: [],
      imageUrl:
        "https://images.unsplash.com/photo-1581067721837-e4809b29692f?auto=format&fit=crop&w=600",
    },
  ],
};

const TripCard = () => {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>{staticTrip.title}</CardTitle>
        <CardDescription>
          {staticTrip?.tripType === "single"
            ? `${staticTrip.cities[0].name}, ${staticTrip.cities[0].country}`
            : `${staticTrip.cities.length} Cities, ${staticTrip.cities[0].country}`}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div
          className="h-48 bg-cover bg-center rounded-md mb-4"
          style={{
            backgroundImage: `url(${staticTrip.cities[0].imageUrl})`,
          }}
        ></div>

        <p className="text-sm text-gray-500 mb-2">
          {staticTrip.cities.reduce((sum, city) => sum + city.duration, 0)} Days
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {staticTrip.interests.map((interest) => (
            <Badge key={interest} variant="secondary" className="text-xs">
              {interest}
            </Badge>
          ))}
        </div>

        {staticTrip.tripType === "multi" && (
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="link"
                className="p-0 h-auto text-blue-500 underline"
              >
                View All Cities
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <ul className="space-y-1">
                {staticTrip.cities.map((city) => (
                  <li key={city.id}>
                    {city.name}, {city.country}
                  </li>
                ))}
              </ul>
            </TooltipContent>
          </Tooltip>
        )}
      </CardContent>

      <CardFooter className="flex justify-between items-center">
        <div className="text-sm text-gray-500">
          Created on {new Date(staticTrip.createdAt).toLocaleDateString()}
        </div>
        <Link
          href={`/itinerary/${staticTrip.id}`}
          className="text-blue-500 underline"
        >
          View Details
        </Link>
      </CardFooter>
    </Card>
  );
};

export default TripCard;
