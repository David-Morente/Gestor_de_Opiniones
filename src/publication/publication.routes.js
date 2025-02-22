import { Router } from "express"
import { createPublication, getPublication, findPublicationById, deletePublication, updatePublication } from "./publication.controller.js"
import { ValidarToken } from "../middlewares/validar-JWT.js"

const router = Router()

router.post("/createPublication", createPublication)

router.get("/", getPublication)

router.get("/findPublication/:uid", findPublicationById)

router.delete("/deletePublication/:uid", ValidarToken, deletePublication)

router.put("/updatePublication/:uid", ValidarToken, updatePublication)

export default router