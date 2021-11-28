const Profile = require('../models/Profile')

const getAllProfiles = (req, res) => {
    res.send("get all profile")
}

const createProfile = async (req, res) => {
    try {
        const profile = await Profile.create(req.body)
    res.status(201).json({profile})
    } catch (err) {
        res.status(400).json({message: err.message})
    }
}

const getProfile = (req, res) => {
    res.send("get a single profile")
}

module.exports = {
    getAllProfiles,
    createProfile,
    getProfile
}