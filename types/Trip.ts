// Coordinates type
interface Coordinates {
  lat: number;
  lng: number;
}

// Daily temperature forecast for a city
interface TemperatureData {
  date: string; // YYYY-MM-DD
  temperature: number; // Temperature in °C
}

// Monthly city insights (weather & activities)
interface MonthlyCityInfo {
  month: string; // e.g., "January"
  description: string; // Weather and activity summary
}

// Additional resources like Google Images & YouTube videos
interface AdditionalResources {
  googleImageSearchUrl: string;
  youtubeVideos: string[]; // List of video URLs
}

// Travel tips for each place
interface TravelTip {
  heading: string;
  content: string;
}

// Itinerary item for a place
interface ItineraryItem {
  id: string;
  name: string; 
  description: string;
  coordinates: Coordinates;
  imageUrl: string;
  entryFee?: string;
  bestTimeToVisit?: string;
  openingHours?: string;
  accessibility?: string;
  photographyInfo?: string;
  tips: TravelTip[];
  additionalResources: AdditionalResources;
  day: number; 
  activityNumber: number;
  startTime?: string; 
  endTime?: string;
  transport?: string;
  costEstimate?: string; // Optional (e.g., "$15 per person")
  nearbyRestaurants?: { name: string; url?: string }[]; // Optional list of food places
}

// City details (includes weather & itinerary)
interface TripCity {
  id: string;
  name: string;
  country: string;
  coordinates: Coordinates;
  duration: number; 
  interests: string[]; 
  itinerary: ItineraryItem[]; 
  temperatureData: TemperatureData[]; 
  monthlyInsights: MonthlyCityInfo[]; 
}

// Base trip structure
interface BaseTrip {
  id: string;
  title: string;
  startDate: string;
  createdAt: string;
  interests: string[];
}

// Single-city trip
interface SingleCityTrip extends BaseTrip {
  city: TripCity;
}

// Multi-city trip
interface MultiCityTrip extends BaseTrip {
  cities: TripCity[];
}

// Combined type for a trip
export type Trip = SingleCityTrip | MultiCityTrip;
