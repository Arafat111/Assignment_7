const express = require("express");

const router = express.Router();

const blogController = require("../controllers/blogController");
const commentController = require("../controllers/commentController");
const messageController = require("../controllers/messageController");
const portfolioController = require("../controllers/portfolioController");
const productController = require("../controllers/productController");

router.get("/getBlog", blogController.readBlog);
router.post("/createBlog", blogController.createBlog);
router.put("/updateBlog", blogController.updateBlog);
router.delete("/deleteBlog", blogController.deleteBlog);

router.get("/getComment", commentController.readComment);
router.post("/createComment", commentController.createComment);
router.put("/updateComment", commentController.updateComment);
router.delete("/deleteComment", commentController.deleteComment);

router.get("/getMessage", messageController.readMessage);
router.post("/createMessage", messageController.createMessage);
router.put("/updateMessage", messageController.updateMessage);
router.delete("/deleteMessage", messageController.deleteMessage);

router.get("/getPortfolio", portfolioController.readPortfolio);
router.post("/createPortfolio", portfolioController.createPortfolio);
router.put("/updatePortfolio", portfolioController.updatePortfolio);
router.delete("/deletePortfolio", portfolioController.deletePortfolio);

router.get("/getProduct", productController.readProduct);
router.post("/createProduct", productController.createProduct);
router.put("/updateProduct", productController.updateProduct);
router.delete("/deleteProduct", productController.deleteProduct);

module.exports = router;
