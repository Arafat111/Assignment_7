exports.createPortfolio = async (req, res) => {
  res.status(201).json({ status: "success", data: "Create Portfolio" });
};

exports.readPortfolio = async (req, res) => {
  res.status(200).json({ status: "success", data: "Get Portfolio" });
};

exports.deletePortfolio = async (req, res) => {
  res.status(200).json({ status: "success", data: "delete Portfolio" });
};

exports.updatePortfolio = async (req, res) => {
  res.status(200).json({ status: "success", data: "update Portfolio" });
};
