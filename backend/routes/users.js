//pronadi Usera i ovo getUser poziv fje u users.js u controllers 
// te se fja odradi i trazi u mySQL
import express from "express";
import { getUser, getUserData, saveUserCourses, saveUserMajor, saveUserGender } from "../controllers/user.js";

const router = express.Router();

// Debug log za sve rute
router.use((req, res, next) => {
  console.log(`GET /api/users${req.path}`);
  next();
});

router.get("/find/:userId", getUser);
router.get("/data/:userId", getUserData);
router.post("/:userId/courses", saveUserCourses);
router.post("/:userId/major", saveUserMajor);
router.post("/:userId/gender", saveUserGender); // nova ruta za spol
//router.post("/:userId/bio", saveUserBio);

export default router;