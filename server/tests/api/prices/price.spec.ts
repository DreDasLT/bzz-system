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

describe('GET /price', () => {

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

  it('OK, getting prices has no prices', (done) => {
    request(app)
      .get('/api/price')
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
    .post('/api/price')
      .set({ Authorization: `Bearer ${token}` })
      .send({
        name: "Paspirtukai test",
        minute: 0.1,
        hour: 0.5,
        day: 0.5,
        week: 0.5,
        month: 0.5,
        km: 0.5
      })
      .then((res) => {
        request(app)
          .get('/api/price')
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

describe('GET /price/:id', () => {

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

  it('OK, getting existing price works', (done) => {
    request(app)
    .post('/api/price')
      .set({ Authorization: `Bearer ${token}` })
      .send({
        name: "Paspirtukai test",
        minute: 0.1,
        hour: 0.5,
        day: 0.5,
        week: 0.5,
        month: 0.5,
        km: 0.5
      })
      .then((res) => {
        const _id = res.body._id;
        request(app)
          .get('/api/price/' + _id)
          .set({ Authorization: `Bearer ${token}` })
            .then((res) => {
              const body = res.body
              expect(body).to.have.property('_id')
              expect(body).to.have.property('name')
              expect(body).to.have.property('minute')
              expect(body).to.have.property('hour')
              expect(body).to.have.property('day')
              expect(body).to.have.property('week')
              expect(body).to.have.property('month')
              expect(body).to.have.property('km')
              done()
            })
      })
      .catch((err) => done(err))
  })

  it('OK, getting not existing price works', (done) => {
  
    request(app)
    .get('/api/price/test')
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

describe('POST /price', () => {

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

  it('OK, creating a new price works', (done) => {
    request(app)
      .post('/api/price')
      .set({ Authorization: `Bearer ${token}` })
      .send({
        name: "Paspirtukai test",
        minute: 0.1,
        hour: 0.5,
        day: 0.5,
        week: 0.5,
        month: 0.5,
        km: 0.5
      })
      .then((res) => {
        const body = res.body
        expect(body).to.have.property('_id')
        expect(body).to.have.property('name')
        expect(body).to.have.property('minute')
        expect(body).to.have.property('hour')
        expect(body).to.have.property('day')
        expect(body).to.have.property('week')
        expect(body).to.have.property('month')
        expect(body).to.have.property('km')
        done()
      })
      .catch((err) => done(err))
  })

  it('Fail, price requires name', (done) => {
    request(app)
      .post('/api/price')
      .set({ Authorization: `Bearer ${token}` })
      .send({
        minute: 0.1,
        hour: 0.5,
        day: 0.5,
        week: 0.5,
        month: 0.5,
        km: 0.5
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