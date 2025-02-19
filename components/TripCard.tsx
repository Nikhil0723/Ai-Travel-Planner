// src/components/TripCard.tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import { Trip } from "@/types/Trip";
import Link from "next/link";

const TripCard = ({ trip }: { trip: Trip }) => {
  return (
    <Card className="w-full max-w-sm">
      {/* Header Section */}
      <CardHeader>
        <CardTitle>{trip.title}</CardTitle>
        <CardDescription>
          {trip.type === "single-city"
            ? `${trip.city?.name}, ${trip.city?.countryCode}`
            : `${trip.cities?.length} Cities, ${trip.cities?.[0]?.countryCode}`}
        </CardDescription>
      </CardHeader>

      {/* Content Section */}
      <CardContent>
        {/* Image */}
        <div
          className="h-48 bg-cover bg-center rounded-md mb-4"
          style={{
            backgroundImage: `url(${
              trip.type === "single-city"
                ? trip.city?.imageUrl || "https://via.placeholder.com/600x400"
                : trip.cities?.[0]?.imageUrl || "https://via.placeholder.com/600x400"
            })`,
          }}
        ></div>

        {/* Duration */}
        <p className="text-sm text-gray-500 mb-2">{trip.duration}</p>

        {/* Interests */}
        <div className="flex flex-wrap gap-2 mb-4">
          {trip.interests.map((interest) => (
            <Badge key={interest} variant="secondary" className="text-xs">
              {interest}
            </Badge>
          ))}
        </div>

        {/* Multi-City Tooltip */}
        {trip.type === "multi-city" && (
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
                {trip.cities?.map((city) => (
                  <li key={city.name}>
                    {city.name}, {city.countryCode}
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
          Created by{" "}
          <a href={trip.createdBy.profileLink} className="underline" aria-label={`Profile of ${trip.createdBy.username}`}>
            {trip.createdBy.username}
          </a>
        </div>
        <Link aria-label="View details of this trip" href={`/iternary/${trip.id}`}>
          View Details
        </Link>
      </CardFooter>
    </Card>
  );
};

export default TripCard;