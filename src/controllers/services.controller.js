const fs = require('fs')
const registry = require('../configs/registry.json');

exports.register = async (req, res, next) => {

    const microserviceName = req.body.microservice;
    delete req.body.microservice;
    registry.services[microserviceName] = req.body;

    fs.writeFile(__dirname + '/../configs/registry.json', JSON.stringify(registry), (error) => {
        if (error) {
            res.send({ success: false, message: `Could not register '${microserviceName}'\n` + error })
        } else {
            res.send({ success: true, message: `Successfully registered '${microserviceName}'\n` })
        }
    });
};
