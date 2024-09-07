const express = require("express");
const router = express.Router();
const {fetchComments} = require("../controllers/comments/fetch");
const {publishComment} = require("../controllers/comments/create");
const deleteComment = require("../controllers/comments/delete")
const {saveCommentUpvotes, fetchCommentUpvotes} = require("../controllers/comments/upvote")
const {verifyToken} = require("../../auth/auth-middleware");


router.post("/post/comment", verifyToken, publishComment);
router.get("/comments", fetchComments);
router.delete("/api/comment/delete/:commentid", verifyToken, deleteComment )


// upvote on comments
router.post("/api/comment/upvote/:commentid", verifyToken, saveCommentUpvotes);
  
// getting comment upvotes
router.get("/api/comment/upvote/:commentid", fetchCommentUpvotes);



module.exports = router
