const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const { listingSchema } = require("../schema.js");
const ExpressError = require("../utils/ExpressError.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const listingController = require("../controller/listings.js");
const multer = require("multer");
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });

router
  .route("/")
  .get(wrapAsync(listingController.index)) //index
  .post(isLoggedIn, upload.single("listing[image]"),validateListing, wrapAsync(listingController.create)) //create
//new
router.get("/new", isLoggedIn, listingController.new);

router
  .route("/:id")
  .get(wrapAsync(listingController.show)) //show
  .put(
    isLoggedIn,
    isOwner,
     upload.single("listing[image]"),
    validateListing,
    wrapAsync(listingController.update),
  ) //update
  .delete(isLoggedIn, isOwner, wrapAsync(listingController.delete)); //delete

//edit
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listingController.edit));

module.exports = router;
