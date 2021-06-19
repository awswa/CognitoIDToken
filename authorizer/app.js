const auth = require('auth');

exports.lambdaHandler = async (event, context) => {
    try {
        // get id token from Cognito and return it to API Gateway
        const response = {
            statusCode: 200,
            body: JSON.stringify({
                    id_token: await auth.handler(event.body)
            }, null, 2)
        }

        return response
    } catch (err) {
        console.log(err);
        return err;
    }

};
