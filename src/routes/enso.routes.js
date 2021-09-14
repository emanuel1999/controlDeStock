import { Router } from "express";
import { isLoggedIn } from "../lib/auth";
import {
  renderAddProd,
  addProd,
  renderProd,
  deleteProd,
} from "../controllers/enso.controller";

const router = Router();
// Authorization
router.use(isLoggedIn);

router.get("/add", renderAddProd);
router.post("/add", addProd);
router.get("/", isLoggedIn, renderProd);
router.get("/delete/:id", deleteProd);
export default router;
