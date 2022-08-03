// IMPORTS
const mongoose = require("mongoose");

// MODEL SCHEMA
const RequestSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  bloodGrp: {
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
    default: true,
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
  city: {
    type: String,
    default: "",
  },

  created_at: {
    type: Date,
    require: true,
    default: Date.now(),
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

RequestSchema.methods = {};

//  _____________________________________ MODEL METHODS END ______________________
//  _________________________________________ EXPORTS _____________________________

const Requests = (module.exports = mongoose.model("Requests", RequestSchema));
