import { Router } from "express"
import { createPublication, getPublication, findPublicationById, deletePublication, updatePublication } from "./publication.controller"

const router = Router()

router.post("/createPublication", createPublication)

router.get("/", getPublication)

router.get("/findPublication/:uid", findPublicationById)

router.delete("/deletePublication/:uid", deletePublication)

router.put("/updatePublication/:uid", updatePublication)

export default router