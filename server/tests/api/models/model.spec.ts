import app from '../../../index'
import { connect, database, disconnect } from '../../../src/database/database';
import 'mocha';
import chai, { expect } from 'chai';
import User from '../../../src/entities/users/user.model';
import jwt from 'jsonwebtoken'
import * as dotenv from 'dotenv'
import { connection } from 'mongoose'
import request from 'supertest'

dotenv.config()

process.env.NODE_ENV = 'test'

const testUser =  new User({
  _id: '5f8d936e36dd8639d2e1fd83',
  name: 'superadmin',
  email: 'superadmin@mail.com',
  password: 'test',
  role: 'superadmin'
})

const token = jwt.sign({ _id: testUser._id, role: testUser.role, email: testUser.email, name: testUser.name}, process.env.TOKEN_SECRET)

describe('GET /model', () => {

  before((done) => {
    connect()
      .then(() => done())
      .catch((err) => done())
  })

  after((done) => {
    disconnect()
      .then(() => done())
      .catch((err) => done(err))
  })

  it('OK, getting models has no models', (done) => {
    request(app)
      .get('/api/model')
      .set({ Authorization: `Bearer ${token}` })
      .then((res) => {
        const body = res.body
        expect(body.length).to.equal(0)
        done()
      })
      .catch((err) => done(err))
  })

  it('OK, getting models has 1 model', (done) => {
    request(app)
    .post('/api/model')
      .set({ Authorization: `Bearer ${token}` })
      .send({
        prices: "5f5a4a92dff1036711b96a7f",
        name: "Paspirtukai test"
      })
      .then((res) => {
        request(app)
          .get('/api/model')
          .set({ Authorization: `Bearer ${token}` })
            .then((res) => {
              const body = res.body
              expect(body.length).to.equal(1)
              done()
            })
      })
      .catch((err) => done(err))
  })
})

describe('GET /model/:id', () => {

  before((done) => {
    connect()
      .then(() => done())
      .catch((err) => done())
  })

  after((done) => {
    disconnect()
      .then(() => done())
      .catch((err) => done(err))
  })

  it('OK, getting existing model works', (done) => {
    request(app)
    .post('/api/model')
      .set({ Authorization: `Bearer ${token}` })
      .send({
        prices: "5f5a4a92dff1036711b96a7f",
        name: "Paspirtukai test"
      })
      .then((res) => {
        const _id = res.body._id;
        request(app)
          .get('/api/model/' + _id)
          .set({ Authorization: `Bearer ${token}` })
            .then((res) => {
              const body = res.body
              expect(body).to.have.property('_id')
              expect(body).to.have.property('prices')
              expect(body).to.have.property('name')
              done()
            })
      })
      .catch((err) => done(err))
  })

  it('OK, getting not existing model works', (done) => {
  
    request(app)
    .get('/api/model/test')
      .set({ Authorization: `Bearer ${token}` })
      .then((res) => {
        const {text, status} = res;
        expect(status).to.be.equal(404)
        expect(text).to.be.equal(`Can not find with id: test`)
        done()
      })
      .catch((err) => done(err))
  })
})

describe('POST /model', () => {

  before((done) => {
    connect()
      .then(() => done())
      .catch((err) => done())
  })

  after((done) => {
    disconnect()
      .then(() => done())
      .catch((err) => done(err))
  })

  it('OK, creating a new model works', (done) => {
    request(app)
      .post('/api/model')
      .set({ Authorization: `Bearer ${token}` })
      .send({
        prices: "5f5a4a92dff1036711b96a7f",
        name: "Paspirtukai test"
      })
      .then((res) => {
        const body = res.body
        expect(body).to.have.property('_id')
        expect(body).to.have.property('prices')
        expect(body).to.have.property('name')
        done()
      })
      .catch((err) => done(err))
  })

  it('Fail, model requires name', (done) => {
    request(app)
      .post('/api/model')
      .set({ Authorization: `Bearer ${token}` })
      .send({
        prices: "5f5a4a92dff1036711b96a7f"
      })
      .then((res) => {
        const body = res.body
        expect(body.errors.name.name)
          .to.equal('ValidatorError')
        done()
      })
      .catch((err) => done(err))
  })
})