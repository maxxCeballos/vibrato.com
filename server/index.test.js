'use strict';

const request = require('supertest');

const {initializeServer, stopServer} = require('./app');

let app;


beforeAll( () => {
    app = initializeServer();
});

afterAll( () => {
    stopServer();
});


describe('boot server', () => {

    describe('check ping route', () => {
        
        test('ping route should return pong', async () => {

            // Act
            let response = await  request(app).get('/ping');
    
            // Assert
            expect(response.text).toBe('pong');
        });
    });
    

})