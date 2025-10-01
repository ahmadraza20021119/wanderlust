const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-118.7798, 34.0259], // [longitude, latitude]
    },
  },
  {
    title: "Modern Loft in Downtown Tokyo",
    description:
      "Experience the vibrant heart of Tokyo in this stylish and modern loft. Steps away from world-class dining and entertainment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG9reW98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Shibuya, Tokyo",
    country: "Japan",
    geometry: {
      type: "Point",
      coordinates: [139.7000, 35.6590],
    },
  },
  {
    title: "Secluded Mountain Cabin",
    description:
      "Unplug and unwind in this secluded cabin in the Canadian Rockies. Perfect for hiking, fishing, and stargazing.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FiaW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "Banff",
    country: "Canada",
    geometry: {
      type: "Point",
      coordinates: [-115.5708, 51.1784],
    },
  },
 
 {
    title: "Historic Apartment in Rome",
    description:
      "Live like a Roman in this beautiful apartment near the Colosseum. Full of historic charm with modern amenities.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cm9tZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Rome",
    country: "Italy",
    geometry: {
      type: "Point",
      coordinates: [12.4922, 41.8902],
    },
  },
  {
    title: "Luxury Desert Villa",
    description:
      "Indulge in luxury at this stunning desert villa with a private pool. An oasis of calm with breathtaking dune views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 4500,
    location: "Dubai",
    country: "United Arab Emirates",
    geometry: {
      type: "Point",
      coordinates: [55.2708, 25.2048],
    },
  },
  {
    title: "Rainforest Treehouse in Costa Rica",
    description:
      "Sleep among the treetops in this unique rainforest treehouse. Wake up to the sounds of howler monkeys and toucans.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1718627830094-1cd1fdfa193b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFpbiUyMGZvcmVzdCUyMHRyZWVob3VzZSUyMGluJTIwY29zdGElMjByaWNhfGVufDB8fDB8fHww",
    },
    price: 950,
    location: "La Fortuna",
    country: "Costa Rica",
    geometry: {
      type: "Point",
      coordinates: [-84.6441, 10.4718],
    },
  },
  {
 title: "Beachfront Bungalow in Bali",
 description: "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
 image: { 
filename: "listingimage", 
url:
 "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
 },
 price: 1800, 
location: "Bali,Indonesia",
 country: "Indonesia", 
geometry: {
      type: "Point",
      coordinates: [115.1889, 8.4095],
    },
},
{
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?...",
    },
    price: 1200,
    location: "New York City,United States",
    country: "United States",
    geometry: { type: "Point", coordinates: [-74.006, 40.7128] },
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?...",
    },
    price: 1000,
    location: "Aspen,United States",
    country: "United States",
    geometry: { type: "Point", coordinates: [-106.8175, 39.1911] },
  },
  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?...",
    },
    price: 2500,
    location: "Florence,Italy",
    country: "Italy",
    geometry: { type: "Point", coordinates: [11.2558, 43.7699] },
  },
  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?...",
    },
    price: 800,
    location: "Portland,United States",
    country: "United States",
    geometry: { type: "Point", coordinates: [-122.6765, 45.5231] },
  },
  {
    title: "Beachfront Paradise",
    description:
      "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?...",
    },
    price: 2000,
    location: "Cancun,Mexico",
    country: "Mexico",
    geometry: { type: "Point", coordinates: [-86.8515, 21.1619] },
  },
  {
    title: "Rustic Cabin by the Lake",
    description:
      "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?...",
    },
    price: 900,
    location: "Lake Tahoe,United States",
    country: "United States",
    geometry: { type: "Point", coordinates: [-120.0324, 39.0968] },
  },
  {
    title: "Luxury Penthouse with City Views",
    description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?...",
    },
    price: 3500,
    location: "Los Angeles,United States",
    country: "United States",
    geometry: { type: "Point", coordinates: [-118.2437, 34.0522] },
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description:
      "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?...",
    },
    price: 3000,
    location: "Verbier,Switzerland",
    country: "Switzerland",
    geometry: { type: "Point", coordinates: [7.2276, 46.0961] },
  },
  {
    title: "Safari Lodge in the Serengeti",
    description:
      "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?...",
    },
    price: 4000,
    location: "Serengeti National Park,Tanzania",
    country: "Tanzania",
    geometry: { type: "Point", coordinates: [34.6857, -2.3333] },
  },
  {
    title: "Historic Canal House",
    description:
      "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?...",
    },
    price: 1800,
    location: "Amsterdam,Netherlands",
    country: "Netherlands",
    geometry: { type: "Point", coordinates: [4.9041, 52.3676] },
  },
  {
    title: "Private Island Retreat",
    description:
      "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?...",
    },
    price: 10000,
    location: "Fiji,Fiji",
    country: "Fiji",
    geometry: { type: "Point", coordinates: [178.065, -17.7134] },
  },
  {
    title: "Charming Cottage in the Cotswolds",
    description:
      "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?...",
    },
    price: 1200,
    location: "Cotswolds,United Kingdom",
    country: "United Kingdom",
    geometry: { type: "Point", coordinates: [-1.72, 51.8333] },
  },
  {
    title: "Historic Brownstone in Boston",
    description:
      "Step back in time in this elegant historic brownstone located in the heart of Boston.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?...",
    },
    price: 2200,
    location: "Boston,United States",
    country: "United States",
    geometry: { type: "Point", coordinates: [-71.0589, 42.3601] },
  },
  {
    title: "Beachfront Bungalow in Bali",
    description:
      "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602391833977-358a52198938?...",
    },
    price: 1800,
    location: "Bali,Indonesia",
    country: "Indonesia",
    geometry: { type: "Point", coordinates: [115.1889, -8.4095] },
  },
  {
    title: "Mountain View Cabin in Banff",
    description:
      "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?...",
    },
    price: 1500,
    location: "Banff,Canada",
    country: "Canada",
    geometry: { type: "Point", coordinates: [-115.5708, 51.1784] },
  },
  {
    title: "Art Deco Apartment in Miami",
    description:
      "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?...",
    },
    price: 1600,
    location: "Miami,United States",
    country: "United States",
    geometry: { type: "Point", coordinates: [-80.1918, 25.7617] },
  },
  {
    title: "Tropical Villa in Phuket",
    description:
      "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?...",
    },
    price: 3000,
    location: "Phuket,Thailand",
    country: "Thailand",
    geometry: { type: "Point", coordinates: [98.3984, 7.8804] },
  },
  {
    title: "Historic Castle in Scotland",
    description:
      "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?...",
    },
    price: 4000,
    location: "Scottish Highlands,United Kingdom",
    country: "United Kingdom",
    geometry: { type: "Point", coordinates: [-4.2026, 57.12] },
  },
  {
    title: "Desert Oasis in Dubai",
    description:
      "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?...",
    },
    price: 5000,
    location: "Dubai,United Arab Emirates",
    country: "United Arab Emirates",
    geometry: { type: "Point", coordinates: [55.2708, 25.2048] },
  },
  {
    title: "Rustic Log Cabin in Montana",
    description:
      "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?...",
    },
    price: 1100,
    location: "Montana,United States",
    country: "United States",
    geometry: { type: "Point", coordinates: [-110.3626, 46.8797] },
  },
  {
    title: "Beachfront Villa in Greece",
    description:
      "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?...",
    },
    price: 2500,
    location: "Mykonos,Greece",
    country: "Greece",
    geometry: { type: "Point", coordinates: [25.3289, 37.4467] },
  },
  {
    title: "Eco-Friendly Treehouse Retreat",
    description:
      "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?...",
    },
    price: 750,
    location: "Costa Rica,Costa Rica",
    country: "Costa Rica",
    geometry: { type: "Point", coordinates: [-84.0739, 9.7489] },
  },
  {
    title: "Historic Cottage in Charleston",
    description:
      "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?...",
    },
    price: 1600,
    location: "Charleston,United States",
    country: "United States",
    geometry: { type: "Point", coordinates: [-79.9311, 32.7765] },
  },
  {
    title: "Modern Apartment in Tokyo",
    description:
      "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?...",
    },
    price: 2000,
    location: "Tokyo,Japan",
    country: "Japan",
    geometry: { type: "Point", coordinates: [139.6917, 35.6895] },
  },
  {
    title: "Lakefront Cabin in New Hampshire",
    description:
      "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?...",
    },
    price: 1200,
    location: "New Hampshire,United States",
    country: "United States",
    geometry: { type: "Point", coordinates: [-71.5724, 43.1939] },
  },
  {
    title: "Luxury Villa in the Maldives",
    description:
      "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?...",
    },
    price: 6000,
    location: "Maldives,Maldives",
    country: "Maldives",
    geometry: { type: "Point", coordinates: [73.2207, 3.2028] },
  },
  {
    title: "Ski Chalet in Aspen",
    description:
      "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?...",
    },
    price: 4000,
    location: "Aspen,United States",
    country: "United States",
    geometry: { type: "Point", coordinates: [-106.8175, 39.1911] },
  },
  {
    title: "Secluded Beach House in Costa Rica",
    description:
      "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?...",
    },
    price: 1800,
    location: "Costa Rica,Costa Rica",
    country: "Costa Rica",
    geometry: { type: "Point", coordinates: [-84.6441, 10.4718] },
  },
  {
    title: "Houseboat Stay in Kerala",
    description:
      "Cruise the tranquil backwaters of Kerala in a traditional houseboat with modern comforts.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1560347876-aeef00ee58a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Alleppey, India",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [76.3388, 9.4981], // Alleppey
    },
  },
  {
    title: "Heritage Haveli in Jaipur",
    description:
      "Stay in a majestic Rajasthani haveli with vibrant interiors and royal hospitality.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1691031429261-aeb324882888?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8SGVyaXRhZ2UlMjBoYXZlbGklMjBpbiUyMGphaXB1cnxlbnwwfHwwfHx8MA%3D%3D",
    },
    price: 2200,
    location: "Jaipur, India",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [75.7873, 26.9124], // Jaipur
    },
  },
  {
    title: "Beach Hut in Goa",
    description:
      "Relax in a simple yet cozy beach hut on the shores of Goa with sun, sand, and seafood.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1697729701846-e34563b06d47?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVhY2glMjBodXQlMjBpbiUyMGdvYXxlbnwwfHwwfHx8MA%3D%3D",
    },
    price: 1800,
    location: "Goa, India",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [73.8567, 15.2993], // Goa
    },
  },
  {
    title: "Luxury Houseboat in Srinagar",
    description:
      "Experience Kashmir's charm in a traditional houseboat on Dal Lake with mountain views.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1697730393612-882741d47f0f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8THV4dXJ5JTIwSG91c2Vib2F0JTIwaW4lMjBTcmluYWdhcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    price: 3000,
    location: "Srinagar, India",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [74.7974, 34.0837], // Srinagar
    },
  },
  {
    title: "Tea Estate Bungalow in Munnar",
    description:
      "Stay amidst endless tea plantations in a colonial-era bungalow in the hills of Munnar.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1596128644076-74669b9967fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFRlYSUyMEVzdGF0ZSUyMEJ1bmdhbG93JTIwaW4lMjBNdW5uYXJ8ZW58MHx8MHx8fDA%3D",
    },
    price: 2000,
    location: "Munnar, India",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [77.0597, 10.0892], // Munnar
    },
  },
  {
    title: "Homestay in Himachal",
    description:
      "Cozy wooden homestay in the Himalayan mountains with warm hospitality and scenic views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1746037130748-6163a61dd2ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEhvbWVzdGF5JTIwaW4lMjBIaW1hY2hhbHxlbnwwfHwwfHx8MA%3D%3D",
    },
    price: 1700,
    location: "Manali, India",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [77.1892, 32.2432], // Manali
    },
  },
  {
    title: "Desert Camp in Jaisalmer",
    description:
      "Spend your nights under the stars in a luxury tent amidst the sand dunes of the Thar Desert.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1605425368891-5533a8ede6c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fERlc2VydCUyMENhbXAlMjBpbiUyMEphaXNhbG1lcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    price: 1400,
    location: "Jaisalmer, India",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [70.9167, 26.9157], // Jaisalmer
    },
  },
  {
    title: "Lake Palace Stay in Udaipur",
    description:
      "Live like royalty in a palace on Lake Pichola with views of the Aravalli hills.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1661920471538-d4b17c13f74b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8TGFrZSUyMFBhbGFjZSUyMFN0YXklMjBpbiUyMFVkYWlwdXJ8ZW58MHx8MHx8fDA%3D",
    },
    price: 5000,
    location: "Udaipur, India",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [73.6850, 24.5854], // Udaipur
    },
  },
  {
    title: "Desert Safari Camp in Dubai",
    description:
      "Adventure and luxury combined in a desert safari camp with Bedouin hospitality.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 3500,
    location: "Dubai, United Arab Emirates",
    country: "United Arab Emirates",
    geometry: {
      type: "Point",
      coordinates: [55.2708, 25.2048], // Dubai
    },
  },
  {
    title: "Countryside Farmhouse in Tuscany",
    description:
      "Enjoy fresh air and vineyards at this rustic farmhouse in the rolling hills of Tuscany.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 2800,
    location: "Tuscany, Italy",
    country: "Italy",
    geometry: {
      type: "Point",
      coordinates: [11.2558, 43.7696], // Tuscany
    },
  },
  {
    title: "Santorini Cliffside Villa",
    description:
      "A stunning villa perched on the cliffs of Santorini with breathtaking views of the Aegean Sea.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?...",
    },
    price: 4000,
    location: "Santorini, Greece",
    country: "Greece",
    geometry: {
      type: "Point",
      coordinates: [25.4333, 36.3932], // Santorini
    },
  },
  {
    title: "Tokyo Highrise Apartment",
    description:
      "Stay in a modern high-rise apartment in the heart of Tokyo. Close to shopping, dining, and culture.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?...",
    },
    price: 2200,
    location: "Tokyo, Japan",
    country: "Japan",
    geometry: {
      type: "Point",
      coordinates: [139.6917, 35.6895], // Tokyo
    },
  },
  {
    title: "Dubai Luxury Penthouse",
    description:
      "A lavish penthouse with panoramic city views, located near the iconic Burj Khalifa.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?...",
    },
    price: 8000,
    location: "Dubai, United Arab Emirates",
    country: "United Arab Emirates",
    geometry: {
      type: "Point",
      coordinates: [55.2708, 25.2048], // Dubai
    },
  },
  {
    title: "Sydney Harbor Apartment",
    description:
      "Wake up to views of the Sydney Opera House and Harbour Bridge from this stylish apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?...",
    },
    price: 3500,
    location: "Sydney, Australia",
    country: "Australia",
    geometry: {
      type: "Point",
      coordinates: [151.2093, -33.8688], // Sydney
    },
  },
  {
    title: "Swiss Alps Chalet",
    description:
      "A cozy wooden chalet surrounded by snowy peaks in the Swiss Alps. Perfect for ski lovers.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?...",
    },
    price: 5000,
    location: "Zermatt, Switzerland",
    country: "Switzerland",
    geometry: {
      type: "Point",
      coordinates: [7.7491, 46.0207], // Zermatt
    },
  },
  {
    title: "Havana Colonial House",
    description:
      "Step back in time with this beautifully preserved colonial house in vibrant Havana.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1580479028411-fe5bf37ddd60?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8SGF2YW5hJTIwQ29sb25pYWwlMjBIb3VzZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    price: 1200,
    location: "Havana, Cuba",
    country: "Cuba",
    geometry: {
      type: "Point",
      coordinates: [-82.3666, 23.1136], // Havana
    },
  },
  {
    title: "Rio Beach Apartment",
    description:
      "Enjoy Copacabana Beach from this modern beachfront apartment in Rio de Janeiro.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?...",
    },
    price: 2500,
    location: "Rio de Janeiro, Brazil",
    country: "Brazil",
    geometry: {
      type: "Point",
      coordinates: [-43.1729, -22.9068], // Rio
    },
  },
  {
    title: "Cairo Pyramids View Hotel",
    description:
      "Stay in a comfortable hotel room with a direct view of the Pyramids of Giza.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1717077671202-2845f0c8b4aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Q2Fpcm8lMjBQeXJhbWlkcyUyMFZpZXclMjBIb3RlbHxlbnwwfHwwfHx8MA%3D%3D",
    },
    price: 1800,
    location: "Cairo, Egypt",
    country: "Egypt",
    geometry: {
      type: "Point",
      coordinates: [31.2357, 30.0444], // Cairo
    },
  },
  {
    title: "Bali Jungle Villa",
    description:
      "A peaceful villa surrounded by lush jungle and rice terraces in Ubud, Bali.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1672128558532-6e5f5aed8a06?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fEJhbGklMjBKdW5nbGUlMjBWaWxsYXxlbnwwfHwwfHx8MA%3D%3D",
    },
    price: 2800,
    location: "Ubud, Indonesia",
    country: "Indonesia",
    geometry: {
      type: "Point",
      coordinates: [115.2625, -8.5069], // Ubud
    },
  },
  {
    title: "Petra Desert Camp",
    description:
      "Sleep under the stars in the desert near Petra, Jordan. A magical Bedouin experience.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1559169690-131bab5594a4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fFBldHJhJTIwRGVzZXJ0JTIwQ2FtcHxlbnwwfHwwfHx8MA%3D%3D",
    },
    price: 900,
    location: "Petra, Jordan",
    country: "Jordan",
    geometry: {
      type: "Point",
      coordinates: [35.4444, 30.3285], // Petra
    },
  },
]
module.exports = { data: sampleListings };