const request = require('supertest')
import app from '../../server'

describe('cars api', () => {
  it('should get cars in api', async () => {
    const res = await request(app).get('/api/cars')

    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('items')
    expect(res.body.items).toMatchSnapshot()
  })

  it('should create a new post in favorite car', async () => {
    const res = await request(app).post('/api/cars/favorite').send({
      carId: 1
    })

    expect(res.statusCode).toEqual(201)
    expect(res.body).toHaveProperty('message')
    expect(res.body.message).toMatchSnapshot()
  })

  it('should get favorited cars list', async () => {
    const res = await request(app).get('/api/cars/favorite')

    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('items')
    expect(res.body.items).toMatchSnapshot()
  })

  it('should create a new post in unfavorite car', async () => {
    const res = await request(app).post('/api/cars/unfavorite').send({
      carId: 1
    })

    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('message')
    expect(res.body.message).toMatchSnapshot()
  })

  afterAll((done) => {
    done()
  })
})
