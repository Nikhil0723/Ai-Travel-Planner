"use client";
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import Activity from "@/components/Iternary/Activity";
import { Trip } from "@/types/Trip";
import Map from "@/components/Map/Map";
import mumbaiTrip from "@/data/TripDummyData";

export default function ItineraryPage() {
  const [activeTab, setActiveTab] = useState<string>("activity");
  const [trip, setTrip] = useState<Trip>(mumbaiTrip);
  return (
    <div className="container mx-auto py-4">
      <div className="bg-blue-500 text-white flex flex-col items-center justify-center h-72 shadow-lg">
        <h1 className="text-3xl font-bold">Dubai, United Arab Emirates 🇦🇪</h1>
      </div>

      {/* Tabs */}
      <Tabs
        defaultValue={activeTab}
        onValueChange={setActiveTab}
        className="mt-6"
      >
        <TabsList className="flex space-x-2 p-2 bg-gray-100 rounded-t-lg border-b border-gray-200">
          <TabsTrigger
            value="activity"
            className="px-4 py-2 rounded-md transition-colors hover:bg-gray-200 data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:border-b-2 data-[state=active]:border-blue-500"
          >
            Activity
          </TabsTrigger>
          <TabsTrigger
            value="map"
            className="px-4 py-2 rounded-md transition-colors hover:bg-gray-200 data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:border-b-2 data-[state=active]:border-blue-500"
          >
            Map
          </TabsTrigger>
          <TabsTrigger
            value="edit"
            className="px-4 py-2 rounded-md transition-colors hover:bg-gray-200 data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:border-b-2 data-[state=active]:border-blue-500"
          >
            Edit
          </TabsTrigger>
          <TabsTrigger
            value="settings"
            className="px-4 py-2 rounded-md transition-colors hover:bg-gray-200 data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:border-b-2 data-[state=active]:border-blue-500"
          >
            Settings
          </TabsTrigger>
        </TabsList>

        {/* Activity Tab */}
        <TabsContent
          value="activity"
          className="mt-4 p-4 bg-white rounded-b-lg shadow-sm"
        >
          <Activity trip={trip} />
        </TabsContent>

        <TabsContent value="map" className="mt-4">
          <Map trip={trip} />
        </TabsContent>

        {/* Edit Tab */}
        <TabsContent
          value="edit"
          className="mt-4 p-6 bg-white rounded-lg shadow-sm"
        >
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Trip Name
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded-md"
                defaultValue="Dubai Adventure"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">City</label>
              <input
                type="text"
                className="w-full p-2 border rounded-md"
                defaultValue="Dubai"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Days</label>
              <input
                type="number"
                className="w-full p-2 border rounded-md"
                defaultValue="5"
              />
            </div>
            <Button className="mt-4">Save Changes</Button>
          </div>
        </TabsContent>

        {/* Settings Tab */}
        <TabsContent
          value="settings"
          className="mt-4 p-6 bg-white rounded-lg shadow-sm"
        >
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="font-medium">Privacy Settings</h3>
              <div className="flex items-center space-x-2">
                <Switch id="public-trip" />
                <label htmlFor="public-trip" className="text-sm">
                  Make trip public
                </label>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-medium">Notifications</h3>
              <div className="flex items-center space-x-2">
                <Switch id="email-notifications" />
                <label htmlFor="email-notifications" className="text-sm">
                  Email notifications
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="push-notifications" />
                <label htmlFor="push-notifications" className="text-sm">
                  Push notifications
                </label>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-medium">Danger Zone</h3>
              <Button variant="destructive">Delete Trip</Button>
              <p className="text-sm text-gray-500">
                Permanently delete this trip and all its data
              </p>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
