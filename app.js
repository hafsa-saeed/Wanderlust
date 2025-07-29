//Required Packages
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require ("./models/Listing");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");

//DataBase Connection
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
main()
.then(()=>{
  console.log("connected to DB")
})
.catch((err)=>{
  console.log(err);
})
async function main() {
  await mongoose.connect(MONGO_URL);
}

app.set("view engine", "ejs"); //telss express to use ejs file for rendering
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended:true}));  //required for Post request
app.use(methodOverride("_method"));
app.engine('ejs',ejsMate);

//main route to check server
app.get("/", (req, res)=>{
  res.send("I am root");
});

//index.route
//show all listings on the page. Uses index.ejs templetes and and send all listings to it
app.get("/listings", async (req, res)=>{
  const allListings =  await Listing.find({});
  res.render("listings/index.ejs", { allListings });
});

//new route
//show a form to create new listing
app.get("/listings/new", (req,res)=>{
  res.render("listings/new.ejs")
})

//show route
//show details of one listing
app.get("/listings/:id", async (req, res)=>{
  let {id} = req.params;
  const listing = Listing.findById(id);
  res.render("listings/show.ejs")
});

//create route
//saves a new listing to the database. req.body.listing comes from form data 
app.post("/listings", async(req, res)=>{
  const newListing = new Listing(req.body.listing);
  await newListing.save();
  res.redirect("/listings");
});

//edit route
//show a formm to edit an existing listing
app.get("/listings/:id/edit", async(req, res)=>{
  let {id} = req.params;
  const listing = await Listing.findById(id);
  res.render("listings/edit.ejs", {listing});
});

//update route
//Update an existing listing. Must use here method_Override to allow put from form
app.put("/listings/:id", async(req, res)=> {
  let {id} = req.params;
  await Listing.findByIdAndUpdate(id, {...req.body.listing});
  res.redirect(`/listings/${id}`);
});

//delete route
//delete a listing from database
app.delete("/listings/:id", async(req, res)=>{
  let {id} = req.params;
  let deletedListing = await Listing.findByIdAndDelete(id);
  console.log(deletedListing);
  res.redirect("/listings");
})

app.listen(8080, ()=>{
  console.log("server is listening at port 8080");
});