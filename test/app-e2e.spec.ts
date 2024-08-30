import pactum from 'pactum'
import server from '../src/main'

describe('App e2e', () => {
    beforeAll(() => {
        pactum.request.setBaseUrl('http://localhost:3000')
    })

    afterAll(() => {
        server.close()
    })
    it('should return 200', () => {
        return pactum.spec().get('/').expectStatus(200)
    })
})
