const lambdaResponse = async (response) => {
    const result = {
        statusCode: response.statusCode,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
        },
        body: typeof response.body === 'object' ? JSON.stringify(response.body) : response.body,
    };
    return result;
};

module.exports = {
    lambdaResponse
}