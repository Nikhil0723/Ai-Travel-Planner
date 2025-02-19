// src/types/Trip.ts

export interface Activity {
    id: string;
    title: string;
    description: string;
    imageUrl?: string | null;
    viatorUrl?: string | null;
  }
  
  export interface ItineraryDay {
    id: string;
    day: number;
    city?: string; // Only for multi-city trips
    activities: Activity[];
  }
  
  export interface City {
    name: string;
    countryCode: string;
    description: string;
    imageUrl: string;
  }
  
  export interface CreatedBy {
    username: string;
    profileLink: string;
  }
  
  export interface Trip {
    id: string;
    title: string;
    type: "single-city" | "multi-city";
    city?: City;
    cities?: City[]; // Only for multi-city trips
    duration: string;
    interests: string[];
    createdBy: CreatedBy;
    itinerary?: ItineraryDay[]; // New field for itinerary details
  }
  