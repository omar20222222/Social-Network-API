const router = require("express").Router();
const {
  getCourses,
  getSingleCourse,
  createCourse,
  updateCourse,
  deleteCourse,
} = require("../../controllers/thought-controllers.js");

router.route("/").get(getCourses).post(createCourse);

router
  .route("/:courseId")
  .get(getSingleCourse)
  .put(updateCourse)
  .delete(deleteCourse);

module.exports = router;
