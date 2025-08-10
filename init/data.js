const sampleListings = [
  {
    title: "Cozy Cabin in the Woods",
    description:
      "Experience nature like never before in this warm wooden cabin nestled in the forest.",
    Image: "Hotel19.jpg",
    price: 120,
    location: "Aspen",
    country: "USA",
  },
  {
    title: "Modern Loft with City Views",
    description:
      "Stylish and modern loft located in the heart of the city with stunning skyline views.",
    Image: "Hotel4.jpg",
    price: 200,
    location: "New York",
    country: "USA",
  },
  {
    title: "Beachfront Paradise",
    description:
      "Wake up to the sound of waves in this serene beach house perfect for relaxation.",
    Image: "Hotel5.jpg",
    price: 250,
    location: "Goa",
    country: "India",
  },
  {
    title: "Peaceful Countryside Farmhouse",
    description:
      "Disconnect and unwind in this lovely farmhouse surrounded by lush fields.",
    Image: "Hotel6.jpg",
    price: 90,
    location: "Punjab",
    country: "Pakistan",
  },
  {
    title: "Luxury Penthouse",
    description:
      "Top-floor penthouse offering 360° city views and unmatched luxury.",
    Image: "Hotel7.jpg",
    price: 350,
    location: "Dubai",
    country: "UAE",
  },
  {
    title: "Mountain Retreat",
    description:
      "Ideal for hikers and nature lovers, this mountain home has everything you need.",
    Image: "Hotel8.jpg",
    price: 150,
    location: "Swat",
    country: "Pakistan",
  },
  {
    title: "Historic Castle Stay",
    description:
      "Live like royalty in a real 18th-century castle turned guesthouse.",
    Image: "Hotel9.jpg",
    price: 400,
    location: "Edinburgh",
    country: "Scotland",
  },
  {
    title: "Charming Studio Apartment",
    description:
      "Perfect for solo travelers, this cozy studio is both convenient and stylish.",
    Image: "Hotel10.jpg",
    price: 70,
    location: "Paris",
    country: "France",
  },
  {
    title: "Lakeside Wooden Cottage",
    description:
      "Enjoy sunsets over the lake from this romantic wooden escape.",
    Image: "Hotel11.jpg",
    price: 140,
    location: "Lake District",
    country: "UK",
  },
  {
    title: "Colorful Bohemian Apartment",
    description:
      "Unique interiors and artistic vibes make this spot unforgettable.",
    Image: "Hotel12.jpg",
    price: 110,
    location: "Barcelona",
    country: "Spain",
  },
  {
    title: "Jungle Treehouse",
    description:
      "Live above the trees in this eco-friendly treehouse deep in the jungle.",
    Image: "Hotel13.jpg",
    price: 180,
    location: "Bali",
    country: "Indonesia",
  },
  {
    title: "Luxury Tent in Desert",
    description:
      "Glamp in style with this comfortable desert tent under the stars.",
    Image: "Hotel14.jpg",
    price: 130,
    location: "Thar Desert",
    country: "India",
  },
  {
    title: "Vintage Caravan Experience",
    description: "Stay in a classic caravan with all modern amenities.",
    Image: "Hotel15.jpg",
    price: 80,
    location: "California",
    country: "USA",
  },
  {
    title: "Snow Cabin with Fireplace",
    description:
      "Perfect for winter, this cabin includes a cozy fireplace and scenic views.",
    Image: "Hotel16.jpg",
    price: 160,
    location: "Leh",
    country: "India",
  },
  {
    title: "Mediterranean Villa",
    description:
      "Beautiful villa with sea views, olive trees, and sunny terraces.",
    Image: "Hotel17.jpg",
    price: 270,
    location: "Santorini",
    country: "Greece",
  },
  {
    title: "Riverfront Bamboo Hut",
    description: "Simple life by the river in a quiet bamboo-built hut.",
    Image: "Hotel18.jpg",
    price: 60,
    location: "Chiang Mai",
    country: "Thailand",
  },
  {
    title: "Ice Hotel Room",
    description:
      "A once-in-a-lifetime experience sleeping on ice in a comfy thermal setup.",
    Image: "Hotel19.jpg",
    price: 220,
    location: "Kiruna",
    country: "Sweden",
  },
  {
    title: "Island Bungalow",
    description:
      "Private bungalow right on the beach, with nothing but waves and sunshine.",
    Image: "Hotel20.jpg",
    price: 240,
    location: "Maldives",
    country: "Maldives",
  },
  {
    title: "Rustic Cabin Getaway",
    description:
      "Disconnect from the world in this old-style wood cabin surrounded by forest.",
    Image: "Hotel21.jpg",
    price: 100,
    location: "Gilgit",
    country: "Pakistan",
  },
  {
    title: "Skyview Rooftop Studio",
    description:
      "Trendy studio with a rooftop terrace and sky views of the city.",
    Image: "Hotel22.jpg",
    price: 150,
    location: "Istanbul",
    country: "Turkey",
  },
  {
    title: "Desert Clay House",
    description:
      "Authentic clay home in the desert with cultural décor and peaceful vibes.",
    Image: "Hotel23.jpg",
    price: 95,
    location: "Marrakech",
    country: "Morocco",
  },
  {
    title: "Floating Houseboat Stay",
    description:
      "Gently sway with the waves in a fully equipped luxury houseboat.",
    Image: "Hotel24.jpg",
    price: 210,
    location: "Srinagar",
    country: "India",
  },
  {
    title: "Lakeview Tree Cabin",
    description: "A dreamy elevated cabin overlooking a peaceful lake.",
    Image: "Hotel1.jpg",
    price: 170,
    location: "Naran",
    country: "Pakistan",
  },
  {
    title: "Tropical Rainforest Retreat",
    description:
      "Feel at peace surrounded by tropical greenery and natural waterfalls.",
    Image: "Hotel2.jpg",
    price: 200,
    location: "Amazonas",
    country: "Brazil",
  },
  {
    title: "Countryside Cottage",
    description:
      "Small and sweet stone cottage with a garden view and fresh air.",
    Image: "Hotel3.jpg",
    price: 90,
    location: "Cotswolds",
    country: "UK",
  },
  {
    title: "Sky Dome Glamping",
    description:
      "Sleep under the stars in a transparent dome tent with comfort.",
    Image: "Hotel4.jpg",
    price: 160,
    location: "Skardu",
    country: "Pakistan",
  },
  {
    title: "Studio near River Seine",
    description:
      "A romantic stay just steps from the river with all amenities.",
    Image: "Hotel5.jpg",
    price: 130,
    location: "Paris",
    country: "France",
  },
  {
    title: "Green Hills Log Cabin",
    description:
      "Stay in the lap of nature with this charming log cabin surrounded by hills.",
    Image: "Hotel6.jpg",
    price: 115,
    location: "Kaghan",
    country: "Pakistan",
  },
  {
    title: "Vintage Apartment",
    description: "Old-world charm with antique furniture and sunny balconies.",
    Image: "Hotel7.jpg",
    price: 140,
    location: "Vienna",
    country: "Austria",
  },
  {
    title: "Rooftop Tent Camp",
    description: "City camping on a rooftop with views and campfire nights.",
    Image: "Hotel8.jpg",
    price: 85,
    location: "Karachi",
    country: "Pakistan",
  },
];

module.exports = { data: sampleListings };
