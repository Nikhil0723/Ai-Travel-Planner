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

const TripCard = ({ trip }: { trip: Trip }) => {
  return (
    <Card className="w-full max-w-sm">
      {/* Header Section */}
      <CardHeader>
        <CardTitle>{trip.title}</CardTitle>
        <CardDescription>
          {trip.tripType === "single"
            ? `${trip.cities[0].name}, ${trip.cities[0].country}`
            : `${trip.cities.length} Cities, ${trip.cities[0].country}`}
        </CardDescription>
      </CardHeader>

      {/* Content Section */}
      <CardContent>
        {/* Image */}
        <div
          className="h-48 bg-cover bg-center rounded-md mb-4"
          style={{
            backgroundImage: `url(${
              trip.cities[0].imageUrl || "https://via.placeholder.com/600x400"
            })`,
          }}
        ></div>

        {/* Duration */}
        <p className="text-sm text-gray-500 mb-2">
          {trip.cities.reduce((sum, city) => sum + city.duration, 0)} Days
        </p>

        {/* Interests */}
        <div className="flex flex-wrap gap-2 mb-4">
          {trip.interests.map((interest) => (
            <Badge key={interest} variant="secondary" className="text-xs">
              {interest}
            </Badge>
          ))}
        </div>

        {/* Multi-City Tooltip */}
        {trip.tripType === "multi" && (
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="link"
                className="p-0 h-auto text-blue-500 underline"
                aria-label="View all cities in this trip"
              >
                View All Cities
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <ul className="space-y-1">
                {trip.cities.map((city) => (
                  <li key={city.id}>
                    {city.name}, {city.country}
                  </li>
                ))}
              </ul>
            </TooltipContent>
          </Tooltip>
        )}
      </CardContent>

      {/* Footer Section */}
      <CardFooter className="flex justify-between items-center">
        <div className="text-sm text-gray-500">
          Created on {new Date(trip.createdAt).toLocaleDateString()}
        </div>
        <Link
          aria-label="View details of this trip"
          href={`/itinerary/${trip.id}`}
          className="text-blue-500 underline"
        >
          View Details
        </Link>
      </CardFooter>
    </Card>
  );
};

export default TripCard;
