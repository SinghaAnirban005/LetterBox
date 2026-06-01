import { Router } from "express";
import { delEmail, emailHandler } from "../controllers";

const router: Router = Router()

router.get('/', emailHandler)

router.delete('/', delEmail)

export default router