const axios = require('axios');
const utils = require('../utils');
const mocks = require('../mocks');
const search = async ({ queryStringParameters }) => {
    try {
        if (process.env.MOCK_ENABLED == 'true') 
            return utils.httpHelper.ok(mocks.search)

        const params = utils.httpHelper.objectToUri({ key: process.env.TRIPADVISOR_KEY, language: 'pt', ...queryStringParameters })
        const url = `${process.env.TRIPADVISOR_URL}/location/search${params}`;
        const response = await axios.get(url)
        return utils.httpHelper.ok(response.data)
    } catch (error) {
        console.log(error)
        return utils.httpHelper.badRequest(error.message)
    }
}
const searchPhotos = async ({ queryStringParameters }) => {
    try {
        if (process.env.MOCK_ENABLED == 'true') 
            return utils.httpHelper.ok(mocks.photos)

        const location_id = queryStringParameters.location_id
        delete queryStringParameters.location_id

        const params = utils.httpHelper.objectToUri({ key: process.env.TRIPADVISOR_KEY, language: 'pt', ...queryStringParameters })
        const url = `${process.env.TRIPADVISOR_URL}/location/${location_id}/photos${params}`;
        console.log({ url, queryStringParameters, params })
        const response = await axios.get(url)
        return utils.httpHelper.ok(response.data)
    } catch (error) {
        return utils.httpHelper.badRequest(error.message)
    }
}
const searchNearby = async ({ queryStringParameters }) => {
    try {
        if (process.env.MOCK_ENABLED == 'true') 
            return utils.httpHelper.ok(mocks.nearby)

        const params = utils.httpHelper.objectToUri({ key: process.env.TRIPADVISOR_KEY, language: 'pt', ...queryStringParameters })
        const url = `${process.env.TRIPADVISOR_URL}/location/nearby_search${params}`;
        const response = await axios.get(url)
        return utils.httpHelper.ok(response.data)
    } catch (error) {
        return utils.httpHelper.badRequest(error.message)
    }
}
const locationReviews = async ({ queryStringParameters }) => {
    try {
        if (process.env.MOCK_ENABLED == 'true') 
            return utils.httpHelper.ok(mocks.reviews)

        const location_id = queryStringParameters.location_id
        delete queryStringParameters.location_id
        const params = utils.httpHelper.objectToUri({ key: process.env.TRIPADVISOR_KEY, language: 'pt', ...queryStringParameters })
        const url = `${process.env.TRIPADVISOR_URL}/location/${location_id}/reviews${params}`;
        const response = await axios.get(url)
        return utils.httpHelper.ok(response.data)
    } catch (error) {
        return utils.httpHelper.badRequest(error.message)
    }
}
const details = async ({ queryStringParameters }) => {
    try {
        if (process.env.MOCK_ENABLED == 'true') 
            return utils.httpHelper.ok(mocks.details)

        const location_id = queryStringParameters.location_id
        delete queryStringParameters.location_id

        const params = utils.httpHelper.objectToUri({ key: process.env.TRIPADVISOR_KEY, language: 'pt', ...queryStringParameters })
        const url = `${process.env.TRIPADVISOR_URL}/location/${location_id}/details${params}`;
        const response = await axios.get(url)
        return utils.httpHelper.ok(response.data)
    } catch (error) {
        return utils.httpHelper.badRequest(error.message)
    }
}

module.exports = {
    search,
    searchPhotos,
    searchNearby,
    locationReviews,
    details
}