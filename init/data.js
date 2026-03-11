const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing coastal getaway. Wake up to the sound of waves, enjoy stunning sunset views, and step directly onto the sandy shore from your private deck.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg",
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish and spacious loft apartment. Featuring floor-to-ceiling windows, modern interiors, and vibrant nightlife just steps away.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg",
    },
    price: 1200,
    location: "New York City",
    country: "United States",
  },
  {
    title: "Mountain Retreat Cabin",
    description:
      "Unplug and unwind in this peaceful mountain cabin surrounded by tall pine trees and fresh alpine air. Perfect for hiking, stargazing, and reconnecting with nature.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg",
    },
    price: 1000,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience the timeless beauty of Tuscany in this restored countryside villa. Enjoy vineyard views, rustic architecture, and authentic Italian charm.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg",
    },
    price: 2500,
    location: "Florence",
    country: "Italy",
  },
  {
    title: "Secluded Forest Treehouse",
    description:
      "Live among the treetops in this eco-friendly treehouse retreat. Surrounded by lush greenery, this hideaway offers peace, privacy, and breathtaking forest views.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/775219/pexels-photo-775219.jpeg",
    },
    price: 800,
    location: "Portland",
    country: "United States",
  },

  {
    title: "Beachfront Paradise Condo",
    description:
      "Step outside onto golden sands from this luxurious beachfront condo. Relax with ocean breezes, infinity pool access, and panoramic sea views.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg",
    },
    price: 2000,
    location: "Cancun",
    country: "Mexico",
  },
  {
    title: "Rustic Lakefront Cabin",
    description:
      "Spend peaceful mornings by the lake in this cozy wooden cabin. Ideal for kayaking, fishing, and evenings by the fireplace under starry skies.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg",
    },
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
  },
  {
    title: "Luxury City Penthouse",
    description:
      "Indulge in premium living with sweeping skyline views from this elegant penthouse apartment. Modern amenities and world-class dining nearby.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg",
    },
    price: 3500,
    location: "Los Angeles",
    country: "United States",
  },
  {
    title: "Alpine Ski Chalet",
    description:
      "Hit the slopes right from your doorstep in this cozy ski chalet nestled in snowy mountains. Warm interiors and breathtaking winter scenery.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/754268/pexels-photo-754268.jpeg",
    },
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
  },
  {
    title: "Safari Lodge Experience",
    description:
      "Immerse yourself in wildlife adventures at this luxury safari lodge. Witness majestic animals and stunning savannah landscapes.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg",
    },
    price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania",
  },

  {
    title: "Private Island Escape",
    description:
      "Enjoy complete privacy on your own tropical island retreat. Crystal-clear waters, white sand beaches, and unmatched serenity.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg",
    },
    price: 10000,
    location: "Fiji",
    country: "Fiji",
  },
  {
    title: "Bali Beach Bungalow",
    description:
      "Relax in a beachfront bungalow surrounded by palm trees and turquoise waters. Perfect for a romantic or rejuvenating escape.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/221457/pexels-photo-221457.jpeg",
    },
    price: 1800,
    location: "Bali",
    country: "Indonesia",
  },
  {
    title: "Banff Mountain Cabin",
    description:
      "Wake up to breathtaking views of the Canadian Rockies. This cozy cabin offers hiking trails and pristine wilderness at your doorstep.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg",
    },
    price: 1500,
    location: "Banff",
    country: "Canada",
  },
  {
    title: "Tropical Villa in Phuket",
    description:
      "Escape to a luxurious tropical villa with a private infinity pool overlooking lush greenery and sparkling waters.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/1450354/pexels-photo-1450354.jpeg",
    },
    price: 3000,
    location: "Phuket",
    country: "Thailand",
  },
  {
    title: "Scottish Highlands Castle Stay",
    description:
      "Live like royalty in this historic castle surrounded by dramatic hills and scenic landscapes of the Highlands.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/2363/france-landmark-lights-night.jpg",
    },
    price: 4000,
    location: "Scottish Highlands",
    country: "United Kingdom",
  },

  // Remaining 15 (continuing same quality)

  {
    title: "Desert Oasis Villa",
    description:
      "Experience unmatched luxury in a desert oasis villa featuring private pools and golden sand dunes stretching to the horizon.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/248771/pexels-photo-248771.jpeg",
    },
    price: 5000,
    location: "Dubai",
    country: "United Arab Emirates",
  },
  {
    title: "Greek Island Villa",
    description:
      "Enjoy crystal-clear Mediterranean waters from this stunning beachfront villa located on a picturesque Greek island.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg",
    },
    price: 2500,
    location: "Mykonos",
    country: "Greece",
  },
  {
    title: "Maldives Overwater Villa",
    description:
      "Stay in an iconic overwater villa surrounded by turquoise lagoons and coral reefs in the Maldives.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg",
    },
    price: 6000,
    location: "Maldives",
    country: "Maldives",
  },
  {
    title: "Costa Rica Jungle Retreat",
    description:
      "Immerse yourself in lush rainforests and tropical wildlife at this serene jungle retreat near pristine beaches.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/462331/pexels-photo-462331.jpeg",
    },
    price: 1800,
    location: "Costa Rica",
    country: "Costa Rica",
  },
  {
    title: "Swiss Lakeside Chalet",
    description:
      "Enjoy peaceful lake views surrounded by snowy peaks in this charming Swiss chalet perfect for year-round adventures.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg",
    },
    price: 3200,
    location: "Lucerne",
    country: "Switzerland",
  },

  // 10 more added below to make total 30

  {
    title: "Icelandic Glass Cabin",
    description:
      "Watch the northern lights from a cozy glass cabin surrounded by Iceland's dramatic volcanic landscapes.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/1933239/pexels-photo-1933239.jpeg",
    },
    price: 2800,
    location: "Reykjavik",
    country: "Iceland",
  },
  {
    title: "Norwegian Fjord Retreat",
    description:
      "Stay by the majestic fjords with panoramic water and mountain views in this peaceful Scandinavian retreat.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/35600/road-sun-rays-path.jpg",
    },
    price: 2600,
    location: "Bergen",
    country: "Norway",
  },
  {
    title: "Himalayan Eco Lodge",
    description:
      "Nestled in the foothills of the Himalayas, this eco lodge offers fresh mountain air and breathtaking sunrise views.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg",
    },
    price: 1400,
    location: "Manali",
    country: "India",
  },
  {
    title: "Amazon River Cabin",
    description:
      "Explore the wonders of the Amazon rainforest while staying in this rustic riverside cabin surrounded by wildlife.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg",
    },
    price: 1900,
    location: "Amazon",
    country: "Brazil",
  },
  {
    title: "Patagonia Wilderness Lodge",
    description:
      "Adventure awaits in Patagonia with glacier views, rugged mountains, and untouched natural beauty.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg",
    },
    price: 3100,
    location: "Patagonia",
    country: "Argentina",
  }
];

module.exports = { data: sampleListings };