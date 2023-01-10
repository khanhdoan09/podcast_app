const express = require("express");
const router = express.Router();
const ChannelService = require("../services/channelService");

router.get("/getAllChannel", async (req, res) =>
  ChannelService.getAllChannel(req, res)
);

module.exports = router;
