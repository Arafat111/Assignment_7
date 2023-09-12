exports.createMessage = async (req, res) => {
  res.status(201).json({ status: "success", data: "Create Message" });
};

exports.readMessage = async (req, res) => {
  res.status(200).json({ status: "success", data: "Get Message" });
};

exports.deleteMessage = async (req, res) => {
  res.status(200).json({ status: "success", data: "delete Message" });
};

exports.updateMessage = async (req, res) => {
  res.status(200).json({ status: "success", data: "update Message" });
};
