const axios = require('axios');
const registry = require('../configs/registry.json');

exports.checkPermissions = async (req, res, next) => {
    console.log('check authentication server');
    next();
};

exports.apiForwarding = async (req, res) => {
    const microservice = req.params.microservice;
    console.log(req.params);
    console.log(req.url);
    if (!registry.services[microservice])
        res.status(404).send(`"${microservice}" is not registered!`);
    else {
        let url = registry.services[microservice].url;
        if (req.params.path)
            url += req.params.path + req.params[0];
        else
            url += req.url.replace(microservice, '');

        axios({
            method: req.method,
            url: url.replace(/([^:]\/)\/+/g, "$1"),
            headers: req.headers,
            data: req.body
        }).then((response) => {
            res.send(response.data)
        }).catch(error => {
            res.send(error)
        })
    }
    return;
};
