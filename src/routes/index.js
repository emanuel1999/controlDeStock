import { Router } from "express";
import auth from "./auth.routes";
import index from "./index.routes";
import links from "./links.routes";
import produccion from "./enso.routes";
import user from "./user.routes";

const router = Router();

router.use(index);
router.use(auth);
router.use(user);
router.use("/links", links);
router.use("/links", produccion);

export default router;
