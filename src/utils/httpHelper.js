const { lambdaResponse } = require('./lambda')
const querystring = require('querystring')

const ok = async (data) => {
  return lambdaResponse({
    statusCode: 200,
    body: data && JSON.stringify(data),
  });
};

const serverError = (error) => lambdaResponse(({
  statusCode: 500,
  body: {
    statusCode: 500,
    error: error.message,
  },
}));

const unprocessableEntity = (error) => lambdaResponse(({
  statusCode: 422,
  body: {
    statusCode: 422,
    error: error.message,
  },
}));

const notFound = () => lambdaResponse(({
  statusCode: 404,
  body: {
    statusCode: 404,
  },
}));

const badRequest = (error = '') => lambdaResponse(({
  statusCode: 400,
  body: {
    statusCode: 400,
    error: error.message || error.stack || error
  },
}));


const notAuthorized = (message) => lambdaResponse(({
  statusCode: 401,
  body: {
    statusCode: 401,
    error: message || 'Not authorized'
  },
}));

const objectToUri = (data) => Object.keys(data).length ? `?${querystring.encode(data)}` : '';

module.exports = {
  ok,
  serverError,
  unprocessableEntity,
  notFound,
  badRequest,
  notAuthorized,
  objectToUri
}