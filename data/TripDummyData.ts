import { Trip } from "@/types/Trip";

export const dummyTrip: Trip[] = [
  {
    id: "trip005",
    title: "Tokyo Adventure",
    startDate: "2025-09-15",
    createdAt: "2025-02-26",
    interests: ["culture", "food", "technology"],
    coverImageUrl: "https://example.com/tokyo.jpg",
    totalBudgetEstimate: "$2000",
    cities: [
      {
        id: "tokyo",
        name: "Tokyo",
        country: "Japan",
        coordinates: { lat: 35.682839, lng: 139.759455 },
        duration: 3,
        itinerary: [
          {
            id: "activity1",
            name: "Shibuya Crossing & Hachiko Statue",
            description:
              "Experience the world's busiest pedestrian crossing and visit the iconic Hachiko Statue.",
            coordinates: { lat: 35.6595, lng: 139.7005 },
            imageUrl: "https://example.com/shibuya.jpg",
            type: "landmark",
            entryFee: "Free",
            openingHours: "Open 24/7",
            day: 1,
            activityNumber: 1,
            startTime: "10:00 AM",
            endTime: "11:00 AM",
            transportOptions: [
              {
                mode: "public-transport",
                duration: "15 min",
                costEstimate: "$2",
              },
            ],
            nearbyRestaurants: [
              {
                name: "Ichiran Ramen",
                cuisine: ["Japanese"],
                priceRange: "$$",
              },
            ],
            tips: [
              {
                heading: "Best Time to Visit",
                content: "Morning hours are less crowded.",
                category: "logistical",
              },
            ],
            additionalResources: {
              googleImageSearchUrl:
                "https://www.google.com/search?q=Shibuya+Crossing",
              youtubeVideos: ["https://youtu.be/example"],
            },
          },
          {
            id: "activity2",
            name: "Meiji Shrine",
            description:
              "A peaceful shrine in the heart of Tokyo, surrounded by a lush forest.",
            coordinates: { lat: 35.6764, lng: 139.6993 },
            imageUrl: "https://example.com/meiji.jpg",
            type: "landmark",
            entryFee: "Free",
            openingHours: "05:00 AM - 06:00 PM",
            day: 1,
            activityNumber: 2,
            startTime: "12:00 PM",
            endTime: "01:30 PM",
            transportOptions: [{ mode: "walk", duration: "15 min" }],
            nearbyRestaurants: [
              { name: "Sushi Zanmai", cuisine: ["Japanese"], priceRange: "$$" },
            ],
            tips: [
              {
                heading: "Photography Tip",
                content: "Best lighting in the morning.",
                category: "cultural",
              },
            ],
            additionalResources: {
              googleImageSearchUrl:
                "https://www.google.com/search?q=Meiji+Shrine",
              youtubeVideos: ["https://youtu.be/example"],
            },
          },
        ],
        temperatureData: [
          {
            date: "2025-09-15",
            temperature: 28,
            condition: "sunny",
            humidity: 60,
            uvIndex: 7,
          },
          {
            date: "2025-09-16",
            temperature: 27,
            condition: "cloudy",
            humidity: 65,
            uvIndex: 6,
          },
          {
            date: "2025-09-17",
            temperature: 26,
            condition: "rainy",
            humidity: 70,
            uvIndex: 4,
          },
        ],
        monthlyInsights: [
          {
            month: "September",
            description:
              "Mild and comfortable weather, with occasional typhoons.",
            averageHigh: 28,
            averageLow: 20,
            rainfall: 150,
            events: ["Tokyo Game Show", "Autumn Festivals"],
          },
        ],
        publicTransportTips:
          "Get a Suica or Pasmo card for easy travel on Tokyo Metro.",
      },
    ],
  },
  {
    id: "trip001",
    title: "Dubai Adventure",
    startDate: "2025-10-10",
    createdAt: "2025-02-26",
    interests: ["luxury", "shopping", "culture"],
    coverImageUrl: "https://example.com/dubai.jpg",
    totalBudgetEstimate: "$2500",
    cities: [
      {
        id: "dubai",
        name: "Dubai",
        country: "UAE",
        coordinates: { lat: 25.276987, lng: 55.296249 },
        duration: 3,
        itinerary: [
          // 🌟 Day 1 - Exploring Modern Dubai
          {
            id: "activity1",
            name: "Burj Khalifa & Dubai Mall",
            description:
              "Visit the world's tallest building and shop at Dubai Mall.",
            coordinates: { lat: 25.1972, lng: 55.2744 },
            imageUrl: "https://example.com/burjkhalifa.jpg",
            type: "landmark",
            entryFee: "$40",
            openingHours: "09:00 AM - 11:00 PM",
            day: 1,
            activityNumber: 1,
            startTime: "10:00 AM",
            endTime: "01:00 PM",
            transportOptions: [
              { mode: "taxi", duration: "15 min", costEstimate: "$10" },
            ],
            nearbyRestaurants: [
              {
                name: "At.mosphere",
                cuisine: ["Fine Dining"],
                priceRange: "$$$",
              },
            ],
            tips: [
              {
                heading: "Best View",
                content: "Visit at sunset for stunning views.",
                category: "logistical",
              },
            ],
            additionalResources: {
              googleImageSearchUrl:
                "https://www.google.com/search?q=Burj+Khalifa",
              youtubeVideos: ["https://youtu.be/example"],
            },
          },
          {
            id: "activity2",
            name: "Dubai Fountain Show",
            description:
              "Watch the mesmerizing fountain show at the base of Burj Khalifa.",
            coordinates: { lat: 25.1972, lng: 55.275 },
            imageUrl: "https://example.com/fountain.jpg",
            type: "attraction",
            entryFee: "Free",
            openingHours: "06:00 PM - 11:00 PM",
            day: 1,
            activityNumber: 2,
            startTime: "07:00 PM",
            endTime: "08:00 PM",
            transportOptions: [{ mode: "walk", duration: "5 min" }],
            nearbyRestaurants: [
              { name: "Ewaan", cuisine: ["Middle Eastern"], priceRange: "$$$" },
            ],
            tips: [
              {
                heading: "Crowd Tip",
                content: "Arrive 30 minutes early for a good spot.",
                category: "logistical",
              },
            ],
            additionalResources: {
              googleImageSearchUrl:
                "https://www.google.com/search?q=Dubai+Fountain",
              youtubeVideos: ["https://youtu.be/example"],
            },
          },

          // 🌟 Day 2 - Desert & Culture
          {
            id: "activity3",
            name: "Desert Safari",
            description:
              "Experience dune bashing, camel rides, and traditional BBQ dinner.",
            coordinates: { lat: 24.9876, lng: 55.4123 },
            imageUrl: "https://example.com/desertsafari.jpg",
            type: "nature",
            entryFee: "$70",
            openingHours: "03:00 PM - 09:00 PM",
            day: 2,
            activityNumber: 1,
            startTime: "03:00 PM",
            endTime: "09:00 PM",
            transportOptions: [
              {
                mode: "car",
                duration: "1 hour",
                costEstimate: "$50 (tour package)",
              },
            ],
            nearbyRestaurants: [
              {
                name: "Desert Camp Buffet",
                cuisine: ["Arabic"],
                priceRange: "$$",
              },
            ],
            tips: [
              {
                heading: "Dress Code",
                content: "Wear loose, comfortable clothing.",
                category: "cultural",
              },
            ],
            additionalResources: {
              googleImageSearchUrl:
                "https://www.google.com/search?q=Dubai+Desert+Safari",
              youtubeVideos: ["https://youtu.be/example"],
            },
          },

          // 🌟 Day 3 - Old Dubai & Markets
          {
            id: "activity4",
            name: "Gold Souk & Spice Souk",
            description:
              "Explore Dubai's famous traditional markets for gold, spices, and perfumes.",
            coordinates: { lat: 25.2695, lng: 55.3075 },
            imageUrl: "https://example.com/goldsouk.jpg",
            type: "shopping",
            entryFee: "Free",
            openingHours: "10:00 AM - 10:00 PM",
            day: 3,
            activityNumber: 1,
            startTime: "11:00 AM",
            endTime: "01:00 PM",
            transportOptions: [
              {
                mode: "public-transport",
                duration: "20 min",
                costEstimate: "$2",
              },
            ],
            nearbyRestaurants: [
              {
                name: "Al Ustad Special Kebab",
                cuisine: ["Persian"],
                priceRange: "$$",
              },
            ],
            tips: [
              {
                heading: "Bargaining",
                content: "Negotiate for the best prices!",
                category: "budget",
              },
            ],
            additionalResources: {
              googleImageSearchUrl:
                "https://www.google.com/search?q=Dubai+Gold+Souk",
              youtubeVideos: ["https://youtu.be/example"],
            },
          },
        ],
        temperatureData: [
          {
            date: "2025-10-10",
            temperature: 35,
            condition: "sunny",
            humidity: 50,
            uvIndex: 9,
          },
          {
            date: "2025-10-11",
            temperature: 34,
            condition: "sunny",
            humidity: 52,
            uvIndex: 8,
          },
          {
            date: "2025-10-12",
            temperature: 33,
            condition: "cloudy",
            humidity: 55,
            uvIndex: 7,
          },
        ],
        monthlyInsights: [
          {
            month: "October",
            description: "Pleasant weather with mild temperatures.",
            averageHigh: 35,
            averageLow: 25,
            rainfall: 5,
            events: ["Dubai Fitness Challenge", "Diwali Celebrations"],
          },
        ],
        publicTransportTips: "Use the Dubai Metro for cheap and fast travel.",
      },
    ],
  },
  
];
