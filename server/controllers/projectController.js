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
    const projects = await Project.find()
    res.status(200).json(projects)
})
// @desc Set Project
// @route POST /api/projects
// @access Private
const setProject = asyncHandler(async (req, res) => {
    if(!req.body.title || !req.body.description || !req.body.client){
        res.status(400)
        throw new Error('Please add a text, description, and client fields')
    }

    const project = await Project.create({
        title: req.body.title,
        description: req.body.description,
        client: req.body.client
    })

    res.status(200).json(project)
})
// @desc Update Project
// @route GET /api/projects
// @access Private
const updateProject = asyncHandler(async (req, res) => {
    const project = await Project.findById(req.params.id)

    if(!project){
        res.status(400)
        throw new Error('Project not found')
    }

    const updatedProject = await Project.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.status(200).json(project)
})
// @desc Get Projects
// @route GET /api/projects
// @access Private
const deleteProject = asyncHandler(async (req, res) => {

    const project = await Project.findById(req.params.id)

    if(!project){
        res.status(400)
        throw new Error('Project not found')
    }

    await project.remove()
    res.status(200).json({id: req.params.id})
})

module.exports = {
    getProjects,
    setProject,
    updateProject,
    deleteProject
}