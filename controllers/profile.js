const Profile = require('../models/Profile')

const getAllProfiles = (req, res) => {
    res.send("get all profile")
}

const createProfile = async (req, res) => {
    try {
        const profile = await Profile.create(req.body)
        res.status(201).send({profile})
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
}

const getProfile = (req, res) => {
    res.json({id: req.params.id})
}

module.exports = {
    getAllProfiles,
    createProfile,
    getProfile
}