// components/TripCard.tsx
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

interface TripCardProps {
  trip: Trip;
}

const TripCard = ({ trip }: TripCardProps) => {
  const isMultiCity = trip.cities.length > 1;
  const totalDays = trip.cities.reduce((sum, city) => sum + city.duration, 0);
  const firstCountry = trip.cities[0]?.country;

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>{trip.title}</CardTitle>
        <CardDescription>
          {isMultiCity
            ? `${trip.cities.length} Cities, ${firstCountry}`
            : `${trip.cities[0]?.name}, ${firstCountry}`}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div
          className="h-48 bg-cover bg-center rounded-md mb-4"
          style={{
            backgroundImage: `url(${trip.cities[0]?.itinerary[0].imageUrl})`,
          }}
        ></div>

        <p className="text-sm text-gray-500 mb-2">{totalDays} Days</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {trip.interests.map((interest) => (
            <Badge key={interest} variant="secondary" className="text-xs">
              {interest}
            </Badge>
          ))}
        </div>

        {isMultiCity && (
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

      <CardFooter className="flex justify-between items-center">
        <div className="text-sm text-gray-500">
          Created on {new Date(trip.createdAt).toLocaleDateString()}
        </div>
        <Link href={`/itirnary/${trip.id}`} className="text-blue-500 underline">
          View Details
        </Link>
      </CardFooter>
    </Card>
  );
};

export default TripCard;
