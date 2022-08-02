// ______________________________________ IMPORTS START ________________________

const mongoose = require("mongoose");
const crypto = require("crypto");
const { kStringMaxLength } = require("buffer");

// ______________________________________ IMPORTS END  ________________________
// ______________________________________ SCHEMA START  _______________________

const AccountsSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    maxlength: 30,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  instagram: {
    type: String,
    default: "",
  },
  state: {
    type: String,
    default: "",
  },
  city: {
    type: String,
    default: "",
  },
  pincode: {
    type: String,
    default: "",
  },
  location: {
    type: String,
    default: "",
  },
  bloodGrp: {
    type: String,
    required: true,
  },
  isAvailable: {
    type: Boolean,
    required: true,
    default: true,
  },
  isVerified: {
    type: Boolean,
    required: true,
    default: false,
  },
  isCall: {
    type: Boolean,
    required: true,
    default: true,
  },
  isWhatsapp: {
    type: Boolean,
    required: true,
    default: true,
  },
  isInstagram: {
    type: Boolean,
    required: true,
    default: true,
  },
  isEmail: {
    type: Boolean,
    required: true,
    default: true,
  },
  lastDonation: {
    type: Date,
    default: null,
  },
  gender: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  joined_at: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  bio: {
    type: String,
    maxlength: 120,
    default: "",
  },
  profilePic: {
    data: Buffer,
    contentType: String,
  },
  totalDonations: {
    type: Number,
    default: 0,
  },

  hash: String,
  salt: String,
});

// ______________________________________ SCHEMA END  ____________________________
//  _____________________________________ MODEL METHODS START _____________________

AccountsSchema.methods = {
  // Encrypting Password
  setPassword: function (password) {
    this.salt = crypto.randomBytes(16).toString("hex");
    this.hash = crypto
      .pbkdf2Sync(password, this.salt, 100, 64, `sha512`)
      .toString(`hex`);
  },

  // Decrypting password
  validPassword: function (password) {
    var hash = crypto
      .pbkdf2Sync(password, this.salt, 100, 64, `sha512`)
      .toString(`hex`);
    return this.hash === hash;
  },
};

//  _____________________________________ MODEL METHODS END ______________________
//  _________________________________________ EXPORTS _____________________________

const Accounts = (module.exports = mongoose.model("Accounts", AccountsSchema));
