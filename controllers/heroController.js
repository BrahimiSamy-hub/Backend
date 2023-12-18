const Hero = require("../models/hero");

const createHero = async (req, res) => {
  try {
    const heroData = { ...req.body };
    const newHero = new Hero(heroData);
    const createdHero = await newHero.save();

    res.status(201).json(createdHero);
  } catch (error) {
    res.status(500).json({ error: "Error creating Hero" });
    console.error(error);
  }
};
const getHero = async (req, res) => {
  try {
    const hero = await Hero.findOne().populate("mainImage secondaryImage");
    if (hero) {
      const baseUrl = `${req.protocol}://${req.get("host")}/`;
      if (hero.mainImage && !hero.mainImage.url.startsWith("http")) {
        hero.mainImage.url = baseUrl + hero.mainImage.url;
      }
      if (hero.secondaryImage && !hero.secondaryImage.url.startsWith("http")) {
        hero.secondaryImage.url = baseUrl + hero.secondaryImage.url;
      }
      res.status(200).json(hero);
    } else {
      res.status(404).json({ error: "No Hero found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error getting Hero" });
    console.error(error);
  }
};
const updateHero = async (req, res) => {
  try {
    const heroData = { ...req.body };
    const heroId = req.params.id;

    const updatedHero = await Hero.findByIdAndUpdate(heroId, heroData, {
      new: true,
    }).populate("mainImage secondaryImage");

    if (!updatedHero) {
      return res.status(404).json({
        success: false,
        message: "Hero not found",
      });
    }

    res.json(updatedHero);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error updating Hero",
    });
    console.error(error);
  }
};
module.exports = {
  createHero,
  updateHero,
  getHero,
};
