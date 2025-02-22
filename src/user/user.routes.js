import { Router } from "express"
import { getUserByIdValidator, deleteUserValidator, updatePasswordValidator, updateUserValidator } from "../helpers/db-validator.js"
import { getUserById, getUsers, deleteUser, updatePassword, updateUser } from "./user.controller"

const router = Router()

router.get("/findUser/:uid", getUserByIdValidator, getUserById)

router.get("/", getUsers)

router.delete("/deleteUser/:uid", deleteUserValidator, deleteUser)

router.patch("/updatePassword/:uid", updatePasswordValidator, updatePassword)

router.put("/updateUser/:uid", updateUserValidator, updateUser)

export default router