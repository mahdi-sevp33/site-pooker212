import { Router } from "express";
import {registerUser} from "../models/user-model"

const router=Router()

router.post('/registerUser').post(registerUser)

export default router;