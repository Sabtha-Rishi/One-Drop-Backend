// IMPORTS
const mongoose = require("mongoose");

// MODEL SCHEMA
const RequestSchema = new mongoose.Schema({
  bloodgrp: {
    type: String,
    required: true,
  },
  totalUnits: {
    type: Number,
    required: true,
  },
  patientName: {
    type: String,
    required: true,
  },
  patientAge: {
    type: Number,
    required: true,
  },
  hospitalName: {
    type: String,
    default: "",
    required: true,
  },
  attenderName: {
    type: String,
    required: true,
  },
  attenderPhone: {
    type: String,
    required: true,
  },
  reason: {
    type: String,
    maxlength: 30,
    default: "",
    required: true,
  },
  isActive: {
    type: Boolean,
    required: true,
    default: false,
  },
  isAnyBlood: {
    type: Boolean,
    required: true,
    default: false,
  },
  location: {
    type: String,
    maxlength: 120,
    required: true,
    default: "",
  },
  isPickup: {
    type: Boolean,
    required: true,
    default: false,
  },
  isDrop: {
    type: Boolean,
    required: true,
    default: false,
  },

  state: {
    type: String,
    default: "",
  },
  isActive: {
    type: Boolean,
    required: true,
    default: false,
  },
  donors: [
    {
      type: String,
      default: [""],
    },
  ],
});


// ______________________________________ SCHEMA END  ____________________________
//  _____________________________________ MODEL METHODS START _____________________

RequestsSchema.methods = {
};

//  _____________________________________ MODEL METHODS END ______________________
//  _________________________________________ EXPORTS _____________________________

const Requests = (module.exports = mongoose.model("Requests", RequestSchema));
