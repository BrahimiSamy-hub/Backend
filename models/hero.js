const mongoose = require("mongoose");

const heroSchema = new mongoose.Schema(
  {
    arTitle: {
      type: String,
      required: true,
    },
    frTitle: {
      type: String,
      required: true,
    },
    enTitle: {
      type: String,
      required: true,
    },
    arDesc: {
      type: String,
      required: true,
    },
    frDesc: {
      type: String,
      required: true,
    },
    enDesc: {
      type: String,
      required: true,
    },
    mainImage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "File",
    },
    secondaryImage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "File",
    },
  },
  { timestamps: true, versionKey: false }
);

const Hero = mongoose.model("Hero", heroSchema);

module.exports = Hero;
