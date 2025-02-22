import { Router } from "express"
import { createCategorieValidator, findCategorieByIdValidator, deleteCategorieValidator, updateCategorieValidator } from "../middlewares/categories-validators"
import { createCategorie, findCategorieById, deleteCategorie, updateCategorie, getCategories} from "./categories.controller"

const router = Router()

router.post("/createCategorie", createCategorieValidator, createCategorie)

router.get("/", getCategories)

router.get("/findCategorie/:uid", findCategorieByIdValidator, findCategorieById)

router.delete("/deleteCategorie/:uid", deleteCategorieValidator, deleteCategorie)

router.put("/updateCategoríe/:uid", updateCategorieValidator, updateCategorie)

export default router