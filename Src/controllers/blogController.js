exports.createBlog = async (req, res) => {
  res.status(200).json({ status: "success", data: "Create Blog" });
};

exports.readBlog = async (req, res) => {
  res.status(200).json({ status: "success", data: "Get Blog" });
};

exports.deleteBlog = async (req, res) => {
  res.status(200).json({ status: "success", data: "delete Blog" });
};

exports.updateBlog = async (req, res) => {
  res.status(200).json({ status: "success", data: "update Blog" });
};
