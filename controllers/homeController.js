const { getAllByDate, getRecent } = require("../services/courseService");

const homeController = require("express").Router();

homeController.get("/", async (req, res) => {
  let view;
  let courses = [];

  const search = req.query.searchToolbox

  
  if (req.user) {
    view = "user-home";
    courses = await getAllByDate();
  } else {
    view = "guest-home";
    courses = await getRecent();
  }
  if (search) {
    console.log("Търсене...");
    courses = await getAllByDate();
    courses = courses.filter(c => c.title.toLowerCase().includes(search.toLowerCase()))
  }
  res.render(view, {
    title: "Home Page",
    courses,
    search
  });
});

module.exports = homeController;
