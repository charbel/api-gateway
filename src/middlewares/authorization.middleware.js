exports.isAuthorized = async (req, res, next) => {

    const authString = Buffer.from(req.headers.authorization.replace('Basic ',''), 'base64').toString('utf8')

    console.log(req.headers.authorization);

    const authParts = authString.split(':')
    const username = authParts[0]
    const password = authParts[1]

    if (process.env.REGISTERY_AUTH_USERNAME === username && process.env.REGISTERY_AUTH_PASSWORD === password) {
        next()
    } else {
        res.send({ success: false, message: 'Authentication Unsuccessful.'})
    }

}
