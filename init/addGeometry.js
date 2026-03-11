const mongoose = require("mongoose");
const axios = require("axios");
const Listing = require("../models/listing");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

async function main() {
  await mongoose.connect(MONGO_URL);
  console.log("Connected to DB");

  const listings = await Listing.find();

  for (let listing of listings) {

    // Skip if already has geometry
    if (listing.geometry && listing.geometry.coordinates?.length) {
      console.log(`Skipping ${listing.title}`);
      continue;
    }

    const locationString = `${listing.location}, ${listing.country}`;

    try {
      const response = await axios.get(
        "https://nominatim.openstreetmap.org/search",
        {
          params: {
            q: locationString,
            format: "json",
            limit: 1
          },
          headers: {
            "User-Agent": "WanderLust-App"
          }
        }
      );

      if (response.data.length > 0) {
        const data = response.data[0];

        listing.geometry = {
          type: "Point",
          coordinates: [Number(data.lon), Number(data.lat)]
        };

        await listing.save();
        console.log(`Updated: ${listing.title}`);
      } else {
        console.log(`Location not found: ${listing.title}`);
      }

      // Small delay to avoid rate limit
      await new Promise(res => setTimeout(res, 1000));

    } catch (err) {
      console.log(`Error updating ${listing.title}:`, err.message);
    }
  }

  console.log("Migration complete");
  mongoose.connection.close();
}

main();