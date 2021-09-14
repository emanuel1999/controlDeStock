import { Router } from "express";
import { isLoggedIn } from "../lib/auth";
import {
  renderAddLink,
  addLink,
  renderLinks,
  deleteLink,
} from "../controllers/links.controller";



const router = Router();
// Authorization
router.use(isLoggedIn);

// Routes ensobrado y impresion
router.get("/add", renderAddLink);
router.post("/add", addLink);
router.get("/", isLoggedIn, renderLinks);
router.get("/delete/:id", deleteLink);
//routes papel



export default router;
