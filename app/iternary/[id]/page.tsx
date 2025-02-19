"use client"
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import Image from "next/image";
import jsPDF from "jspdf";
import "jspdf-autotable";

interface Activity {
  name: string;
  description: string;
  image: string;
}

interface DayItinerary {
  activities: Activity[];
}

interface Trip {
  city: string;
  days: number;
  itinerary: DayItinerary[];
}

const dummyTrip: Trip = {
  city: "Paris",
  days: 5,
  itinerary: [
    { activities: [{ name: "Eiffel Tower Visit", description: "A tour of the iconic Eiffel Tower.", image: "/images/eiffel.jpg" }] },
    { activities: [{ name: "Louvre Museum", description: "Explore the world-famous museum.", image: "/images/louvre.jpg" }] },
    { activities: [{ name: "Seine River Cruise", description: "Enjoy a scenic boat ride on the Seine.", image: "/images/seine.jpg" }] },
    { activities: [{ name: "Montmartre Walk", description: "Stroll through the artistic Montmartre district.", image: "/images/montmartre.jpg" }] },
    { activities: [{ name: "Versailles Palace", description: "Day trip to the extravagant palace.", image: "/images/versailles.jpg" }] }
  ]
};

export default function ItineraryPage() {
  const [trip] = useState<Trip>(dummyTrip);
  const [activeTab, setActiveTab] = useState<string>("activity");

  const swapActivity = (dayIndex: number, activityIndex: number) => {
    alert(`Swap requested for Day ${dayIndex + 1}, Activity ${activityIndex + 1}`);
  };

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text(`${trip.city} Trip Itinerary`, 20, 20);
    
    trip.itinerary.forEach((day, index) => {
      doc.setFontSize(14);
      doc.text(`Day ${index + 1}`, 20, 30 + index * 20);
      
      day.activities.forEach((activity, aIndex) => {
        doc.setFontSize(12);
        doc.text(`${activity.name}: ${activity.description}`, 30, 40 + index * 20 + aIndex * 10);
      });
    });
    
    doc.save(`${trip.city}_itinerary.pdf`);
  };

  return (
    <div className="container mx-auto p-4">
      {/* Hero Banner */}
      <div className="bg-blue-500 text-white text-center p-6 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold">{trip.city} Trip</h1>
        <p className="text-lg">{trip.days} Days</p>
      </div>
      
      {/* Tabs */}
      <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="mt-6">
        <TabsList className="flex space-x-4 border-b">
          <TabsTrigger value="activity">Activity</TabsTrigger>
          <TabsTrigger value="map">Map</TabsTrigger>
        </TabsList>
        
        {/* Activity Tab */}
        <TabsContent value="activity" className="mt-4">
          <Accordion type="single" collapsible>
            {trip.itinerary.map((day, dayIndex) => (
              <AccordionItem key={dayIndex} value={`day-${dayIndex}`}>
                <AccordionTrigger>Day {dayIndex + 1}</AccordionTrigger>
                <AccordionContent>
                  {day.activities.map((activity, activityIndex) => (
                    <Card key={activityIndex} className="mb-2 flex items-center space-x-4">
                      <Image src={activity.image} alt={activity.name} width={100} height={100} className="rounded-lg" />
                      <div className="flex-grow">
                        <CardHeader className="font-semibold">{activity.name}</CardHeader>
                        <CardContent>{activity.description}</CardContent>
                      </div>
                      <Button onClick={() => swapActivity(dayIndex, activityIndex)}>Swap</Button>
                    </Card>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <Button onClick={downloadPDF} className="mt-4">Download PDF</Button>
        </TabsContent>
        
        {/* Map Tab */}
        <TabsContent value="map" className="mt-4">
          <div className="h-96 bg-gray-200 flex items-center justify-center rounded-lg">
            <p>Map Placeholder</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
