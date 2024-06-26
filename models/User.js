const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  
  fullName: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Unique email for each user
  },

  country: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  confirmPassword: {
    type: String,
    required: true,
  },

  phoneNumber: {
    type: String,
    required: true,
  },

  otp: {
    type: String,
  },

  token: {
    type: String,
    required: true,
  },

  status: {
    type: Boolean,
    default: false,
  },

  accountBalance: {
    type: String,
    default: 0.00
  },
  totalProfit: {
    type: String,
    default: 0.00
  },
  bonus: {
    type: String,
    default: 0.00
  },
  ref: {
    type: String,
    default: 0.00
  },
  totalDeposit: {
    type: String,
    default: 0.00
  },
  totalWithdrawal: {
    type: String,
    default: 0.00
  },
  totalInvestment: {
    type: String,
    default: 0.00
  },

  verify: {
    type: Boolean,
    default: true,
  },

  isAdmin: {
    // Role of user it will be (normal or admin )
    type: Boolean,
    default: false,
  },

}, {timestamps: true});

module.exports = User = mongoose.model('User', UserSchema )

