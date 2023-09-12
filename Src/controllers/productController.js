exports.createProduct = async (req, res) => {
  res.status(201).json({ status: "success", data: "Create Product" });
};

exports.readProduct = async (req, res) => {
  res.status(200).json({ status: "success", data: "Get Product" });
};

exports.deleteProduct = async (req, res) => {
  res.status(200).json({ status: "success", data: "delete Product" });
};

exports.updateProduct = async (req, res) => {
  res.status(200).json({ status: "success", data: "update Product" });
};
