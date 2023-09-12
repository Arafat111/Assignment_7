exports.createComment = async (req, res) => {
  res.status(201).json({ status: "success", data: "Create Comment" });
};

exports.readComment = async (req, res) => {
  res.status(200).json({ status: "success", data: "Get Comment" });
};

exports.deleteComment = async (req, res) => {
  res.status(200).json({ status: "success", data: "delete Comment" });
};

exports.updateComment = async (req, res) => {
  res.status(200).json({ status: "success", data: "update Comment" });
};
