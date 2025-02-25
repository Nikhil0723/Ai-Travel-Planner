import { Trip } from "@/types/Trip";

const mumbaiTrip: Trip = {
  id: "mumbai-2024",
  title: "Mumbai City Explorer",
  startDate: "2024-02-01",
  createdAt: "2023-12-15T09:30:00Z",
  city: {
    id: "mumbai-india",
    name: "Mumbai",
    country: "India",
    coordinates: { lat: 19.0760, lng: 72.8777 },
    duration: 3,
    itinerary: [
      {
        id: "day1-act1",
        name: "Gateway of India",
        description: "Historic arch-monument built during the 20th century in Mumbai",
        coordinates: { lat: 18.9217, lng: 72.8344 },
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Gateway_of_India_-_Mumbai.jpg",
        day: 1,
        activityNumber: 1,
        tips: [
          {
            heading: "Best Time",
            content: "Visit early morning to avoid crowds"
          }
        ],
        additionalResources: {
          googleImageSearchUrl: "https://www.google.com/search?q=gateway+of+india+mumbai&tbm=isch",
          youtubeVideos: ["https://www.youtube.com/watch?v=8yZ8_6X6yqA"]
        }
      },
      {
        id: "day1-act2",
        name: "Chhatrapati Shivaji Maharaj Terminus",
        description: "UNESCO World Heritage Site and historic railway station",
        coordinates: { lat: 18.9440, lng: 72.8359 },
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Chhatrapati_Shivaji_Terminus_%28Victoria_Terminus%29_-_Mumbai.jpg",
        day: 1,
        activityNumber: 2,
        additionalResources: {
          googleImageSearchUrl: "https://www.google.com/search?q=chhatrapati+shivaji+terminus&tbm=isch",
          youtubeVideos: ["https://www.youtube.com/watch?v=K5Nv4s0Xxq4"]
        }
      },
      {
        id: "day2-act1",
        name: "Chhatrapati Shivaji Maharaj Vastu Sangrahalaya",
        description: "Premier art and history museum in South Mumbai",
        coordinates: { lat: 18.9269, lng: 72.8325 },
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/21/Chhatrapati_Shivaji_Maharaj_Vastu_Sangrahalaya_%2842086421621%29.jpg",
        day: 2,
        activityNumber: 1,
        entryFee: "₹100 for adults",
        additionalResources: {
          googleImageSearchUrl: "https://www.google.com/search?q=chhatrapati+shivaji+museum+mumbai&tbm=isch",
          youtubeVideos: ["https://www.youtube.com/watch?v=2h7qU1f0_8Q"]
        }
      },
      {
        id: "day2-act2",
        name: "Marine Drive",
        description: "3.6km long boulevard along the coast of Arabian Sea",
        coordinates: { lat: 18.9440, lng: 72.8237 },
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/57/Marine_Drive_Sunset.jpg",
        day: 2,
        activityNumber: 2,
        tips: [
          {
            heading: "Best Experience",
            content: "Visit during sunset for amazing views"
          }
        ],
        additionalResources: {
          googleImageSearchUrl: "https://www.google.com/search?q=marine+drive+mumbai&tbm=isch",
          youtubeVideos: ["https://www.youtube.com/watch?v=H3z2gXv3HhM"]
        }
      },
      {
        id: "day3-act1",
        name: "Bandra-Worli Sea Link",
        description: "Cable-stayed bridge connecting Bandra to Worli",
        coordinates: { lat: 19.0399, lng: 72.8204 },
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/93/Bandra_Worli_Sea_Link_Panorama.jpg",
        day: 3,
        activityNumber: 1,
        additionalResources: {
          googleImageSearchUrl: "https://www.google.com/search?q=bandra+worli+sea+link&tbm=isch",
          youtubeVideos: ["https://www.youtube.com/watch?v=1wN0h5C5fE0"]
        }
      },
      {
        id: "day3-act2",
        name: "Chor Bazaar",
        description: "Famous antiques and vintage items market",
        coordinates: { lat: 18.9560, lng: 72.8346 },
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/43/Chor_Bazaar_Arch.JPG",
        day: 3,
        activityNumber: 2,
        tips: [
          {
            heading: "Bargaining",
            content: "Start negotiating from 30% of quoted price"
          }
        ],
        additionalResources: {
          googleImageSearchUrl: "https://www.google.com/search?q=chor+bazaar+mumbai&tbm=isch",
          youtubeVideos: ["https://www.youtube.com/watch?v=Uj2QoBm6fK4"]
        }
      }
    ],
    temperatureData: [
      { date: "2024-02-01", temperature: 28, condition: "sunny" },
      { date: "2024-02-02", temperature: 29, condition: "sunny" },
      { date: "2024-02-03", temperature: 30, condition: "sunny" }
    ],
    monthlyInsights: [
      {
        month: "February",
        description: "Pleasant weather with average temperatures around 28°C",
        averageHigh: 30,
        averageLow: 20
      }
    ]
  }
} as Trip;

export default mumbaiTrip;