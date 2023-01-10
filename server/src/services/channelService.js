const Channel = require("../models/channel");

const getAllChannel = async (req, res) => {
  try {
    const data = await Channel.find({});
    if (data) {
      res.status(200).json(data);
    } else {
      res.status(204).json({ message: "channel list is empty" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "error by server" });
  }
};

module.exports = {
  getAllChannel,
};
