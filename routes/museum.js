import { Router } from "express";
import * as controllers from "../controllers/museum.js";

const router = Router();

router.get("/", controllers.getArtworks);
router.get("/:id", controllers.getArtwork);
router.post("/", controllers.createArtwork);
router.put("/:id", controllers.updateArtwork);
router.delete("/:id", controllers.deleteArtwork);

export default router;