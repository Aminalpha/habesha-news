'use strict';

const sinon = require('sinon');

const data = require('../../config/data');
const connection = require('../../config');

describe('Database Connection Test', () => {

    let sandbox;

    beforeEach(() => {
        sandbox = sinon.createSandbox();
    });

    it('Should connect to DB with correct URL', () => {
        sandbox.spy(console, 'log');
        return connection().then(() => {
            sinon.assert.called(console.log);
            sinon.assert.calledWithExactly(console.log, 'Database connected');
        });
    });

    it('Should fail connection to DB with wrong URL', () => {
        sandbox.spy(console, 'error');
        process.env.DATABASE_URL = 'error_url';
        return connection('mongodb://fake_domain/db_fake_database').catch(() => {
            sinon.assert.called(console.error);
            sinon.assert.calledWithExactly(console.error, 'Database connection failed');
        });
    });

    afterEach(() => {
        sandbox.restore();
    });
});