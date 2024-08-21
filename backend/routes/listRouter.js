const express = require("express");
const listRouter = express.Router();

const { addList, getLists } = require("../controller/listController");

listRouter.post("/", addList);
listRouter.get("/", getLists);

module.exports = listRouter;