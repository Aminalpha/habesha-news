'use strict';

const request = require('supertest');

const app = require('../../index');
const data = require('../data');

const User = require('../../app/user/user-model');

const {username, email, password, usersSignUpUrl, usersLoginUrl} = data.data;

exports.deleteAll = () => User.remove({}).exec();

exports.signUp = (u = username, e = email, p = password) => {
    return request(app).post(usersSignUpUrl).send({username: u, email: e, password: p});
};

exports.login = (u = username, p = password) => {
    return request(app).post(usersLoginUrl).send({username: u, password: p});
};