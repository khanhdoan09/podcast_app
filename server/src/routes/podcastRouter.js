const express = require("express");
const router = express.Router();
const PodcastService = require("../services/podcastService");

router.get("/getAllPodcastByChannel", async (req, res) =>
  PodcastService.getAllPodcastByChannel(req, res)
);

module.exports = router;
