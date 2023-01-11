const Channel = require("../models/channel");
const Podcast = require("../models/podcast");
const mongoose = require("mongoose");

const getAllPodcastByChannel = async (req, res) => {
  try {
    const data = await Channel.aggregate([
      {
        $match: { _id: mongoose.Types.ObjectId((req?.query?.channel).trim()) },
      },
      {
        $lookup: {
          from: "podcasts",
          localField: "_id",
          foreignField: "channel",
          as: "podcasts",
        },
      },
      { $project: { "title": 1, "avatar": 1, "podcasts": 1 } },
    ]).exec();
    if (data) {
      res.status(200).json(data);
    } else {
      res.status(204).json({ message: "podcast list is empty" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllPodcastByChannel,
};
