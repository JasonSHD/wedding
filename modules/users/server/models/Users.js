'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * User Schema
 */
var UserSchema = new Schema({
  firstName: {
    type: String,
    trim: true,
    default: ''
  },
  lastName: {
    type: String,
    trim: true,
    default: ''
  },
  displayName: {
    type: String,
    trim: true,
    default: ''
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
    default: ''
  },
  username: {
    type: String,
    unique: true,
    required: 'Please fill in a username',
    lowercase: true,
    trim: true,
    default: ''
  },
  password: {
    type: String,
    default: ''
  },
  salt: {
    type: String
  },
  apikey: {
    value: {
      type: String
    },
    created: {
      type: Date
    }
  },
  profileImageURL: {
    type: String
  },
  providerData: {},
  additionalProvidersData: {},
  role: {
    type: String,
    default: 'user',
    required: 'Please provide a user role'
  },
  subroles:{
    type:[String],
    default:[]
  },
  updated: {
    type: Date,
    default: Date.now
  },
  created: {
    type: Date,
    default: Date.now
  },
  /* For reset password */
  resetPasswordToken: {
    type: String
  },
  resetPasswordExpires: {
    type: Date
  }
});

mongoose.model('User', UserSchema);
