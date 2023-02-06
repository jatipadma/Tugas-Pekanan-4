const request = require('supertest');
const {expect} = require('chai')
const data = require('../data/userData.js')

const testData = data.CREATE_USER_DATA

describe('Post Request', () => {
    const response = request ('https://kasir-api.belajarqa.com')
    .post('/users')
    .send(testData)
    
    it('response status is 200', async () => {
        expect((await response).status).to.equal(200)
      })
})