const mongoose = require('mongoose');

// Job Details Schema
const jobDetails = new mongoose.Schema( {
    companyName: {
        type: String, 
        required: true
    },
    recruiterName:{
        type: String,
        required: true
    },
    logoURL: {
        type: String, 
        required: true
    },
    jobPosition: {
        type: String, 
        required: true
    },
    salary: {
        type: String, 
        required: true
    },
    jobType: {
        type: String, 
        enum: ['Full-time', 'Part-time', 'Internship'], 
        required: true
    },
    remote: {
        type: String, 
        enum: ['Remote', 'Office'], 
        required: true
    },
    location: {
        type: String, 
        required: true
    },
    jobDescription: {
        type: String, 
        required: true
    },
    aboutCompany: { 
        type: String, 
        required: true
    },
    skills: {
        type: String, 
        required: true
    },
    addInfo: {
        type: String
    }
});

module.exports = mongoose.model('jobDetails', jobDetails);