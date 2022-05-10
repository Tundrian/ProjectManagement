
const express = require('express')
const {getProjects, setProject, updateProject, deleteProject} = require('../controllers/projectController')
const router = express.Router()

router.route('/').get(getProjects).post(setProject)
router.route('/:id').put(updateProject).delete(deleteProject)

module.exports = router