import { Router } from "express"
import { getUserByIdValidator, updatePasswordValidator, updateUserValidator } from "../middlewares/user-validators.js"
import { getUserById, getUsers, updatePassword, updateUser } from "./user.controller.js"

const router = Router()

router.get("/findUser/:uid", getUserByIdValidator, getUserById)

router.get("/", getUsers)

router.patch("/updatePassword/:uid", updatePasswordValidator, updatePassword)

router.put("/updateUser/:uid", updateUserValidator, updateUser)

export default router