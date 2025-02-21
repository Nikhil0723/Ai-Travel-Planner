export  const dummyTripData = [{
  "id": "trip-mumbai-001",
  "title": "Mumbai Exploration",
  "startDate": "2025-05-15",
  "createdAt": "2025-02-21T12:30:00Z",
  "tripType": "single",
  "interests": ["Culture", "History", "Food", "Beaches"],
  "cities": [
    {
      "id": "city-mumbai-001",
      "name": "Mumbai",
      "country": "India",
      "coordinates": { "lat": 19.076, "lng": 72.8777 },
      "duration": 3,
      "interests": ["Culture", "History", "Food", "Beaches"],
      "temperatureData": [
        { "date": "2025-05-15", "temperature": 32 },
        { "date": "2025-05-16", "temperature": 33 },
        { "date": "2025-05-17", "temperature": 31 }
      ],
      "monthlyInsights": [
        { "month": "May", "description": "Hot and humid; best to explore in the early mornings and evenings." }
      ],
      "places": [
        {
          "id": "place-001",
          "name": "Gateway of India",
          "description": "Iconic landmark overlooking the Arabian Sea, rich in historical significance.",
          "coordinates": { "lat": 18.921984, "lng": 72.834654 },
          "imageUrl": "https://example.com/gateway-of-india.jpg",
          "entryFee": "Free",
          "bestTimeToVisit": "Morning",
          "openingHours": "Open 24 hours",
          "day": 1,
          "activityNumber": 1,
          "schedule": { "startTime": "9:00 AM", "endTime": "10:30 AM" },
          "transport": "Taxi/Auto",
          "costEstimate": "INR 200"
        },
        {
          "id": "place-002",
          "name": "Chhatrapati Shivaji Maharaj Terminus",
          "description": "UNESCO-listed railway station known for its Victorian Gothic architecture.",
          "coordinates": { "lat": 18.9402, "lng": 72.8354 },
          "imageUrl": "https://example.com/cst.jpg",
          "entryFee": "Free",
          "bestTimeToVisit": "Afternoon",
          "openingHours": "Open 24 hours",
          "day": 1,
          "activityNumber": 2,
          "schedule": { "startTime": "11:00 AM", "endTime": "12:30 PM" },
          "transport": "Local Train/Taxi",
          "costEstimate": "INR 100"
        },
        {
          "id": "place-003",
          "name": "Juhu Beach",
          "description": "Famous beach known for its street food, sunsets, and celebrity residences.",
          "coordinates": { "lat": 19.088, "lng": 72.8263 },
          "imageUrl": "https://example.com/juhu-beach.jpg",
          "entryFee": "Free",
          "bestTimeToVisit": "Evening",
          "openingHours": "Open 24 hours",
          "day": 1,
          "activityNumber": 3,
          "schedule": { "startTime": "5:00 PM", "endTime": "7:00 PM" },
          "transport": "Taxi/Auto",
          "costEstimate": "INR 150"
        },
        {
          "id": "place-004",
          "name": "Elephanta Caves",
          "description": "Ancient rock-cut caves dedicated to Lord Shiva, accessible via ferry.",
          "coordinates": { "lat": 18.9633, "lng": 72.9316 },
          "imageUrl": "https://example.com/elephanta-caves.jpg",
          "entryFee": "INR 40 (Indians), INR 600 (Foreigners)",
          "bestTimeToVisit": "Morning",
          "openingHours": "9:00 AM - 5:30 PM",
          "day": 2,
          "activityNumber": 1,
          "schedule": { "startTime": "9:30 AM", "endTime": "12:00 PM" },
          "transport": "Ferry",
          "costEstimate": "INR 200"
        },
        {
          "id": "place-005",
          "name": "Marine Drive",
          "description": "Famous 3.6 km boulevard along the coastline, known for its evening views.",
          "coordinates": { "lat": 18.9431, "lng": 72.8233 },
          "imageUrl": "https://example.com/marine-drive.jpg",
          "entryFee": "Free",
          "bestTimeToVisit": "Evening",
          "openingHours": "Open 24 hours",
          "day": 2,
          "activityNumber": 2,
          "schedule": { "startTime": "5:30 PM", "endTime": "7:00 PM" },
          "transport": "Taxi/Auto",
          "costEstimate": "INR 100"
        },
        {
          "id": "place-006",
          "name": "Siddhivinayak Temple",
          "description": "Famous Hindu temple dedicated to Lord Ganesha.",
          "coordinates": { "lat": 19.0176, "lng": 72.8305 },
          "imageUrl": "https://example.com/siddhivinayak.jpg",
          "entryFee": "Free",
          "bestTimeToVisit": "Morning",
          "openingHours": "5:30 AM - 10:00 PM",
          "day": 3,
          "activityNumber": 1,
          "schedule": { "startTime": "8:00 AM", "endTime": "9:30 AM" },
          "transport": "Taxi/Auto",
          "costEstimate": "INR 150"
        }
      ]
    }
  ]
}
]