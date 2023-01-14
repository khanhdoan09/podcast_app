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
    res.status(500).json({ message: "error in server" });
  }
};

const getAllChannelByName = async (req, res) => {
  const name = req?.query?.name;
  try {
    if (name === undefined || name === null)  throw Error("not found name to search");
    const data = await Channel.find({ title: { $regex: name, $options: "i" } });
    if (data) {
      res.status(200).json(data);
    } else {
      res.status(204).json({ message: "channel list is empty" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "error in server" });
  }
};

module.exports = {
  getAllChannel,
  getAllChannelByName,
};
