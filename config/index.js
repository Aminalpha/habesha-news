'use strict';

const mongoose = require('mongoose');
mongoose.plugin(require('mongoose-hidden')({
    defaultHidden: {'_id': false, password: true, pin: true, '__v': true}
}));