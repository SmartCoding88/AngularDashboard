const express = require('express');
const route = express.Router();
//import category Model
const category = require('../models/category.model')

//get categorys list
route.get("/", (req, res) => {
  category.find({})
    .then((categories) => {
      console.log("categorys List: ", categories);
      res.status(200).json(categories);
    })
    .catch((err) => {
      res.status(404).json({ message: "No categorys were found!!" });
      console.log("No categorys were found!!", err)
    })
});

//get category By ID
route.get("/:id", (req, res) => {
  category.findById(req.params.id)
    .then((category) => {
      console.log("category: ", category)
      res.status(200).json(category);
    })
    .catch((err) => {
      res.status(404).json({ message: "No category with id " + req.params.id + " was found!!" });
      console.log("category unfound!!", err)
    })
});

//create new category
route.post("/", (req, res) => {
  let categoryInfo = req.body
  category.create({
    name: categoryInfo.name,
    slug: categoryInfo.slug,
    parent_id: categoryInfo.parent_id,
    description: categoryInfo.description,
    image: categoryInfo.image
  })
    .then((category) => {
      console.log("Created category: ", category);
      res.status(201).json(category)
    })
    .catch((err) => {
      console.log("Unable to create new category", err);
    })
})

//Update category
route.put("/:id", async (req, res) => {
  let categoryInfo = req.body
  const {id} = req.params;

  await category.updateOne({_id: id}, categoryInfo).then((category) => {
    console.log("Updated category: ", category);
    res.status(200).json(category)
  })
    .catch((err) => {
      console.log("Unable to update category", err);
      res.status(400).json({ message: `Unable to update category with id ${id} !!` });
    })


})

//delete category
route.delete("/:id", async (req, res) => {
  const {id} = req.params;
  await category.findByIdAndDelete(id)
    .then((category) => {
      console.log(`category with id: ${id} was deleted !`)
      return res.status(200).json(category)
    })
    .catch((err) => {
      console.log("Unable to delete category", err);
      res.status(400).json({ message: `Unable to delete category with id ${id} !!` });
    })
})


module.exports = route;
