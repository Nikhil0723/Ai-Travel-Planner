// src/data/trips.ts

import { Trip } from "@/types/Trip";

const trips: Trip[] = [
  // Single-City Trip: Paris
  {
    id: "s1",
    title: "Exploring Paris",
    type: "single-city",
    city: {
      name: "Paris",
      countryCode: "🇫🇷",
      description: "The City of Light, known for its iconic landmarks, romantic ambiance, and world-class cuisine.",
      imageUrl: "https://source.unsplash.com/random/?paris",
    },
    duration: "5 days",
    interests: ["food", "museums", "sightseeing"],
    createdBy: {
      username: "Alice",
      profileLink: "/user/alice_traveler",
    },
    itinerary: [
      {
        id: "paris-day1",
        day: 1,
        activities: [
          {
            id: "activity1",
            title: "Visit the Eiffel Tower",
            description: "Start your trip by visiting the Eiffel Tower and enjoying the view from the top.",
            imageUrl: "https://source.unsplash.com/random/?eiffel-tower",
            viatorUrl: "https://www.viator.com/searchResults/all?text=Eiffel%20Tower",
          },
          {
            id: "activity2",
            title: "Explore the Louvre Museum",
            description: "See the Mona Lisa and other famous artworks at the Louvre.",
            imageUrl: "https://source.unsplash.com/random/?louvre-museum",
          },
        ],
      },
      {
        id: "paris-day2",
        day: 2,
        activities: [
          {
            id: "activity3",
            title: "Walk Along the Seine River",
            description: "Enjoy a relaxing walk along the Seine and stop for coffee at a riverside café.",
            imageUrl: "https://source.unsplash.com/random/?seine-river",
          },
        ],
      },
    ],
  },

  // Multi-City Trip: India Cultural Tour
  {
    id: "m1",
    title: "India Cultural Tour",
    type: "multi-city",
    cities: [
      {
        name: "Delhi",
        countryCode: "🇮🇳",
        description: "The capital city of India, known for its historical monuments and vibrant culture.",
        imageUrl: "https://source.unsplash.com/random/?delhi",
      },
      {
        name: "Jaipur",
        countryCode: "🇮🇳",
        description: "The Pink City, famous for its royal palaces and rich heritage.",
        imageUrl: "https://source.unsplash.com/random/?jaipur",
      },
      {
        name: "Varanasi",
        countryCode: "🇮🇳",
        description: "A spiritual hub on the banks of the Ganges River, known for its ancient temples.",
        imageUrl: "https://source.unsplash.com/random/?varanasi",
      },
    ],
    duration: "12 days",
    interests: ["history", "spirituality", "culture"],
    createdBy: {
      username: "Nikhil",
      profileLink: "/user/nikhil_vishwakarma757",
    },
    itinerary: [
      {
        id: "delhi-day1",
        day: 1,
        city: "Delhi",
        activities: [
          {
            id: "activity4",
            title: "Visit Red Fort",
            description: "Explore the iconic Red Fort, a symbol of India's history.",
            imageUrl: "https://source.unsplash.com/random/?red-fort",
          },
        ],
      },
      {
        id: "jaipur-day3",
        day: 3,
        city: "Jaipur",
        activities: [
          {
            id: "activity5",
            title: "Explore Amer Fort",
            description: "Discover the grand Amer Fort and its rich history.",
            imageUrl: "https://source.unsplash.com/random/?amer-fort",
          },
        ],
      },
    ],
  },
];

export default trips;
