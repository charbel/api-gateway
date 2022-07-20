const gatewayRoute = require("./gateway.route");
const servicesRoute = require("./services.route");

exports.routesConfig = function (app) {
    servicesRoute.routesConfig(app);
    gatewayRoute.routesConfig(app);
};
