const registry = require('../configs/registry.json');
const GatewayController = require('../controllers/gateway.controller');

exports.routesConfig = function (app) {

    let publicEndpoints = [];
    for (const property in registry.services) {
        registry.services[property].endpoints.forEach(element => {
            publicEndpoints.push('/:microservice' + element);
        });
    }

    if (publicEndpoints.length > 0) {
        app.all(publicEndpoints,
            GatewayController.apiForwarding
        );
    }

    app.all("/:microservice/:path*",
        GatewayController.checkPermissions,
        GatewayController.apiForwarding
    )

};
