const asyncHandler = require("express-async-handler");
const { errorHandler } = require("../middleware/errorMiddleware");
const Blog = require("../models/blogModel")

const getPosts = asyncHandler(async (req, res) => {
    const blog = await Blog.find({});

    if (!blog) {
        res.status(400)
        throw new Error("No blog")
    }
    if (blog) {
        res.status(200).json(blog)
    }
})

const getPost = asyncHandler(async (req, res) => {

    const { id } = req.params

    const blog = await Blog.find({_id: id});

    if (!blog) {
        res.status(400)
        throw new Error("No blog")
    }
    if (blog) {
        res.status(200).json(blog)
    }
})

const composePost = asyncHandler(async (req, res) => {
    if(!req.body.title || !req.body.content) {
        res.status(400)
        throw new Error("Please add a text field")
    }

    const blog = await Blog.create({
        title: req.body.title,
        content: req.body.content
    })
    res.status(200).json(blog);
})

module.exports = {
    getPosts,
    getPost,
    composePost
}