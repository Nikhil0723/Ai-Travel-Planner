import { Trip } from "@/types/Trip";


export const dubaiTrip: Trip = {
  id: "dubai-2024",
  title: "Ultimate Dubai Experience",
  startDate: "2024-01-15",
  createdAt: "2023-12-01T10:00:00Z",
  interests: ["modern architecture", "luxury", "desert adventures"],
  city: {
    id: "dubai-uae",
    name: "Dubai",
    country: "United Arab Emirates",
    coordinates: { lat: 25.276987, lng: 55.296249 },
    duration: 5,
    itinerary: [
      {
        id: "day1-act1",
        name: "Burj Khalifa",
        description: "Visit the world's tallest building and observation deck",
        coordinates: { lat: 25.1975, lng: 55.2744 },
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Burj_Khalifa_%2816261395556%29.jpg",
        day: 1,
        activityNumber: 1,
        tips: [
          {
            heading: "Best Time",
            content: "Visit at sunset for stunning views"
          }
        ],
        additionalResources: {
          googleImageSearchUrl: "https://www.google.com/search?q=burj+khalifa&tbm=isch",
          youtubeVideos: ["https://www.youtube.com/watch?v=2aBTO1a0J8w"]
        }
      },
      {
        id: "day1-act2",
        name: "Dubai Mall",
        description: "Explore the world's largest shopping mall",
        coordinates: { lat: 25.1972, lng: 55.2794 },
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/07/The_Dubai_Mall.jpg",
        day: 1,
        activityNumber: 2,
        additionalResources: {
          googleImageSearchUrl: "https://www.google.com/search?q=dubai+mall&tbm=isch",
          youtubeVideos: ["https://www.youtube.com/watch?v=GJM7aCasta8"]
        }
      },
      {
        id: "day2-act1",
        name: "Desert Safari",
        description: "Experience dune bashing and Bedouin camp dinner",
        coordinates: { lat: 24.9500, lng: 55.4500 },
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/74/Dubai_Desert_Safari.jpg",
        day: 2,
        activityNumber: 1,
        tips: [
          {
            heading: "Clothing",
            content: "Wear comfortable clothes and closed shoes"
          }
        ],
        additionalResources: {
          googleImageSearchUrl: "https://www.google.com/search?q=dubai+desert+safari&tbm=isch",
          youtubeVideos: ["https://www.youtube.com/watch?v=6XaxjWqWnWs"]
        }
      },
      {
        id: "day3-act1",
        name: "Palm Jumeirah",
        description: "Visit the iconic palm-shaped artificial island",
        coordinates: { lat: 25.1123, lng: 55.1389 },
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/09/Palm_Jumeirah%2C_Dubai-UAE.jpg",
        day: 3,
        activityNumber: 1,
        additionalResources: {
          googleImageSearchUrl: "https://www.google.com/search?q=palm+jumeirah&tbm=isch",
          youtubeVideos: ["https://www.youtube.com/watch?v=6XaxjWqWnWs"]
        }
      },
      {
        id: "day3-act2",
        name: "Atlantis The Palm",
        description: "Luxury resort with aquatic attractions",
        coordinates: { lat: 25.1305, lng: 55.1178 },
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Atlantis_The_Palm%2C_Dubai_%2849508241132%29.jpg",
        day: 3,
        activityNumber: 2,
        additionalResources: {
          googleImageSearchUrl: "https://www.google.com/search?q=atlantis+the+palm&tbm=isch",
          youtubeVideos: ["https://www.youtube.com/watch?v=3VX6ZvEOV7w"]
        }
      },
      {
        id: "day4-act1",
        name: "Dubai Frame",
        description: "150m tall picture frame with panoramic views",
        coordinates: { lat: 25.2333, lng: 55.3044 },
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Dubai_Frame_2020.jpg",
        day: 4,
        activityNumber: 1,
        additionalResources: {
          googleImageSearchUrl: "https://www.google.com/search?q=dubai+frame&tbm=isch",
          youtubeVideos: ["https://www.youtube.com/watch?v=8VtG1lh0fV4"]
        }
      },
      {
        id: "day4-act2",
        name: "Dubai Creek",
        description: "Historic saltwater creek with traditional abras",
        coordinates: { lat: 25.2703, lng: 55.3075 },
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Dubai_Creek_%2833616505414%29.jpg",
        day: 4,
        activityNumber: 2,
        additionalResources: {
          googleImageSearchUrl: "https://www.google.com/search?q=dubai+creek&tbm=isch",
          youtubeVideos: ["https://www.youtube.com/watch?v=6dJ9VkLv5t4"]
        }
      },
      {
        id: "day5-act1",
        name: "Global Village",
        description: "Cultural and entertainment destination",
        coordinates: { lat: 25.0525, lng: 55.3628 },
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Global_Village_Dubai_entrance.jpg",
        day: 5,
        activityNumber: 1,
        tips: [
          {
            heading: "Timing",
            content: "Visit in the evening for cooler temperatures"
          }
        ],
        additionalResources: {
          googleImageSearchUrl: "https://www.google.com/search?q=global+village+dubai&tbm=isch",
          youtubeVideos: ["https://www.youtube.com/watch?v=0K8qVv4t_9Q"]
        }
      }
    ],
    temperatureData: [],
    monthlyInsights: []
  }
} as Trip;