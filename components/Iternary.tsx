import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Trip } from "@/types/Trip";
import Image from "next/image";

interface ItineraryProps {
  trip: Trip;
}

const Itinerary = ({ trip }: ItineraryProps) => {
  const [expandedDay, setExpandedDay] = useState<number | null>(null);

  return (
    <ScrollArea className="h-screen w-full p-6 bg-gray-100">
      {/* Header Section */}
      <div className="w-full max-w-4xl mx-auto">
        <div className="relative w-full h-[300px] rounded-lg overflow-hidden shadow-md">
          <Image
            src={trip.city?.imageUrl || "/fallback.jpg"}
            alt={trip.title}
            width={100}
            height={100}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-white">
            <h1 className="text-3xl font-bold">{trip.title}</h1>
            <p className="text-lg">
              {trip.city?.name || "Multiple Cities"} - {trip.duration}
            </p>
          </div>
        </div>

        {/* Itinerary Days */}
        <div className="mt-6 space-y-4">
          {trip.itinerary?.map((day) => (
            <Card key={day.id} className="p-4 shadow-md">
              <CardHeader
                className="flex justify-between items-center cursor-pointer"
                onClick={() =>
                  setExpandedDay(expandedDay === day.day ? null : day.day)
                }
              >
                <CardTitle className="text-xl font-semibold">
                  Day {day.day} {day.city && `- ${day.city}`}
                </CardTitle>
                {expandedDay === day.day ? <ChevronUp /> : <ChevronDown />}
              </CardHeader>
              {expandedDay === day.day && (
                <CardContent className="mt-2 space-y-4">
                  {day.activities.map((activity) => (
                    <div
                      key={activity.id}
                      className="flex gap-4 bg-white p-4 rounded-lg shadow-sm"
                    >
                      {activity.imageUrl && (
                        <Image
                          src={activity.imageUrl}
                          alt={activity.title}
                          className="w-24 h-24 rounded-lg object-cover"
                          width={24}
                          height={24}
                        />
                      )}
                      <div>
                        <h3 className="text-lg font-semibold">
                          {activity.title}
                        </h3>
                        <p className="text-gray-600">{activity.description}</p>
                        {activity.viatorUrl && (
                          <a
                            href={activity.viatorUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline text-sm"
                          >
                            Book Activity
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </ScrollArea>
  );
};

export default Itinerary;
