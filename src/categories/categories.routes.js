import { Router } from "express"
import { createCategorieValidator, findCategorieByIdValidator, deleteCategorieValidator, updateCategorieValidator } from "../middlewares/categories-validators.js"
import { createCategorie, findCategorieById, deleteCategorie, updateCategorie, getCategories} from "./categories.controller.js"
import { ValidarRol } from "../middlewares/validar-rol.js"

const router = Router()

router.post("/createCategorie", createCategorieValidator, ValidarRol('ADMIN_ROLE'), createCategorie)

router.get("/", getCategories)

router.get("/findCategorie/:uid", findCategorieByIdValidator, ValidarRol('ADMIN_ROLE'),findCategorieById)

router.delete("/deleteCategorie/:uid", deleteCategorieValidator, ValidarRol('ADMIN_ROLE'), deleteCategorie)

router.put("/updateCategorie/:uid", updateCategorieValidator, ValidarRol('ADMIN_ROLE'), updateCategorie)

export default router