const request = require('supertest');
const app = require('../lib/app');

describe('app routes', () => {
    it('returns "hi" via the GET to the / path', async () => {
        const expected = 'hi';
        const response = await request(app)
            .get('/');

        expect(response.text).toEqual(expected);
    });

    it('returns the text body via POST to the /echo path', async () => {
        const expected = 'Echo this message.';
        const response = await request(app)
            .post('/echo')
            .send('Echo this message.');

        expect(response.text).toEqual(expected);
    });

    it('returns a header with "red" via GET', async () => {
        const expected = '<h1>red</h1>';
        const response = await request(app)
            .get('/red');

        expect(response.text).toEqual(expected);
    });

    it('returns a header with "green" via GET', async () => {
        const expected = '<h1>green</h1>';
        const response = await request(app)
            .get('/green');

        expect(response.text).toEqual(expected);
    });

    it('returns a header with "blue" via GET', async () => {
        const expected = '<h1>blue</h1>';
        const response = await request(app)
            .get('/blue');

        expect(response.text).toEqual(expected);
    });

    it('returns "HTML NOT FOUND with any other route', async () => {
        const expected = 'HTML NOT FOUND';
        const response = await request(app)
            .get('/anything');

        expect(response.text).toEqual(expected);
    });

});
