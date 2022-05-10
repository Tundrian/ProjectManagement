const asyncHandler = require('express-async-handler')

const Project = require('../models/project')

// const project_index = (req, res) => {
//     Project.find().sort({ createdAt: -1 })
//     .then(result => {
//         console.log('Fetched Data: ', result)
//         (req, res) => {
//             res.status(200).json({message: 'Get Projects'})
//         }
//     })
//     .catch(err => console.log(`Error: ${err}`))
// }

// @desc Get Projects
// @route GET /api/projects
// @access Private
const getProjects = asyncHandler(async (req, res) => {
    if(!req.body.text){
        console.log('here')
        res.status(400).json({message: 'Please add a text field'})
    }
    res.status(200).json({message: 'Get Projects'})
})
// @desc Set Project
// @route POST /api/projects
// @access Private
const setProject = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Set Projects'})
})
// @desc Update Project
// @route GET /api/projects
// @access Private
const updateProject = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Update Project ${req.params.id}`})
})
// @desc Get Projects
// @route GET /api/projects
// @access Private
const deleteProject = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Get Project ${req.params.id}`})
})

module.exports = {
    getProjects,
    setProject,
    updateProject,
    deleteProject
}