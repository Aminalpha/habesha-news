'use strict';

const Profile = require('./model');
const result = require('../../util/res');
const Promise = require('bluebird');

exports.create = user_id => {
    return new Profile({user: user_id}).save();
};

exports.findOne = query => {
    return Profile
        .findOne(query)
        .exec();
};

exports.findAll = () => {
    return Profile
        .find()
        .exec();
};