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

describe('GET /car', () => {

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

  it('OK, getting cars has no cars', (done) => {
    request(app)
      .get('/api/car')
      .set({ Authorization: `Bearer ${token}` })
      .then((res) => {
        const body = res.body
        expect(body.length).to.equal(0)
        done()
      })
      .catch((err) => done(err))
  })

  it('OK, getting cars has 1 car', (done) => {
    request(app)
    .post('/api/car')
      .set({ Authorization: `Bearer ${token}` })
      .send({
        model: "5f5a4bf30ac03467645c71d9",
        gasTank: 100,
        status: 0
      })
      .then((res) => {
        request(app)
          .get('/api/car')
            .then((res) => {
              const body = res.body
              expect(body.length).to.equal(1)
              done()
            })
      })
      .catch((err) => done(err))
  })
})

describe('GET /car/:id', () => {

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

  it('OK, getting existing car works', (done) => {
    request(app)
    .post('/api/car')
      .set({ Authorization: `Bearer ${token}` })
      .send({
        model: "5f5a4bf30ac03467645c71d9",
        gasTank: 100,
        status: 0
      })
      .then((res) => {
        const _id = res.body._id;
        request(app)
          .get('/api/car/' + _id)
          .set({ Authorization: `Bearer ${token}` })
            .then((res) => {
              const body = res.body
              expect(body).to.have.property('_id')
              expect(body).to.have.property('model')
              expect(body).to.have.property('gasTank')
              expect(body).to.have.property('status')
              done()
            })
      })
      .catch((err) => done(err))
  })

  it('OK, getting not existing car works', (done) => {
  
    request(app)
    .get('/api/car/test')
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

describe('POST /car', () => {

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

  it('OK, creating a new car works', (done) => {
    request(app)
      .post('/api/car')
      .set({ Authorization: `Bearer ${token}` })
      .send({
        model: "5f5a4bf30ac03467645c71d9",
        gasTank: 100,
        status: 0
      })
      .then((res) => {
        const body = res.body
        expect(body).to.have.property('_id')
        expect(body).to.have.property('model')
        expect(body).to.have.property('gasTank')
        expect(body).to.have.property('status')
        done()
      })
      .catch((err) => done(err))
  })

  it('Fail, car requires model', (done) => {
    request(app)
      .post('/api/car')
      .set({ Authorization: `Bearer ${token}` })
      .send({
        gasTank: 100,
        status: 0
      })
      .then((res) => {
        const body = res.body
        expect(body.errors.model.name)
          .to.equal('ValidatorError')
        done()
      })
      .catch((err) => done(err))
  })
})