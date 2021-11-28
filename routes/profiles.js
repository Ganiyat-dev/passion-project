const express = require('express');
const router = express.Router();

const {
    getProfile,
    getAllProfiles,
    createProfile
} = require('../controllers/profile');

router.route('/').get(getAllProfiles).post(createProfile);
router.route('/:id').get(getProfile);

module.exports = router