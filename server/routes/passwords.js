import express from "express";
import Password from "../models/Password.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", verifyToken, async (req, res) => {
  const data = await Password.find({ userId: req.user.id });
  res.json(data);
});

router.post("/", verifyToken, async (req, res) => {
  const newPass = new Password({ ...req.body, userId: req.user.id });
  await newPass.save();
  res.json("Saved");
});

router.delete("/:id", verifyToken, async (req, res) => {
  await Password.findByIdAndDelete(req.params.id);
  res.json("Deleted");
});

export default router;
