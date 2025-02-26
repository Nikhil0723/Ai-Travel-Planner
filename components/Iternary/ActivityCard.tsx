import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import Image from "next/image";
import { Button } from "../ui/button";
import { Trip } from "@/types/Trip";

const TripActivities = ({ trip } :{trip : Trip}) => {
  if (!trip) return <p>No trip data available.</p>;

  let dayOffset = 0;
  const daysMap = new Map();

  trip.cities.forEach((city) => {
    city.itinerary.forEach((activity) => {
      if (!activity) return;

      const globalDay = dayOffset + activity.day;
      if (!daysMap.has(globalDay)) {
        daysMap.set(globalDay, []);
      }
      daysMap.get(globalDay)?.push({ activity, cityName: city.name });
    });
    dayOffset += city.duration;
  });

  return (
    <Accordion type="multiple" className="w-full">
      {[...daysMap.entries()].map(([day, dayData]) => (
        <AccordionItem key={day} value={`day-${day}`}>
          <AccordionTrigger className="hover:no-underline px-4">
            <div className="flex items-center gap-3">
              <h2 className="text-lg font-semibold">Day {day}</h2>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-4">
            {dayData.map(({ activity, cityName }) => (
              <div
                key={activity.id}
                className="grid grid-cols-[120px_1fr_auto] gap-4 p-4 mb-4 rounded-lg border hover:bg-muted/50 transition-colors"
              >
                {/* Image Section */}
                {activity.imageUrl ? (
                  <div className="relative aspect-square overflow-hidden rounded-lg">
                    <Image
                      src={activity.imageUrl}
                      alt={activity.name || "Activity image"}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 120px"
                    />
                  </div>
                ) : (
                  <div className="w-[120px] h-[120px] bg-gray-200 flex items-center justify-center text-sm">
                    No Image
                  </div>
                )}

                {/* Main Content */}
                <div className="space-y-2">
                  <h3 className="font-medium">
                    {activity.name || "Unknown Activity"}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {activity.description || "No description available"}
                  </p>
                  <p className="text-xs text-gray-500">City: {cityName}</p>

                  <div className="flex gap-2 mt-2">
                    {activity.entryFee && (
                      <Button variant="outline" size="sm">
                        {activity.entryFee}
                      </Button>
                    )}
                    {activity.additionalResources?.googleImageSearchUrl && (
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={
                            activity.additionalResources.googleImageSearchUrl
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Images
                        </a>
                      </Button>
                    )}
                    {activity.additionalResources?.youtubeVideos?.map(
                      (video, index) => (
                        <Button variant="outline" size="sm" asChild key={index}>
                          <a
                            href={video}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Video {index + 1}
                          </a>
                        </Button>
                      )
                    )}
                  </div>

                  {activity.tips && activity.tips.length > 0 && (
                    <div className="mt-4 pt-2 border-t">
                      <h4 className="text-sm font-medium mb-2">Tips</h4>
                      <div className="space-y-2">
                        {activity.tips.map((tip, index) => (
                          <div
                            key={index}
                            className="text-sm text-muted-foreground"
                          >
                            <strong>{tip.heading}:</strong> {tip.content}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <Button
                  variant="ghost"
                  size="sm"
                  className="self-start mt-1"
                  onClick={() => console.log("Swap", activity.id)}
                >
                  Swap
                </Button>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default TripActivities;
