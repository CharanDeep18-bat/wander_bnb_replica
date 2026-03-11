const Listing = require("../models/listing");
const axios = require("axios");

module.exports.index = async (req, res) => {
  const listings = await Listing.find({});
  res.render("listings/index", { listings });
};

module.exports.new = (req, res) => {
  res.render("listings/new");
};

module.exports.create = async (req, res, next) => {
  const location = req.body.listing.location;

  //  Convert location string to coordinates
  const geoResponse = await axios.get(
    "https://nominatim.openstreetmap.org/search",
    {
      params: {
        q: location,
        format: "json",
        limit: 1,
      },
      headers: {
        "User-Agent": "WanderLust-App",
      },
    },
  );
  if (!geoResponse.data.length) {
    throw new Error("Location not found");
  }

  const data = geoResponse.data[0];

  const newlist = new Listing(req.body.listing);
  newlist.owner = req.user._id;

  //  Save image
  if (req.file) {
    newlist.image = {
      filename: req.file.public_id,
      url: req.file.secure_url,
    };
  }

  //  THIS IS WHERE YOU ADD GEOMETRY
  newlist.geometry = {
    type: "Point",
    coordinates: [data.lon, data.lat],
  };

  await newlist.save();

  req.flash("success", "New Listing Created");
  res.redirect("/listings");
};

module.exports.show = async (req, res) => {
  let { id } = req.params;
  const listin = await Listing.findById(id)
    .populate({
      path: "reviews",
      populate: {
        path: "author",
      },
    })
    .populate("owner");
  if (!listin) {
    req.flash("error", "Listing doesnt exist");
    return res.redirect("/listings");
  }
  res.render("listings/show", { listin, mapToken: process.env.MAP_TOKEN });
};

module.exports.edit = async (req, res) => {
  let { id } = req.params;
  const listin = await Listing.findById(id);
  if (!listin) {
    req.flash("error", "Listing doesnt exist");
    return res.redirect("/listings");
  }
  let originalImg = listin.image.url;
  originalImg = originalImg.replace("/upload", "/upload/w_250");
  res.render("listings/edit", { listin, originalImg });
};

module.exports.update = async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });
  if (req.file) {
    listing.image = {
      filename: req.file.public_id,
      url: req.file.secure_url,
    };
  }
  await listing.save();

  req.flash("success", "Listing Updated");
  res.redirect(`/listings/${id}`);
};

module.exports.delete = async (req, res) => {
  let { id } = req.params;
  await Listing.findByIdAndDelete(id);
  req.flash("success", "Listing Deleted");

  res.redirect("/listings");
};
