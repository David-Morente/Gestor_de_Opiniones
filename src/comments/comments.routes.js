import { Router } from "express"
import { createComment, getComment, findCommentById, deleteComment, updateComment } from "./comments.controller"

const router = Router()

router.post("/addComment", createComment)

router.get("/", getComment)

router.get("/findComment/:uid", findCommentById)

router.delete("/deleteComment/:uid", deleteComment)

router.put("/updateComment/:uid", updateComment)

export default router