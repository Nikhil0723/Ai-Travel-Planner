interface Coordinates {
  lat: number;
  lng: number;
  altitude?: number;
}

interface TemperatureData {
  date: string;
  temperature: number;
  condition: 'sunny' | 'rainy' | 'cloudy' | 'snow' | 'windy';
  humidity?: number;
  precipitationChance?: number;
  uvIndex?: number;
}

interface MonthlyCityInfo {
  month: string;
  description: string;
  averageHigh?: number;
  averageLow?: number;
  rainfall?: number;
  events?: string[];
}

interface AdditionalResources {
  googleImageSearchUrl: string;
  youtubeVideos: string[];
  officialWebsite?: string;
  bookingLinks?: string[];
}

interface TravelTip {
  heading: string;
  content: string;
  category?: 'safety' | 'budget' | 'cultural' | 'logistical';
}

interface TransportOption {
  mode: 'walk' | 'taxi' | 'public-transport' | 'car' | 'bicycle';
  duration: string;
  costEstimate?: string;
  bookingUrl?: string;
}

export interface ItineraryItem {
  id: string;
  name: string;
  description: string;
  coordinates: Coordinates;
  imageUrl: string;
  type?: 'attraction' | 'museum' | 'nature' | 'shopping' | 'landmark';
  entryFee?: string;
  openingHours?: string;
  accessibility?: {
    wheelchairAccessible: boolean;
    elevatorAvailable?: boolean;
  };
  photographyInfo?: {
    restrictions?: string[];
    bestSpots?: string[];
  };
  tips: TravelTip[];
  additionalResources: AdditionalResources;
  day: number;
  activityNumber: number;
  startTime?: string;
  endTime?: string;
  transportOptions?: TransportOption[];
  nearbyRestaurants?: {
    name: string;
    cuisine?: string[];
    priceRange?: '$' | '$$' | '$$$';
  }[];
}

interface TripCity {
  id: string;
  name: string;
  country: string;
  coordinates: Coordinates;
  duration: number;
  itinerary: ItineraryItem[];
  temperatureData: TemperatureData[];
  monthlyInsights: MonthlyCityInfo[];
  publicTransportTips?: string;
}

interface InterCityTravel {
  fromCityId: string;
  toCityId: string;
  transportOptions: TransportOption[];
}

export interface Trip {
  id: string;
  title: string;
  startDate: string;
  createdAt: string;
  interests: string[];
  coverImageUrl?: string;
  totalBudgetEstimate?: string;
  cities: TripCity[]; // Single or multiple cities in an array
  transportBetweenCities?: InterCityTravel[]; // Only applies if it's a multi-city trip
}
